import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import wp_logo from "@assets/homeAssets/assets/images/wp.png";
import fb_logo from "@assets/homeAssets/assets/images/fb.png";
import insta_logo from "@assets/homeAssets/assets/images/insta.png";
import prnt_logo from "@assets/homeAssets/assets/images/prnt.png";
import linked_logo from "@assets/homeAssets/assets/images/linkdin.png";
import sp1 from "@assets/homeAssets/assets/images/sp1.png";
import sp2 from "@assets/homeAssets/assets/images/sp2.png";
import sp3 from "@assets/homeAssets/assets/images/sp3.png";
import sp4 from "@assets/homeAssets/assets/images/sp4.png";
import sp5 from "@assets/homeAssets/assets/images/sp5.png";
import sp6 from "@assets/homeAssets/assets/images/sp6.png";
import sp7 from "@assets/homeAssets/assets/images/sp7.png";
import sp8 from "@assets/homeAssets/assets/images/sp8.png";
import sp9 from "@assets/homeAssets/assets/images/sp9.png";
import sp10 from "@assets/homeAssets/assets/images/sp10.png";
import sp11 from "@assets/homeAssets/assets/images/sp11.png";
import sp12 from "@assets/homeAssets/assets/images/sp12.png";

import { listUserEventCategory } from "@/services/client/event";
import { SET_TICKETS_CATEGORY_DETAILS } from "@/redux/store/actions/ticketsAction";

import type { EventDetail, Category } from "./types";
import { RootState } from "@/types/common";
import { loadStripe } from "@stripe/stripe-js";
import { http } from "@/services/http";
import { toast } from "react-toastify";

const EventDetail: React.FC = (): JSX.Element => {
    const { slug } = useParams()
    const location = useLocation();
    const Navigate = useNavigate();

    const dispatch = useDispatch();
    const [eventDetail, setEventDetail] = useState<EventDetail>();
    const { auth } = useSelector((state: RootState) => state);

    const url = import.meta.env.VITE_APP_BACKEND_URL_EVENTS_IMAGE;
    const organiserOrl = import.meta.env.VITE_APP_BACKEND_URL_ORGANISER_IMAGE;
    const mainBannerUrl = import.meta.env.VITE_APP_BACKEND_URL_EVENTS_MAIN_BANNER_IMAGE;
    const sittingMapUrl = import.meta.env.VITE_APP_BACKEND_URL_EVENTS_SITTING_MAP_IMAGE;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        getUserEventOrganiserList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getUserEventOrganiserList = async (): Promise<void> => {
        try {
            const { status, data } = await listUserEventCategory(slug as string);
            if (status === 200) {
                setEventDetail(data.data);
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const updatePrice = (category_id: string, selectedQty: number) => {
        const event = JSON.parse(JSON.stringify(eventDetail))
        if (event && event.categories) {
            for (const category of event.categories) {
                if (category._id === category_id) {
                    category['total'] = category.price * selectedQty
                    category['qty'] = selectedQty
                }
            }
        }
        setEventDetail(event)
    };

    // const handleBookNowClick = () => {
    //     if (userToken) {
    //         const stripeLoadData = {
    //             user_details: userData?.user_data,
    //             email: userData?.user_data?.email,
    //             tickets: [
    //                 {
    //                     name: name,
    //                     price: price,
    //                     qnty: quantity,
    //                 },
    //             ],
    //             selectedSeatsDetails: SelectSeatsDetails?.selectedSeats,
    //             selectedCategoryDetails: categoryId,
    //             eventId: location?.state?.eventId,
    //         };

    //         if (eventDetail?.floor_type === "open" && userToken) {
    //             makePayment(stripeLoadData);
    //         }
    //     } else {
    //         // navigate("/customer-details", {
    //         //     state: {
    //         //         eventId: location?.state?.eventId,
    //         //     },
    //         // });
    //     }
    // };

    // const makePayment = async (body: any) => {
    //     console.log('body', body)
    //     const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

    //     http.post("/create-checkout-session", body)
    //         .then((res) => {
    //             const sessionId = res?.data?.session_id;
    //             const result = stripe?.redirectToCheckout({ sessionId });
    //             if (result) {
    //                 console.log(result);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    const handleBookNow = async (category: Category): Promise<void> => {
        try {
            if (auth && auth.authenticated) {
                const checkout = {
                    seats: [{ categoryId: category._id }],
                    tickets: [
                        {
                            name: category.name,
                            price: category.price,
                            qnty: category.qty
                        }
                    ],
                    email: auth.user.email,
                    user_id: auth.user._id,
                    price: category.price,
                    event_id: eventDetail?._id
                }
                makePayment(checkout)
            } else {
                if (category.qty && category.qty > 0) {
                    dispatch({ type: SET_TICKETS_CATEGORY_DETAILS, payload: category, });
                    Navigate(`/customer-details/${eventDetail?._id}/${category?._id}`);
                } else {
                    toast.error('Please Select Quentity.')
                }
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    const makePayment = async (body: any) => {
        const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
        http.post("/checkout-with-quantity", body)
            .then((res) => {
                const sessionId = res?.data?.session_id;
                stripe?.redirectToCheckout({ sessionId });
            })
            .catch((error: unknown) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="list_your_event_section banner_section" style={{ backgroundImage: `url(${mainBannerUrl + eventDetail?.main_banner})`, }} >
                <div className="banner_row">
                    <div className="banner_col"></div>
                </div>
            </div>
            <section className="about_event_section">
                <div className="ae_row pd_tb c_wt">
                    <div className="ae_title_col">
                        <div className="ae_title font_34">
                            <span>{eventDetail?.name}</span>
                        </div>
                    </div>
                    <div className="ae_info_col">
                        <div className="ae_img_box">
                            <div className="ae_img">
                                <img src={url + eventDetail?.banner} alt="" />
                            </div>
                        </div>

                        {eventDetail?.floor_type === "open" && (<div className="ae_con_box"> {eventDetail?.categories?.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                        <th className="wt">Event Tickets</th>
                                        <th className="wt">Price</th>
                                        <th className="wt">Qty</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {eventDetail?.categories?.map((category: Category) => (
                                        <tr key={category?._id}>
                                            <td>{category?.name}</td>
                                            <td>${category?.price}</td>
                                            <td>
                                                <select onChange={(e) => updatePrice(category?._id, parseInt(e.target.value))} className="select-qty">
                                                    <option id="0" value="0">Quantity</option>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((ele: number, i: number) => {
                                                        return <option value={ele} key={i} >{ele}</option>
                                                    })}

                                                </select>
                                                {category.total && category.total > 0 && <span style={{ marginLeft: "15px", }}>${category.total}</span>}
                                            </td>
                                            <td>
                                                <button className="site_button" onClick={() => handleBookNow(category)}>
                                                    <span>Book Now</span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </table>
                        )}
                        </div>
                        )}

                        {eventDetail?.floor_type === "sitting" && (<div className="ae_con_box"> {eventDetail?.categories?.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                        <th className="wt"> Event Tickets </th>
                                        <th className="wt">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {eventDetail?.categories?.map((category: Category, i: number) => (
                                        <tr key={i}>
                                            <td>
                                                {category?.name}
                                            </td>
                                            <td>${category?.price}</td>
                                            <td>
                                                <span
                                                    className="site_button"
                                                    onClick={() => {
                                                        if (category?._id) {
                                                            dispatch({ type: SET_TICKETS_CATEGORY_DETAILS, payload: category, });
                                                            Navigate(`/booking/${eventDetail?._id}/${category?._id}`);
                                                        }
                                                    }}
                                                    style={{ color: "#fff", }}
                                                >
                                                    <span>Book Now</span>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </table>
                        )}
                        </div>
                        )}

                        <div className="ae_table_box">
                            <div className="ae_con_first_box">
                                <div className="ae_content_first_box_inner border_box">
                                    <div className="ae_con_title font_24">
                                        <span>About Event</span>
                                    </div>
                                    <div className="ae_con_text text gc">
                                        <b>Artist Name: </b>
                                        <span>{eventDetail?.artist_name}</span>
                                        <br />
                                        <b>Date: </b>
                                        <span>
                                            {eventDetail?.date ? moment(eventDetail?.date).format("DD-MM-YYYY") : "-"}
                                        </span>
                                        <br />
                                        <b>Time: </b>
                                        <span>
                                            {eventDetail?.time ? moment(eventDetail?.time, "HH:mm").format("h:mm A") + " " + "Onwards" : "_"}
                                        </span>
                                        <br />
                                        <a href="https://maps.app.goo.gl/eEgMFT3wsfGBV4xw5">
                                            <b>Venue: </b>
                                            <span className="gc">
                                                {eventDetail?.venue?.address}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="ae_con_sec_box">
                                <div className="ae_con_sec_box_inner border_box">
                                    <div className="ae_con_title font_24">
                                        <span>Organized by</span>
                                    </div>
                                    <div className="ae_con_sec_detail">
                                        <div className="ae_con_sec_detail_inner">
                                            <div className="ae_detail_img">
                                                <img src={organiserOrl + eventDetail?.organisedBy?.[0]?.organiser_photo} alt="" />
                                            </div>
                                            <div className="ae_img_text_box">
                                                <div className="ae_img_title">
                                                    <span>
                                                        {eventDetail?.organisedBy?.[0]?.organiser_name}
                                                    </span>
                                                </div>
                                                <div className="ae_img_red_btn">
                                                    <div className="svg_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none" > <path d="M21.8897 0H2.10928C0.948615 0 0 0.944443 0 2.10928V14.765C0 15.9302 0.949224 16.8743 2.10928 16.8743H21.8897C23.0503 16.8743 23.999 15.9298 23.999 14.765V2.10928C23.999 0.944162 23.0499 0 21.8897 0ZM21.5658 1.40619L12.5443 10.4571C12.2695 10.7328 11.7296 10.733 11.4546 10.4571L2.43318 1.40619H21.5658ZM1.40619 14.5065V2.36779L7.45585 8.43713L1.40619 14.5065ZM2.43318 15.4681L8.44857 9.43309L10.4587 11.4498C11.2825 12.2762 12.7168 12.2759 13.5403 11.4498L15.5504 9.43314L21.5658 15.4681H2.43318ZM22.5928 14.5065L16.5431 8.43713L22.5928 2.36779V14.5065Z" fill="white" /> </svg>
                                                    </div>
                                                    <div className="svg_title wt text">
                                                        <span>
                                                            Contact Organizer
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ae_con_third_box">
                                <div className="ae_con_third_box_inner border_box">
                                    <div className="ae_con_title font_24">
                                        <span>Share This Event</span>
                                    </div>
                                    <div className="ae_icon">
                                        <a href="#" className="ae_icon_img">
                                            <img src={wp_logo} alt="" />
                                        </a>
                                        <a href="#" className="ae_icon_img">
                                            <img src={fb_logo} alt="" />
                                        </a>
                                        <a href="#" className="ae_icon_img">
                                            <img src={insta_logo} alt="" />
                                        </a>
                                        <a href="#" className="ae_icon_img">
                                            <img src={prnt_logo} alt="" />
                                        </a>
                                        <a href="#" className="ae_icon_img">
                                            <img src={linked_logo} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sm_section">
                <div className="sm_row  c_wt">
                    <div className="sm_title_col">
                        <div className="sm_title font_34 df">
                            <span>Sitting Map</span>
                        </div>
                    </div>
                    <div className="sm_col">
                        <div className="sm_img_box">
                            <div className="sm_img">
                                <img src={sittingMapUrl + eventDetail?.sitting_map} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="or_section">
                <div className="or_row pd_tb c_wt">
                    <div className="or_title font_34 tc">
                        <span>Our sponsers</span>
                    </div>

                    <div className="or_col_box">
                        <div className="or_block df">
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp1} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp2} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp3} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp4} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp5} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp6} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp7} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp8} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp9} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp10} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp11} />
                                    </div>
                                </div>
                            </div>
                            <div className="or_box sp_box">
                                <div className="or_box_a">
                                    <div className="or_img">
                                        <img src={sp12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="art_section">
                <div className="art_row  pd_b c_wt">
                    <div className="art_col">
                        <div className="art_box">
                            <div className="art_box_inner border_box">
                                {/* <div className="artist_box df"> */}
                                <div className="art_left">
                                    <div className="art_title font_24">
                                        <span>About Artist</span>
                                    </div>
                                    <div className="art_name rd">
                                        <span>{eventDetail?.name}</span>
                                    </div>
                                    <div className="art_text text gc">
                                        <p>
                                            {eventDetail?.about_artist && typeof eventDetail?.about_artist === "string" ? eventDetail?.about_artist.replace(/<p>/g, "").replace(/<\/p>/g, "") : ""}
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="art_right">
                                        <div className="art_img">
                                            <img src={artist} alt="" />
                                        </div>
                                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="art_box">
                            <div className="art_box_inner border_box">
                                <div className="art_title font_24">
                                    <span>Event Terms & Conditions</span>
                                </div>

                                <div className="art_text text gc">
                                    <ul className="art_text_ul">
                                        <li>
                                            {eventDetail?.terms_condition && typeof eventDetail?.terms_condition === "string" ? eventDetail?.terms_condition?.replace(/<p>/g, "")?.replace(/<\/p>/g, "") : ""}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="art_box">
                            <div className="art_box_inner border_box">
                                <div className="art_title font_24">
                                    <span>Event Disclaimer</span>
                                </div>

                                <div className="art_text text gc">
                                    <ul className="art_text_ul">
                                        <li>
                                            {eventDetail?.desclaimer && typeof eventDetail?.desclaimer === "string" ? eventDetail?.desclaimer.replace(/<p>/g, "").replace(/<\/p>/g, "") : ""}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default EventDetail;
