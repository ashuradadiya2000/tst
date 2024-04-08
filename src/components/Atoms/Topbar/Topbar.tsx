import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { AUTH_FAIL } from "@/redux/store/actions/auth";
import { authStorage } from "@/utils/login";

const Topbar: React.FC = (): React.ReactNode => {
    const dispatch = useDispatch()
    const [show, setShow] = useState<boolean>(false);
    const { authenticated } = useSelector((state: any) => state.auth);

    const Logout = () => {
        authStorage.deleteAuthDetails(); // Remove authToken
        toast.success("Logout successfully.");
        setTimeout(() => {
            dispatch({
                type: AUTH_FAIL
            })
            window.location.replace("/login");
        }, 1000);
    };


    const isLoggedin = authenticated && authStorage.authToken

    return (
        <div className="top-bar">
            <nav
                aria-label="breadcrumb"
                className="-intro-x mr-auto hidden sm:flex"
            >
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Application</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Dashboard
                    </li>
                </ol>
            </nav>
            <div className="intro-x dropdown w-8 h-8">
                <div
                    className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                    role="button"
                    onClick={() => setShow(!show)}
                >
                    <img alt="Book my Ticket" />
                </div>
                <div className={"dropdown-menu w-56 " + (show ? "show" : "")}>
                    <ul className="dropdown-content bg-primary text-white">
                        <li className="p-2">
                            <div className="font-medium">Admin</div>
                            <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                                Super Admin
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li>
                        {/* <li>
                            <Link
                                to="/admin/my-profile"
                                className="dropdown-item hover:bg-white/5"
                            >
                                My Profile
                            </Link>
                        </li> */}
                        {/* <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li> */}
                        {isLoggedin &&
                            <li>
                                <Link to="" className="dropdown-item hover:bg-white/5" onClick={Logout} >
                                    Logout
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
