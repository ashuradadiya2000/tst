import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import moment from "moment"

import { REMOVE_SEATS_DATA } from "@/redux/store/actions/ticketsAction"

// import PhoneCall from "@assets/images/payments/call.svg";
import Right_Tick from "@assets/images/tick.png";
import { confirmPayment, orderDetails } from "@/services/client/event"

import type { order } from './types'

const SuccessPayment: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()
    const [parems] = useSearchParams()

    const session_id = parems.get("session_id") as string
    const payment_mode = parems.get("payment_mode") as string;
    const payment_status = parems.get("payment_status") as string;

    const [confirmBooking, setConfirmBooking] = useState<order>()

    useEffect(() => {
        handleConfirmPayment()
        orderDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const orderDetail = async (): Promise<void> => {
        try {
            const { status, data } = await orderDetails(session_id);
            console.log('status, data', status, data);
            if (status === 200) {
                setConfirmBooking(data.data)
                dispatch({
                    type: REMOVE_SEATS_DATA
                })
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    const handleConfirmPayment = async (): Promise<void> => {
        try {
            const payload = {
                session_id,
                payment_mode,
                payment_status
            }
            const { status } = await confirmPayment(payload);
            if (status === 200) {
                dispatch({
                    type: REMOVE_SEATS_DATA
                })
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <section className="sm_section">
            <div className="sm_row">
                <div style={{ margin: "40px 0" }}>
                    <div className="sm_img" style={{ padding: "1.5rem", justifyContent: "unset", flexDirection: "column", }} >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }} >
                            <div className="cp_box fw4" style={{ padding: "10px 20px", width: "100%", display: "flex", justifyContent: "start", alignItems: "start", flexDirection: "column", }} >
                                <span style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", fontSize: "32px", fontWeight: 500, color: "#009900", }} >
                                    <div style={{ height: 35, width: 35, marginRight: 10, }} >
                                        <img
                                            src={Right_Tick}
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                    Booking Confirmed
                                </span>

                                <span style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", fontWeight: 500, }} >
                                    Congratulations! Your tickets are Successfully Booked
                                </span>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-evenly", }} >
                            <div className="ae_table_box" style={{ width: "50%" }} >
                                <div className="ae_con_first_box">
                                    <div className="ae_content_first_box_inner border_box" style={{ padding: "0.8rem 1.5rem" }} >
                                        <div className="ae_con_title font_24">
                                            <span>About Event</span>
                                        </div>
                                        <div className="ae_con_text text gc">
                                            <b>Artist Name: </b>
                                            <span>{confirmBooking?.event?.artist_name}</span>
                                            <br />
                                            <b>Date: </b>
                                            <span>
                                                {moment(confirmBooking?.event?.date).format("DD-MM-YYYY",)}
                                            </span>
                                            <br />
                                            <b>Time: </b>
                                            <span>{confirmBooking?.event?.time}</span>
                                            <br />
                                            <a href="https://maps.app.goo.gl/eEgMFT3wsfGBV4xw5">
                                                <b>Venue: </b>
                                                <span className="gc">
                                                    {confirmBooking?.venue?.venue}
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ae_con_first_box">
                                    <div className="ae_content_first_box_inner border_box" style={{ padding: "10px 15px" }} >
                                        <div className="img_text" style={{ padding: "unset", display: "flex", justifyContent: "space-between", alignItems: "center", }} >
                                            <span>Need Any Help?</span>
                                            <div className="cp_box fw4 table_header" style={{ padding: "5px 10px", }} >
                                                <span style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", }} >
                                                    +0123456789
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ae_con_first_box">
                                    <div className="coupen_button site_button">
                                        <span>Go to My Account</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ae_table_box" style={{ width: "44%" }} >
                                <div className="ae_con_first_box">
                                    <div className="ae_content_first_box_inner" style={{ boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.09)", padding: "2rem", }} >
                                        <div className="ae_con_title font_24" style={{ fontSize: 17 }} >
                                            <span>Ticket Details</span>
                                        </div>
                                        <div className="ae_con_text text gc">
                                            <div style={{ display: "flex", alignItems: "center", border: "1px solid #e4e4e4", marginBottom: 10, }} >
                                                <div className="cp_box fw4 table_header" style={{ width: '30%' }} >
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", }} >
                                                        Ticket Category
                                                    </span>
                                                </div>
                                                <div className="cp_box fw4"  >
                                                    <span style={{ padding: '5px 10px' }}>
                                                        <b> {confirmBooking?.category} </b>
                                                    </span>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", border: "1px solid #e4e4e4", marginBottom: 10, }} >
                                                <div className="cp_box fw4 table_header" style={{ width: '30%' }}>
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", }} >
                                                        Seat Number
                                                    </span>
                                                </div>
                                                <div className="cp_box fw4">
                                                    <span style={{ padding: '5px 10px' }}>
                                                        {confirmBooking?.seats.map((item, i: number) => {
                                                            return (
                                                                <b key={i}>{item.row}-{item.number}{confirmBooking?.seats.length - 1 === i ? '' : ','}&nbsp; </b>
                                                            )
                                                        })}
                                                    </span>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", border: "1px solid #e4e4e4", marginBottom: 10, }} >
                                                <div className="cp_box fw4 table_header" style={{ width: '30%' }}>
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", }} >
                                                        Tickets
                                                    </span>
                                                </div>
                                                <div className="cp_box fw4">
                                                    <span style={{ padding: '5px 10px' }}>
                                                        <b>{confirmBooking?.quantity}</b>
                                                    </span>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", border: "1px solid #e4e4e4", marginBottom: 10, }} >
                                                <div className="cp_box fw4 table_header" style={{ width: '30%' }}>
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", }} >
                                                        Tickets Price
                                                    </span>
                                                </div>
                                                <div className="cp_box fw4">
                                                    <span style={{ padding: '5px 10px' }}>
                                                        <b>${confirmBooking?.price}</b>
                                                    </span>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #e4e4e4", paddingBottom: 10, marginBottom: 10, }} >
                                                <div className="cp_box fw4" style={{ width: '30%' }} >
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 500, }} >
                                                        Sub Total
                                                    </span>
                                                </div>
                                                <div className="cp_box fw4" style={{ padding: '5px 10px' }}>
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 500, }} >
                                                        ${confirmBooking && confirmBooking?.price * confirmBooking?.quantity}
                                                    </span>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", }} >
                                                <div className="cp_box fw4 rd" style={{ width: "30%" }} >
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 500, }} >
                                                        Total Price:
                                                    </span>
                                                </div>
                                                <div className="cp_box fw4 rd" style={{ padding: '5px 10px' }}>
                                                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 500, }} >
                                                        ${confirmBooking && confirmBooking?.price * confirmBooking?.quantity}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessPayment
