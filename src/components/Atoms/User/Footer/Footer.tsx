import site_logo from "@assets/homeAssets/assets/images/site_logo.png";
import facebook_logo from "@assets/homeAssets/assets/images/soci_icon_1.png";
import instagram_logo from "@assets/homeAssets/assets/images/soci_icon_2.png";
import linkedIn_logo from "@assets/homeAssets/assets/images/soci_icon_3.png";
import youTube_logo from "@assets/homeAssets/assets/images/soci_icon_4.png";
import { Link, useNavigate } from "react-router-dom";

const UserFooterbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <footer>
                <section className="footer_section">
                    <div className="footer_row c_wt pd_tb df">
                        <div className="footer_col_one footer_col">
                            <div className="footer_one_inr">
                                <div className="footer_img">
                                    <Link to={"/"} className="footer_img_a">
                                        <img src={site_logo} />
                                    </Link>
                                </div>
                                <div className="footer_text">
                                    <span>
                                        Whether you're planning a concert, conference, fundraiser, or anything beyond, transform your event experiences with Book My Tickets as your trusted guide.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="footer_col_two footer_col">
                            <div className="footer_menu">
                                <div className="footer_title">
                                    <span>Quick Links</span>
                                    <div className="f_line"></div>
                                </div>
                                <nav className="footer_nav">
                                    <ul className="footer_ul">
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() =>
                                                    navigate("/about-us")
                                                }
                                            >
                                                About Us
                                            </span>
                                        </li>
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() =>
                                                    navigate("/past-event")
                                                }
                                            >
                                                Past Events
                                            </span>
                                        </li>
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() => navigate("/faq")}
                                            >
                                                FAQs
                                            </span>
                                        </li>
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() =>
                                                    navigate("/contact")
                                                }
                                            >
                                                Contact Us
                                            </span>
                                        </li>
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() =>
                                                    navigate("/sell-ticket")
                                                }
                                            >
                                                Sell Ticket
                                            </span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="footer_col_thre footer_col">
                            <div className="footer_menu">
                                <div className="footer_title">
                                    <span>Other Links</span>
                                    <div className="f_line"></div>
                                </div>
                                <nav className="footer_nav">
                                    <ul className="footer_ul">
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() =>
                                                    navigate("/privacy-policy")
                                                }
                                            >
                                                Privacy Policy
                                            </span>
                                        </li>
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() =>
                                                    navigate(
                                                        "/excahange-return-policy"
                                                    )
                                                }
                                            >
                                                Exchange & Return Policy
                                            </span>
                                        </li>
                                        <li className="footer_li">
                                            <span
                                                className="footer_a contact-link"
                                                onClick={() =>
                                                    navigate("/terms-condition")
                                                }
                                            >
                                                Terms & Condition
                                            </span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="footer_col_four footer_col">
                            <div className="footer_col_box">
                                <div className="footer_title">
                                    <span>Follow Us</span>
                                    <div className="f_line"></div>
                                </div>
                                <div className="footer_soc">
                                    <ul className="soci_ul">
                                        <li className="soci_li">
                                            <a href="#" className="soci_a">
                                                <img src={facebook_logo} />
                                                <span>Facebook</span>
                                            </a>
                                        </li>
                                        <li className="soci_li">
                                            <a href="#" className="soci_a">
                                                <img src={instagram_logo} />
                                                <span>Instagram</span>
                                            </a>
                                        </li>
                                        <li className="soci_li">
                                            <a href="#" className="soci_a">
                                                <img src={linkedIn_logo} />
                                                <span>LinkedIn</span>
                                            </a>
                                        </li>
                                        <li className="soci_li">
                                            <a href="#" className="soci_a">
                                                <img src={youTube_logo} />
                                                <span>YouTube</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_copyright_row">
                        <div className="footer_cp_box c_wt">
                            <div className="footer_copyright_box">
                                <div className="footer_copyright_left">
                                    <span>
                                        Copyright © 2023, Book My Tickets. All
                                        Rights Reserved.
                                    </span>
                                </div>
                                <div className="footer_copyright_right">
                                    <a
                                        href="http://primetechnosoft.in/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <div className="footer_made_text">
                                            <span>Made With</span>
                                            <span>
                                                <i
                                                    className="fa fa-heart heart"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            <span>By Prime</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default UserFooterbar;
