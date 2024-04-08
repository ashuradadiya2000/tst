import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import site_logo from "@assets/homeAssets/assets/images/site_logo.png";
import { authStorage } from "@/utils/login";
import { AUTH_FAIL } from "@/redux/store/actions/auth";

const UserTopbar: React.FC = (): JSX.Element => {
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [toggle_main_menu, setToggle_Main_Menu] = useState<boolean>(false);
    const [toggle_search_menu, setToggle_Search_Menu] = useState<boolean>(false);
    const [header_transparent, setHeader_Transparent] = useState<boolean>(false);
    const { authenticated } = useSelector((state: any) => state.auth);

    useEffect(() => {
        const onScroll = (e: Event) => {
            const main = document.getElementById('content')
            const target = e.target as Document;
            const docElement = target.documentElement;

            if (docElement.scrollTop > 200) {
                main?.classList.add('header-sticky')
                setHeader_Transparent(true);
            } else {
                main?.classList.remove('header-sticky')
                setHeader_Transparent(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const handleLogout = () => {
        authStorage.deleteAuthDetails()
        dispatch({
            type: AUTH_FAIL,
        })
        navigate('/')
    };

    const normal: Array<string> = ['/', '/past-event', '/about-us', '/sell-ticket', '/contact', '/event/']
    const isLoggedin = authenticated && authStorage.authToken
    return (
        <>
            <header>
                <section className={`header_section ${normal.includes(pathname) || pathname.includes('/event/') ? 'normal' : ''} ${header_transparent ? "header_fixed" : ''}`} >
                    <div className="header_row c_wt">
                        <div className="header_col_one">
                            <div className="header_image">
                                <Link to={"/"} className="header_img">
                                    <img src={site_logo} />
                                </Link>
                            </div>
                        </div>
                        <div className={`header_col_two ${toggle_main_menu && "active"}`} >
                            <div className="header_menu">
                                <nav className="menu_nav">
                                    <ul className="menu_ul">
                                        <li className="menu_li">
                                            <Link to={"/"} className="menu_a">
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li className="menu_li">
                                            <Link to={"/past-event"} className="menu_a" >
                                                <span>Past Events</span>
                                            </Link>
                                        </li>
                                        <li className="menu_li">
                                            <Link to={"/about-us"} className="menu_a" >
                                                <span>About Us</span>
                                            </Link>
                                        </li>
                                        <li className="menu_li">
                                            <Link to={"/sell-ticket"} className="menu_a" >
                                                <span>Sell Ticket</span>
                                            </Link>
                                        </li>
                                        <li className="menu_li">
                                            <Link to={"/contact"} className="menu_a" >
                                                <span>Contact Us</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header_col_thre">
                            <div className="header_col_mob">
                                <ul
                                    className="header_icon_ul df"
                                    style={{ listStyleType: "none" }}
                                >
                                    <li className="header_icon_li">
                                        <div className="header_icon search_icn">
                                            <i className="fa fa-search" aria-hidden="true" onClick={() => setToggle_Search_Menu((pre: boolean) => !pre)} />
                                        </div>
                                    </li>
                                    <li className="header_icon_li">
                                        <a href="#" className="header_icon user_icn" >
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="header_icon_li">
                                        {toggle_main_menu ? (
                                            <div
                                                className={`header_icon close_ic`}
                                                onClick={() =>
                                                    setToggle_Main_Menu(
                                                        (pre: boolean) => !pre
                                                    )
                                                }
                                            >
                                                <i className="fa fa-times" aria-hidden="true" />
                                            </div>
                                        ) : (
                                            <div
                                                className={`header_icon menu_icn`}
                                                onClick={() =>
                                                    setToggle_Main_Menu(
                                                        (pre: boolean) => !pre
                                                    )
                                                }
                                            >
                                                <i className="fa fa-bars" aria-hidden="true" />
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                            <div className="header_col_web">
                                <ul
                                    className="header_icon_ul df"
                                    style={{ listStyleType: "none" }}
                                >
                                    <li className="header_icon_li">
                                        <div className="header_icon search_icn wt">
                                            <i
                                                className="fa fa-search"
                                                aria-hidden="true"
                                                onClick={() =>
                                                    setToggle_Search_Menu(
                                                        (pre: boolean) => !pre
                                                    )
                                                }
                                            />
                                        </div>
                                    </li>
                                    <li className="header_icon_li">
                                        <div className="header_btn user_icn">
                                            {isLoggedin ? (
                                                <Link to={"/user/account"} className="site_button" onClick={handleLogout} >
                                                    <span>Logout</span>
                                                </Link>
                                            ) : (
                                                <Link to={"/login"} className="site_button" >
                                                    <span>Login</span>
                                                </Link>
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`search_section ${toggle_search_menu && "active_search"}`} >
                    <div className="search_row">
                        <div className="search_col_box">
                            <div className="header_search_box">
                                <form action="#" method="GET">
                                    <div className="header_search">
                                        <input
                                            type="text"
                                            name="s"
                                            placeholder="Search"
                                            id="serach_id"
                                        />
                                        <label className="header_svg">
                                            <button type="submit">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23.6696 20.7495L18.9966 16.0766C18.7857 15.8656 18.4998 15.7485 18.1998 15.7485H17.4358C18.7294 14.0939 19.4981 12.0129 19.4981 9.74905C19.4981 4.36364 15.1345 0 9.74905 0C4.36364 0 0 4.36364 0 9.74905C0 15.1345 4.36364 19.4981 9.74905 19.4981C12.0129 19.4981 14.0939 18.7294 15.7485 17.4358V18.1998C15.7485 18.4998 15.8656 18.7857 16.0766 18.9966L20.7495 23.6696C21.1901 24.1101 21.9025 24.1101 22.3384 23.6696L23.6649 22.3431C24.1055 21.9026 24.1055 21.1901 23.6696 20.7495ZM9.74905 15.7485C6.43531 15.7485 3.74963 13.0675 3.74963 9.74905C3.74963 6.43531 6.43062 3.74963 9.74905 3.74963C13.0628 3.74963 15.7485 6.43062 15.7485 9.74905C15.7485 13.0628 13.0675 15.7485 9.74905 15.7485Z" />
                                                </svg>
                                            </button>
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="close_icon">
                                <i
                                    className="fa fa-window-close-o"
                                    aria-hidden="true"
                                    onClick={() =>
                                        setToggle_Search_Menu(
                                            (pre: boolean) => !pre
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default UserTopbar;
