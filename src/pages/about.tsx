import gallery1 from "@assets/homeAssets/assets/images/gallery1.jpg";
import gallery2 from "@assets/homeAssets/assets/images/gallery2.jpg";
import gallery3 from "@assets/homeAssets/assets/images/gallery3.jpg";
import gallery4 from "@assets/homeAssets/assets/images/gallery4.jpg";
import gallery5 from "@assets/homeAssets/assets/images/gallery5.jpg";
import gallery6 from "@assets/homeAssets/assets/images/gallery6.jpg";
import gallery7 from "@assets/homeAssets/assets/images/gallery7.jpg";
import gallery8 from "@assets/homeAssets/assets/images/gallery8.jpg";
import gallery9 from "@assets/homeAssets/assets/images/gallery9.jpg";

import about2 from "@assets/homeAssets/assets/images/aboutus_img_2.jpg";
import about1 from "@assets/homeAssets/assets/images/about_img_1.jpg";

import team1 from "@assets/homeAssets/assets/images/team_1.jpg";
import team2 from "@assets/homeAssets/assets/images/team_2.jpg";
import team3 from "@assets/homeAssets/assets/images/team_3.jpg";
import Slider from "react-slick";

import {
    SampleNextArrow,
    SamplePrevArrow,
} from "@/components/Atoms/Slider/slider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AboutPage = () => {
    const location = useLocation();
    const settings = {
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3, // Show three images at a time
        slidesToScroll: 1, // Slide one image at a time
        nextArrow: (
            <SampleNextArrow
                className="custom-next-arrow"
                style={{ color: "red" }}
                onClick={() => { }}
            />
        ),
        prevArrow: (
            <SamplePrevArrow
                className="custom-next-arrow"
                style={{ color: "red" }}
                onClick={() => { }}
            />
        ),
    };
    const imageUrls = [
        team1,
        team2,
        team3,
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div className="banner_section about_section">
                <div className="banner_row">
                    <div className="banner_row"><div className="banner_col"><div className="banner_title"><span>About us</span></div></div></div>
                </div>
            </div>

            <section className="about_us_section">
                <div className="about_row pd_tb c_wt">
                    <div className="about_col df">
                        <div className="about_lt">
                            <div className="about_title site_title">
                                <span>About us</span>
                            </div>
                            <div className="about_inr_title rd">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit,
                                </span>
                            </div>
                            <div className="about_text text">
                                <p>
                                    Transforming event experiences worldwide, Book My Tickets is your premier choice for cutting-edge event ticketing solutions. With roots in Australia and established in 2023, our team brings a decade's worth of experience to the table. Our platform is structured to empower solo presenters with customized end-to-end solutions that maximize their event entertainment offerings. For first-time event planners or those needing quick ticket sales, we have the tools and expertise to meet your needs.{" "}
                                </p>
                                <p>
                                    Committed to providing unparalleled services crafted to meet the distinct needs of event organizers, our focus remains on delivering excellence in every aspect of our service delivery. Whether you're planning a concert, conference, fundraiser, or anything beyond, transform your event experiences with Book My Tickets as your trusted guide. Join us today and experience the difference firsthand.
                                </p>
                            </div>
                            <div className="about_btn mb">
                                <a href="#" className="site_button">
                                    <span>Buy Ticket</span>
                                </a>
                            </div>
                        </div>
                        <div className="about_rt">
                            <div className="about_image_col">
                                <div className="about_img_2">
                                    <img src={about2} />
                                </div>
                                <div className="about_img_1">
                                    <img src={about1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team_section">
                <div className="team_row pd_tb pd_l">
                    <div className="team_col df">
                        <div className="team_left">
                            <div className="team_slider_img">
                                <Slider {...settings}>
                                    {imageUrls.map((imageUrl, index) => (
                                        <div className="team_img_box">
                                            <div className="team_img_box_inr">
                                                <div
                                                    key={index}
                                                    className="team_img"
                                                >
                                                    <img
                                                        src={imageUrl}
                                                        alt={`Banner ${index + 1
                                                            }`}
                                                    />
                                                </div>
                                                <div className="team_desc">
                                                    <div className="team_desc_inr">
                                                        <div className="team_pname wt">
                                                            <span>
                                                                Jacob Jones
                                                            </span>
                                                        </div>
                                                        <div className="team_desgina wt">
                                                            <span>
                                                                HR Manager
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* <div className="team_img_box">
                                        <div className="team_img_box_inr">
                                            <div className="team_img">
                                                <img src={team1} alt="" />
                                            </div>
                                            <div className="team_desc">
                                                <div className="team_desc_inr">
                                                    <div className="team_pname wt">
                                                        <span>Jacob Jones</span>
                                                    </div>
                                                    <div className="team_desgina wt">
                                                        <span>HR Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team_img_box">
                                        <div className="team_img_box_inr">
                                            <div className="team_img">
                                                <img src={team1} alt="" />
                                            </div>
                                            <div className="team_desc">
                                                <div className="team_desc_inr">
                                                    <div className="team_pname wt">
                                                        <span>Jacob Jones</span>
                                                    </div>
                                                    <div className="team_desgina wt">
                                                        <span>HR Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team_img_box">
                                        <div className="team_img_box_inr">
                                            <div className="team_img">
                                                <img src={team1} alt="" />
                                            </div>
                                            <div className="team_desc">
                                                <div className="team_desc_inr">
                                                    <div className="team_pname wt">
                                                        <span>Jacob Jones</span>
                                                    </div>
                                                    <div className="team_desgina wt">
                                                        <span>HR Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </Slider>
                            </div>
                        </div>

                        <div className="team_right">
                            <div className="team_right_box_inner">
                                <div className="team_title site_title">
                                    <span>Meet The Team</span>
                                </div>
                                <div className="team_text text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                    <p>• Lorem ipsum dolor sit amet,</p>
                                    <p>• Lorem ipsum dolor sit amet,</p>
                                    <p>• Lorem ipsum dolor sit amet,</p>
                                    <p>• Lorem ipsum dolor sit amet,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="og_row pd_tb c_wt">
                <div className="og_title site_title df">
                    <span>Our Gallery</span>
                </div>
                <div className="og_col df">
                    <div className="gallery_col gallery_col_1">
                        <div className="gallery_img_box">
                            <div className="g_img">
                                <img src={gallery1} alt="" />
                            </div>
                        </div>
                        <div className="gallery_img_box">
                            <div className="g_img">
                                <img src={gallery2} alt="" />
                            </div>
                        </div>
                        <div className="gallery_img_box">
                            <div className="g_img">
                                <img src={gallery3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="gallery_col gallery_col_2">
                        <div className="gallery_img_box gallery_img_2">
                            <div className="g_img">
                                <img src={gallery4} alt="" />
                            </div>
                        </div>
                        <div className="gallery_iner_block df">
                            <div className="gallery_img_box">
                                <div className="g_img">
                                    <img src={gallery5} alt="" />
                                </div>
                            </div>
                            <div className="gallery_img_box">
                                <div className="g_img">
                                    <img src={gallery6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_col gallery_col_1">
                        <div className="gallery_img_box">
                            <div className="g_img">
                                <img src={gallery7} alt="" />
                            </div>
                        </div>
                        <div className="gallery_img_box">
                            <div className="g_img">
                                <img src={gallery8} alt="" />
                            </div>
                        </div>
                        <div className="gallery_img_box">
                            <div className="g_img">
                                <img src={gallery9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutPage;
