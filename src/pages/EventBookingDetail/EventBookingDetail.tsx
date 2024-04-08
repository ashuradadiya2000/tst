import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import FormButton from "@/components/Atoms/Form/FormButton/FormButton";
import TimerCount from './TimerCount'
import dabit from "@assets/homeAssets/assets/images/c1.png";
import credit from "@assets/homeAssets/assets/images/c2.png";
import masterCard from "@assets/homeAssets/assets/images/c3.png";
import gpayCard from "@assets/homeAssets/assets/images/c4.png";

import { UserRegisterSchema } from "@/validationSchema";

import { createRegister, createSeatBooking, eventDetail } from "@/services/client/event";
import { http } from "@/services/http";

import { UserRegister, EventDetail } from "./types";
import { RootState } from "@/types/common";
import { AUTH_SUCCESS } from "@/redux/store/actions/auth";
import { authStorage } from "@/utils/login";

import CityList from "@assets/city_list.json";
import StateList from "@assets/states_list.json";

const EventBookingDetail: React.FC = (): JSX.Element => {
    const { eventId } = useParams()
    const location = useLocation();
    const dispatch = useDispatch()

    const [event, setEvent] = useState<EventDetail>();
    const { SelectSeats } = useSelector((state: RootState) => state);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        getEventDetail(eventId as string)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getEventDetail = async (id: string) => {
        try {
            const { status, data } = await eventDetail(id)
            if (status === 200) {
                setEvent(data.data)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const showPassword = false;
    const showConfirmPassword = false;
    const url = import.meta.env.VITE_APP_BACKEND_URL_EVENTS_IMAGE;

    const register = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            state: "",
            city: "",
            phone_number: "",
            address: "",
            email: "",
            postcode: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: UserRegisterSchema,
        onSubmit: async (values: UserRegister) => {
            console.log("values", values);
            const formdata = new FormData();
            formdata.append("firstname", values?.firstname);
            formdata.append("lastname", values.lastname);
            formdata.append("state", values.state);
            formdata.append("city", values.city);
            formdata.append("phone_number", values.phone_number);
            formdata.append("email", values.email);
            formdata.append("postcode", values.postcode);
            formdata.append("password", values.password);
            formdata.append("confirm_password", values.confirm_password);

            try {
                const { status, data } = await createRegister(formdata);
                if (status === 200) {
                    if (event?.floor_type === "sitting") {

                        localStorage.setItem('token', data.token)
                        const payload = {
                            seats: SelectSeats.selectedSeats,
                        }
                        const { status } = await createSeatBooking(payload)
                        if (status === 200) {
                            authStorage.setAuthDetails(data.token)
                            dispatch({
                                type: AUTH_SUCCESS,
                                payload: {
                                    user: data.user,
                                    token: data.token,
                                    role: data.role,
                                }
                            })
                            const checkout = {
                                seats: SelectSeats.selectedSeats,
                                tickets: [
                                    {
                                        name: SelectSeats.tickets_category_details.name,
                                        price: SelectSeats.tickets_category_details.price,
                                        qnty: SelectSeats.selectedSeats.length
                                    }
                                ],
                                email: values.email,
                                user_id: data.user._id,
                                price: SelectSeats.tickets_category_details.price,
                                event_id: eventId
                            }
                            makePayment(checkout)
                        }
                    }
                    if (event?.floor_type === "open") {
                        console.log('data', data);
                        authStorage.setAuthDetails(data.token)
                        dispatch({
                            type: AUTH_SUCCESS,
                            payload: {
                                user: data.user,
                                token: data.token,
                                role: data.role,
                            }
                        })
                        const checkout = {
                            seats: [{ categoryId: SelectSeats.tickets_category_details._id }],
                            tickets: [
                                {
                                    name: SelectSeats.tickets_category_details.name,
                                    price: SelectSeats.tickets_category_details.price,
                                    qnty: SelectSeats.tickets_category_details.qty
                                }
                            ],
                            email: data.user.email,
                            user_id: data.user._id,
                            price: SelectSeats.tickets_category_details.price,
                            event_id: eventId
                        }
                        makePayment2(checkout)
                    }
                }
            } catch (error) {
                console.log('error', error)
            }
        },
    });

    const makePayment = async (body: any) => {
        try {
            const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
            http.post("/checkout-session", body)
                .then(async (res) => {
                    const sessionId = res?.data?.session_id;
                    await stripe?.redirectToCheckout({ sessionId })
                })
                .catch((error: unknown) => {
                    console.log(error);
                });
        } catch (err) {
            console.log('err', err)
        }
    };
    const makePayment2 = async (body: any) => {
        const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
        // return false;
        http.post("/checkout-with-quantity", body)
            .then(async (res) => {
                const sessionId = res?.data?.session_id;
                await stripe?.redirectToCheckout({ sessionId })
            })
            .catch((error: unknown) => {
                console.log(error);
            });
    };

    return (
        <section className="select_seat_section">
            <div className="c_wt">
                <div className="customer_detail_row">
                    <div className="customor_detail_col df">
                        <div className="ae_img_box customer_detail_img_box">
                            <div className="ae_img">
                                <img src={url + event?.banner} alt="" />
                            </div>
                            <div className="img_text tc">
                                <span>We Accept these major credit card </span>
                            </div>
                            <div className="img_inr_box df">
                                <div className="img_inr">
                                    <img src={dabit} alt="" />
                                </div>
                                <div className="img_inr">
                                    <img src={credit} alt="" />
                                </div>
                                <div className="img_inr">
                                    <img src={masterCard} alt="" />
                                </div>
                                <div className="img_inr">
                                    <img src={gpayCard} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="customer_detail_form_box">
                            <TimerCount floor_type={event?.floor_type as string} />
                            <form className="text-left" onSubmit={register.handleSubmit}>
                                <div className="contact_row input_row">
                                    <div className="contact_col">
                                        <label htmlFor="firstname">First Name:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                                placeholder="Your First Name"
                                                value={register?.values?.firstname}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.firstname && register.touched.firstname && (<p className="red"> {register.errors.firstname} </p>)}
                                        </div>
                                    </div>


                                    <div className="contact_col">
                                        <label htmlFor="lastname">Last Name:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type="text"
                                                id="lastname"
                                                name="lastname"
                                                placeholder="Your Last Name"
                                                value={register?.values?.lastname}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.lastname && register.touched.lastname && (<p className="red"> {register.errors.lastname} </p>)}
                                        </div>
                                    </div>

                                    <div className="contact_col">
                                        <label htmlFor="email">Email:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email Address"
                                                value={register?.values?.email}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.email && register.touched.email && (<p className="red"> {register.errors.email} </p>)}
                                        </div>
                                    </div>

                                    <div className="contact_col">
                                        <label htmlFor="password">Password:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                name="password"
                                                placeholder="Your Password"
                                                value={register?.values?.password}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.password && register.touched.password && (<p className="red"> {register.errors.password} </p>)}
                                        </div>
                                    </div>

                                    <div className="contact_col">
                                        <label htmlFor="password2">Confirm Password:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type={showConfirmPassword ? "text" : "password"}
                                                id="password2"
                                                name="confirm_password"
                                                placeholder="Your Confirm Password"
                                                value={register?.values?.confirm_password}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.confirm_password && register.touched.confirm_password && (<p className="red"> {register.errors.confirm_password} </p>)}
                                        </div>
                                    </div>

                                </div>
                                <div className="contact_row mail_row">
                                    <div className="contact_col">
                                        <label htmlFor="address">Street Name:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type="text"
                                                id="address"
                                                name="address"
                                                placeholder="Your Street Name"
                                                value={register?.values?.address}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.address && register.touched.address && (<p className="red"> {register.errors.address} </p>)}
                                        </div>
                                    </div>

                                    <div className="contact_col">
                                        <label htmlFor="state">State:</label>
                                        <div className='form-input'>
                                            <select
                                                className="input_col"
                                                id="state"
                                                name="state"
                                                onChange={register.handleChange}
                                            >
                                                <option value=''>Select Your Street Name </option>
                                                {StateList.map((state: { state: string }, inx: number) => {
                                                    return (
                                                        <option key={inx} value={state.state} selected={register?.values?.state == state.state}>{state.state}</option>
                                                    )
                                                })}
                                            </select>
                                            {register.errors.state && register.touched.state && (<p className="red"> {register.errors.state} </p>)}
                                        </div>
                                    </div>

                                    <div className="contact_col">
                                        <label htmlFor="city">City/Suburb:</label>
                                        <div className='form-input'>
                                            <select
                                                className="input_col"
                                                id="city"
                                                name="city"
                                                onChange={register.handleChange}
                                            >
                                                <option value=''>Select Your City Name </option>
                                                {CityList.map((city: { city: string }, inx: number) => {
                                                    return (
                                                        <option key={inx} value={city.city} selected={register?.values?.city == city.city}>{city.city}</option>
                                                    )
                                                })}
                                            </select>
                                            {register.errors.city && register.touched.city && (<p className="red"> {register.errors.city} </p>)}
                                        </div>
                                    </div>


                                    <div className="contact_col">
                                        <label htmlFor="phone_number">Mobile No.:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type="number"
                                                id="phone_number"
                                                name="phone_number"
                                                placeholder="Your Mobile No."
                                                value={register?.values?.phone_number}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.phone_number && register.touched.phone_number && (<p className="red"> {register.errors.phone_number} </p>)}
                                        </div>
                                    </div>

                                    <div className="contact_col">
                                        <label htmlFor="postcode">Postcode:</label>
                                        <div className='form-input'>
                                            <input
                                                className="input_col"
                                                type="number"
                                                id="postcode"
                                                name="postcode"
                                                placeholder="Your Postcode"
                                                value={register?.values?.postcode}
                                                onChange={register.handleChange}
                                            />
                                            {register.errors.postcode && register.touched.postcode && (<p className="red"> {register.errors.postcode} </p>)}
                                        </div>
                                    </div>

                                </div>

                                <div className="contact_row agree_contact_row">
                                    <div className="contact_col_agree">
                                        <input type="checkbox" id="agree" name="agree" value="agree" />
                                        <label htmlFor="agree" >
                                            I agree to the <Link to='/terms-condition' style={{ textDecoration: 'underline' }}>Terms and Conditions</Link>
                                        </label>
                                        <br />
                                    </div>
                                </div>

                                <div className="popup_btn">
                                    <FormButton
                                        variants="primary"
                                        className="site_button"
                                        type="submit"
                                    >
                                        <span>
                                            Continue to Pay
                                        </span>
                                    </FormButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventBookingDetail