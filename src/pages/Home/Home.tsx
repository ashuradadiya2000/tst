import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";


import banner1 from "@assets/homeAssets/assets/images/banner-img-1.png";
import banner2 from "@assets/homeAssets/assets/images/banner-img-2.png";
import banner3 from "@assets/homeAssets/assets/images/banner-img-3.png";

import abImage_logo from "@assets/homeAssets/assets/images/ab-img.jpg";
import ab2Image_logo from "@assets/homeAssets/assets/images/ab-img-2.jpg";
import ab3Image_logo from "@assets/homeAssets/assets/images/about_img_2.jpg";
import filler_logo from "@assets/homeAssets/assets/images/filler-img.png";
import f2_logo from "@assets/homeAssets/assets/images/f-icn-2.png";
import f_logo from "@assets/homeAssets/assets/images/f-icn-1.png";

import { SampleNextArrow, SamplePrevArrow, } from "@/components/Atoms/Slider/slider";

import { useDebounce } from "@/utils/hook/useDebounce";
import { listUserEvent } from "@/services/client/event";
import EventCard from "@/components/Atoms/EventCard/EventCard";
import { EventProps } from "./types";


const Home_Page = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const [current_active_event, setCurrent_Active_Event] = useState<number>(0);
    const [list, setList] = useState<EventProps[]>([]);
    const [search, setSearch] = useState("");


    const getUserEventList = useDebounce(
        async (search: string | null): Promise<void> => {
            try {
                let searchQuery = "all";
                if (search === "today") {
                    searchQuery = "today";
                } else if (search === "thisWeek") {
                    searchQuery = "thisWeek";
                } else if (search === "thisWeekend") {
                    searchQuery = "thisWeekend";
                } else if (search === "nextWeek") {
                    searchQuery = "nextWeek";
                } else if (search === "nextWeekend") {
                    searchQuery = "nextWeekend";
                }

                const { status, data } = await listUserEvent(searchQuery);
                if (status === 200) {
                    setList(data.list);
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        100
    );

    useEffect(() => {
        getUserEventList(search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleTodayClick = () => {
        setSearch("today"); // Set the search condition to "today" when "Today" is clicked
        setCurrent_Active_Event(1);
    };

    const handleAllClick = () => {
        setSearch(""); // Set the search condition to "today" when "Today" is clicked
        setCurrent_Active_Event(0);
    };

    const handleThisWeekClick = () => {
        setSearch("thisWeek"); // Set the search condition to "thisWeek" when "thisWeek" is clicked
        setCurrent_Active_Event(2);
    };

    const handleThisWeekendClick = () => {
        setSearch("thisWeekend"); // Set the search condition to "thisWeekend" when "ThisWeekend" is clicked
        setCurrent_Active_Event(3);
    };

    const handleNextWeekClick = () => {
        setSearch("nextWeek"); // Set the search condition to "nextWeek" when "NextWeek" is clicked
        setCurrent_Active_Event(4);
    };

    const handleNextWeekendClick = () => {
        setSearch("nextWeekend"); // Set the search condition to "nextWeekend" when "NextWeekend" is clicked
        setCurrent_Active_Event(5);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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

    const imageUrls = [banner1, banner2, banner3];

    return (
        <>
            <section className="bt_banner_section_new">
                <div className="bt_banner_row">
                    <div className="banner_slider" style={{ width: "100%" }}>
                        <Slider {...settings} className="full-width-slider">
                            {imageUrls.map((imageUrl, index) => (
                                <div key={index} className="banner_box slick-slide slick-cloned">
                                    <a href="##">
                                        <div className="banner_img">
                                            <img src={imageUrl} alt={`Banner ${index + 1}`} />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            {/* end banner */}
            {/* list of all event */}
            <section className="le_section">
                <div className="le_row c_wt pd_tb">
                    <div className="le_col">
                        <div className="le_title site_title tc">
                            <span>list of all event</span>
                        </div>
                        <div className="le_block">
                            <div className="le_tab_col">
                                <ul className="le_tab_ul">
                                    <li
                                        className={`le_tab_li ${current_active_event === 0 && "current"
                                            }`}
                                        onClick={handleAllClick}
                                    >
                                        <div className="le_tab_title">
                                            <span>All</span>
                                        </div>
                                    </li>
                                    <li
                                        className={`le_tab_li ${current_active_event === 1 && "current"
                                            }`}
                                        onClick={handleTodayClick}
                                    >
                                        <div className="le_tab_title">
                                            <span>Today</span>
                                        </div>
                                    </li>
                                    <li
                                        className={`le_tab_li ${current_active_event === 2 && "current"
                                            }`}
                                        onClick={handleThisWeekClick}
                                    >
                                        <div className="le_tab_title">
                                            <span>This Week</span>
                                        </div>
                                    </li>
                                    <li
                                        className={`le_tab_li ${current_active_event === 3 && "current"
                                            }`}
                                        onClick={handleThisWeekendClick}
                                    >
                                        <div className="le_tab_title">
                                            <span>This Weekend</span>
                                        </div>
                                    </li>
                                    <li
                                        className={`le_tab_li ${current_active_event === 4 && "current"
                                            }`}
                                        onClick={handleNextWeekClick}
                                    >
                                        <div className="le_tab_title">
                                            <span>Next Week</span>
                                        </div>
                                    </li>
                                    <li
                                        className={`le_tab_li ${current_active_event === 5 && "current"
                                            }`}
                                        onClick={handleNextWeekendClick}
                                    >
                                        <div className="le_tab_title">
                                            <span>Next Weekend</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="le_desc_col">
                                <ul className="le_desc_ul">
                                    <li
                                        className="le_desc_li active_desc"
                                        style={{ display: "list-item" }}
                                    >
                                        <div className="le_desc_block">
                                            {list && list.length > 0 && list.map((event: EventProps) => {
                                                return <EventCard {...event} key={event.name} />
                                            })}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="pagination-container" />
                    </div>
                </div>
            </section>
            {/* end list of all event */}
            {/* filler */}
            <section className="filler_section">
                <div className="filler_row c_wt pd_tb">
                    <div className="filler_col">
                        <div className="filler_lt">
                            <div className="filler_title wt">
                                <p>
                                    Seamless <i className="rd">Ticket Booking:</i> {" "}
                                </p>
                                <p>
                                    <i className="rd">Now Available</i> on Mobile{" "}
                                </p>
                            </div>
                            <div className="filler_text">
                                <span>
                                    Join for free and kickstart your event in mere minutes. Leverage our intuitive ticketing system to effortlessly sell tickets online, effectively market your event to skyrocket online ticket sales, and receive payments upfront.
                                </span>
                            </div>
                            <div className="filer_images">
                                <div className="filer_img">
                                    <img src={f_logo} />
                                </div>
                                <div className="filer_img">
                                    <img src={f2_logo} />
                                </div>
                            </div>
                        </div>
                        <div className="filler_rt">
                            <div className="filler_img">
                                <img src={filler_logo} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end filler */}
            {/* about us */}
            <section className="aus_section">
                <div className="aus_row pd_tb c_wt">
                    <div className="aus_col df">
                        <div className="aus_lt">
                            <div className="aus_img">
                                <img src={abImage_logo} />
                            </div>
                        </div>
                        <div className="aus_rt">
                            <div className="aus_title site_title">
                                <span>About us</span>
                            </div>
                            {/* <div className="aus_inr_title">
                                <span>Lorem ipsum dolor sit amet</span>
                            </div> */}
                            <div className="aus_text text">
                                <p>
                                    Transforming event experiences worldwide, Book My Tickets is your premier choice for cutting-edge event ticketing solutions. With roots in Australia and established in 2023, our team brings a decade's worth of experience to the table. Our platform is structured to empower solo presenters with customized end-to-end solutions that maximize their event
                                    entertainment offerings. For first-time event planners or those needing quick ticket sales, we have the tools and expertise to meet your needs.

                                </p>
                                <p>
                                    Committed to providing unparalleled services crafted to meet the distinct needs of event organizers, our focus remains on delivering excellence in every aspect of our service delivery. Whether you're planning a concert, conference, fundraiser, or anything beyond, transform your event experiences with Book My Tickets as your trusted guide. Join us today and experience the difference firsthand.

                                </p>
                            </div>
                            <div className="aus_btn">
                                <a href="#" className="site_button">
                                    <span>know more</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="aus_image_col">
                        <div className="aus_img_1">
                            <img src={ab2Image_logo} />
                        </div>
                        <div className="aus_img_2">
                            <img src={ab3Image_logo} />
                        </div>
                    </div>
                </div>
            </section>
            {/* end about us */}
        </>
    );
};

export default Home_Page;
