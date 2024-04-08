import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { SELECTED_SEATS } from "@/redux/store/actions/ticketsAction";

import selected_seat from "@assets/images/seats/selected_seat.gif";
import unselected_seat from "@assets/images/seats/unselected_seat.gif";
import booked_seat from "@assets/images/seats/booked_seat.gif";
import accessible_seat from "@assets/images/seats/accessible.png";

import { createSeatBooking, eventCategorySeats } from "@/services/client/event";
import { http } from "@/services/http";
import type { EventSheetDetail, Block, Row, Sheet } from './types'
import { RootState } from "@/types/common";

interface selectedSeat {
    categoryId: string;
    block_id: string;
    row_id: string;
    row: string;
    seat_id: string;
    number: number;
}
const SelectSeatPage: React.FC = (): JSX.Element => {
    const { eventId, categoryId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [event, setEvent] = useState<EventSheetDetail>();
    const [selected_seats, setSelected_Seats] = useState<selectedSeat[]>([]);
    const { authenticated, user } = useSelector((state: RootState) => state.auth);
    const { SelectSeats } = useSelector((state: RootState) => state);

    useEffect(() => {
        getEventSeatsBooking();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getEventSeatsBooking = async (): Promise<void> => {
        try {
            const { status, data } = await eventCategorySeats(categoryId as string);
            if (status === 200) {
                if (data.catogoryRaw && Array.isArray(data.catogoryRaw) && data.catogoryRaw.length > 0) {

                    const list = data.catogoryRaw.map((block: EventSheetDetail) => ({
                        ...block,
                        blocks: block.blocks.sort((a: Block, b: Block) => b.position_number - a.position_number)
                    }));

                    list.forEach((item: EventSheetDetail) => {
                        item.blocks.forEach((block: Block) => {
                            block.rows.reverse();
                        });
                    });
                    setEvent(list[0]);
                }
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleSelectSeat = (block_id: string, row_id: string, row: string, seat_id: string, number: number) => {
        if (selected_seats.find((obj) => obj.seat_id === seat_id)) {
            const list = selected_seats.filter((obj) => obj.seat_id !== seat_id);
            setSelected_Seats(list)
        } else {
            setSelected_Seats([...selected_seats, { categoryId: categoryId as string, block_id, row_id, row, seat_id, number }])
        }
    }

    const handleSubmit = async (): Promise<void> => {
        if (selected_seats?.length && event?.price) {
            const totalPrice = selected_seats.length > 0 ? selected_seats.length * event?.price as number : 0;
            dispatch({
                type: SELECTED_SEATS,
                payload: {
                    selectedSeats: selected_seats,
                    totalAmount: totalPrice,
                },
            });
            if (authenticated) {
                const payload = {
                    seats: selected_seats,
                }
                const { status } = await createSeatBooking(payload)
                if (status === 200) {
                    // dispatch({ type: REMOVE_SEATS_DATA })
                    const checkout = {
                        seats: selected_seats,
                        tickets: [
                            {
                                name: SelectSeats.tickets_category_details.name,
                                price: SelectSeats.tickets_category_details.price,
                                qnty: selected_seats.length
                            }
                        ],
                        email: user.email,
                        user_id: user._id,
                        price: SelectSeats.tickets_category_details.price,
                        event_id: eventId
                    }
                    makePayment(checkout)
                }
            } else {
                navigate(`/customer-details/${eventId}/${categoryId}`);
            }
        }
    }

    // payment integration
    const makePayment = async (body: any) => {
        const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
        // return false;
        http.post("/checkout-session", body)
            .then((res) => {
                const sessionId = res?.data?.session_id;
                stripe?.redirectToCheckout({ sessionId });
            })
            .catch((error: unknown) => {
                console.log(error);
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <section className="select_seat_section seat_section ">
                <div className="c_wt">
                    <div className="customer_seat_col">
                        <div className="select_seat_col select_seat_col_1">
                            <div className="seat_title font_34">
                                <span>{event?.event?.name}</span>
                            </div>
                            <div className="seat_cat_col df">
                                <div className="seat_cat_box">
                                    <div className="cat_icon">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="cat_text text">
                                        <span>
                                            {moment(event?.event?.time, ["h:mm"]).format("h:mm A")}
                                        </span>
                                    </div>
                                </div>
                                <div className="seat_cat_box">
                                    <div className="cat_icon">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                    <div className="cat_text text">
                                        <span>
                                            {moment(event?.event?.date).format("ddd DD MMM YYYY")}
                                        </span>
                                    </div>
                                </div>
                                <div className="seat_cat_box">
                                    <div className="cat_icon">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                    <div className="cat_text text">
                                        <span>{event?.venue?.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="customer_details_col seat_section c_wt">
                <div className="df customer_details_top">
                    <div className="customer_detail_box customer_detail_box_3">
                        <div className="time_box tc table_border">
                            <div className="cp_box text table_header">
                                <span>Ticket Category</span>
                            </div>
                            <div className="time_text font_24">
                                <span>{event?.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="customer_detail_box customer_detail_box_2">
                        <div className="time_box tc table_border">
                            <div className="cp_box text table_header">
                                <span>Selected Seat Number(s)</span>
                            </div>

                            <div className="time_text font_24">
                                {selected_seats.length
                                    ? selected_seats?.map((raw: selectedSeat, index: number) => (
                                        <span key={index}>
                                            {event?.name}-{raw?.row}-{raw?.number}
                                            {index < selected_seats?.length - 1 ? ", " : ""}
                                        </span>
                                    ))
                                    : "-"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer_details_col seat_section c_wt">
                <div className="customer_detail_col_one">
                    <div className="customer_detail_box">
                        <div className="time_box tc table_border">
                            <div className="cp_box text table_header">
                                <span>Select Sheet</span>
                            </div>
                            <div className="check_boxes tc df text">
                                <div className="check_boxes tc df text">
                                    <ul className="seat_number">
                                        <li style={{ background: `transparent url(${accessible_seat}) no-repeat center`, backgroundSize: '18px', userSelect: "none", cursor: "default", padding: "0px 10px", }} >
                                            <a>&nbsp;</a>
                                        </li>
                                    </ul>
                                    <label htmlFor="seat1">Accessible Seats</label>
                                    <ul className="seat_number">
                                        <li style={{ background: `transparent url(${unselected_seat}) no-repeat center`, userSelect: "none", cursor: "default", padding: "0px 10px", }} >
                                            <a>&nbsp;</a>
                                        </li>
                                    </ul>
                                    <label htmlFor="seat1">Available Seats</label>
                                    <ul className="seat_number">
                                        <li style={{ background: `transparent url(${selected_seat}) no-repeat center`, userSelect: "none", cursor: "default", padding: "0px 10px", }} >
                                            <a>&nbsp;</a>
                                        </li>
                                    </ul>
                                    <label htmlFor="seat2">Selected Seats</label>
                                    <ul className="seat_number">
                                        <li style={{ background: `transparent url(${booked_seat}) no-repeat center`, userSelect: "none", cursor: "default", padding: "0px 10px", }} >
                                            <a>&nbsp;</a>
                                        </li>
                                    </ul>
                                    <label htmlFor="seat3">Sold Out</label>
                                    <br />
                                </div>
                            </div>

                            {/* <div className="seat_category site_title tc">
                                <span>VIP</span>
                            </div>
                            <div className="select_seat text tc">
                                <span>Select 5 Seats</span>
                            </div> */}
                            <div>
                                <div className="seat_number_block">
                                    {
                                        event?.blocks && event?.blocks.length > 0 && event?.blocks.map((block: Block, ind: number) => {
                                            return (
                                                <div className="seat_block" key={ind}>
                                                    {
                                                        block.rows && block.rows.length > 0 && block.rows.map((row: Row, inx: number) => {
                                                            return (
                                                                <div className="seat-row" key={inx}>
                                                                    <span>{row.row}</span>
                                                                    {
                                                                        row.sheets && row.sheets.length > 0 && row.sheets.map((seat: Sheet, i: number) => {
                                                                            if (seat.delete) {
                                                                                return (
                                                                                    <button key={i} className="seat-item empty">
                                                                                        <img src={booked_seat} alt="empty" />
                                                                                    </button>
                                                                                )
                                                                            }
                                                                            if (seat.booked || seat.hold) {
                                                                                return (
                                                                                    <button className="seat-item" key={i} >
                                                                                        <img src={booked_seat} alt="booked seat" />
                                                                                    </button>
                                                                                )
                                                                            }
                                                                            if (seat.accessible) {
                                                                                return (
                                                                                    <button className="seat-item" key={i} >
                                                                                        <img src={accessible_seat} alt="accessible seat" width={16} />
                                                                                    </button>
                                                                                )
                                                                            }
                                                                            return (
                                                                                <button className="seat-item" key={i} onClick={() => handleSelectSeat(block._id, row._id, row.row, seat._id, seat.number)} >
                                                                                    {selected_seats.find((item) => item.seat_id === seat._id) ?
                                                                                        <img src={selected_seat} alt="selected seat" />
                                                                                        :
                                                                                        <img src={unselected_seat} alt="unselected seat" />
                                                                                    }

                                                                                </button>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="customer_detail_price">
                        <div className="time_box tc table_border">
                            <div className="cp_box fw4 table_header">
                                <span> Price & Number of Ticket(s)</span>
                            </div>
                            <div className="time_text font_24 red">
                                <span>
                                    {event?.price != null && `$${event?.price} x ${selected_seats.length} = $${selected_seats.length * event?.price}`}
                                </span>
                            </div>
                        </div>

                        <div className="time_box tc table_border">
                            <div className="cp_box text table_header">
                                <span>Total Price</span>
                            </div>
                            <div className="time_text font_24 red">
                                <span>
                                    {selected_seats.length && event?.price ? `$${selected_seats.length * event?.price}` : "-"}
                                </span>
                            </div>
                        </div>

                        <div className="popup_btn center-container">
                            <button onClick={handleSubmit} className="site_button sign_up ">
                                <span>Continue</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="stage_box">
                <div className="stage_box_inner tc site_title">
                    <span>Stage</span>
                </div>
            </div>


            <div className="popup_cancle_col cancle gc text tc">
                {/* <a href="#">
                    <span>Cancle</span>
                </a> */}
            </div>


        </>

    );
};

export default SelectSeatPage;
{/* <div className="login_section">
    <div className="login_row">
        <div className="login_col">
            <div className="modal__overlay"></div>
            <div className="phone__wrapper_box phone_box">
                <div className="login_box">
                    <div className="login_title site_title tc">
                        <span>Sign In</span>
                    </div>
                    <hr />
                    <div className="login_text text tc">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                        </span>
                    </div>
                </div>
                <div className="login_form_col">
                    <form method="POST">
                        <div className="input__form">
                            <input
                                id="input"
                                type="tel"
                                name="mobileNumber"
                                placeholder=" "
                                className="input__input"
                                value=""
                                style={{ paddingLeft: "3.4rem;" }}
                            />
                            <label htmlFor="mobileNumber" className="input__code">
                                +91
                            </label>
                            <label
                                htmlFor="mobileNumber"
                                className="input__label"
                                style={{ left: "3rem;" }}
                            >
                                Mobile Number
                            </label>
                        </div>
                        <div className="code">
                            <input
                                type="text"
                                id="input"
                                placeholder="verification code"
                                className="input__input"
                            />
                            <button
                                type="button"
                                className="phone_Button login_btn_poup get_code"
                            >
                                Get Code
                            </button>
                        </div>

                        <div className="popup_btn">
                            <a
                                href="customer-details.php"
                                className="site_button"
                                target="_blank"
                            >
                                <span>Continue</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> */}
