import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { BsFillEyeSlashFill } from "react-icons/bs";
import FormButton from "@/components/Atoms/Form/FormButton/FormButton";

import { UserLoginSchema } from "@/validationSchema";
import { userLogin } from "@/services/client/login";
import { useDispatch } from "react-redux";
import { AUTH_SUCCESS } from "@/redux/store/actions/auth";
import { authStorage } from "../utils/login";


export interface UserLogin {
    email: string;
    password: string;
}

const LoginPage: React.FC = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);
    const [initialValues] = useState<UserLogin>({
        email: "",
        password: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const login = useFormik({
        initialValues,
        validationSchema: UserLoginSchema,
        onSubmit: async (values: UserLogin) => {
            try {
                const { status, data } = await userLogin(values)
                console.log('status, data', status, data)
                if (status === 200) {
                    authStorage.setAuthDetails(data.token)
                    dispatch({
                        type: AUTH_SUCCESS,
                        payload: {
                            token: data.token,
                            user: data.user,
                            role: data.role
                        }
                    })
                    navigate('/')
                }
            } catch (err: any) {
                //
            }
            // userLogin(values)
            //     .then((res) => {
            //         const response_data = res?.data?.payload;
            //         console.log(response_data.user_data);

            //         if (res?.status === 200) {
            //             localStorage.setItem(
            //                 "userToken",
            //                 res?.data?.payload?.token
            //             );
            //             localStorage.setItem("role", res?.data?.payload?.role);
            //             localStorage.setItem(
            //                 "user_data",
            //                 JSON.stringify(response_data)
            //             );

            //             navigate("/");
            //         } else {
            //             toast.error("Invalid credentials", {
            //                 position: toast.POSITION.TOP_RIGHT,
            //             });
            //         }
            //     })
            //     .catch((err: unknown) => {
            //         console.log(err);
            //         toast.error("Invalid creditials", {
            //             position: toast.POSITION.TOP_RIGHT,
            //         });
            //     });


        },
    });

    return (
        <section className="select_seat_section">
            <div className="customer_detail_row c_wt">
                <div className="customor_detail_col df">
                    <div className="customer_detail_form_box">
                        <div className="customer_detail_form_box_inner" >
                            <div className="text-left">
                                <span>Sign In</span>
                            </div>
                        </div>

                        <form className="text-left" onSubmit={login.handleSubmit} >
                            <div className="contact_row input_row">
                                <div className="contact_col">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        className="input_col"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={login?.values?.email}
                                        onChange={login.handleChange}
                                    />
                                </div>
                                {login.errors.email && login.touched.email ? (
                                    <h6 className="text-danger mt-2 ml-1 red">
                                        {login.errors.email}
                                    </h6>
                                ) : null}

                                <div className="contact_col password">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        className="input_col"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Your Password"
                                        value={login?.values?.password}
                                        onChange={login.handleChange}
                                    />
                                    <span onClick={() => setShowPassword(!showPassword)} className="icons mt-2" >
                                        {!showPassword ? <FaEye /> : <BsFillEyeSlashFill />}
                                    </span>
                                </div>
                                {login.errors.password &&
                                    login.touched.password ? (
                                    <h6 className="text-danger mt-2 ml-1 red">
                                        {login.errors.password}
                                    </h6>
                                ) : null}
                            </div>

                            <div className="contact_row agree_contact_row">
                                <div className="contact_col_agree">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        name="agree"
                                        value="agree"
                                    />
                                    <label htmlFor="agree" >
                                        I agree to the <Link style={{ textDecoration: 'underline' }} to="/terms-condition">Terms and Conditions</Link>
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
                                        Continue
                                        {/* {SelectSeatsDetails?.totalAmount ?? 0} */}
                                    </span>
                                </FormButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
