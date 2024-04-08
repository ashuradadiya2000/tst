import tic_img from "@assets/homeAssets/assets/images/tic_img.png";
import ch1_img from "@assets/homeAssets/assets/images/ch1.png";
import ch2_img from "@assets/homeAssets/assets/images/ch2.png";
import ch3_img from "@assets/homeAssets/assets/images/ch3.png";
import ch1_icon from "@assets/homeAssets/assets/images/ch_icon1.png";
import ch2_icon from "@assets/homeAssets/assets/images/ch_icon2.png";
import ch3_icon from "@assets/homeAssets/assets/images/ch_icon3.png";
import so_img from "@assets/homeAssets/assets/images/so_img.png";
import so1_img from "@assets/homeAssets/assets/images/so1.png";
import so2_img from "@assets/homeAssets/assets/images/so2.png";
import so3_img from "@assets/homeAssets/assets/images/so3.png";
import so4_img from "@assets/homeAssets/assets/images/so4.png";
import bf1_img from "@assets/homeAssets/assets/images/bf_icon1.png";
import bf2_img from "@assets/homeAssets/assets/images/bf_icon2.png";
import bf3_img from "@assets/homeAssets/assets/images/bf_icon3.png";

import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "@/utils/hook/useDebounce";
import { listUserOrganiser } from "@/services/client/organiser";
import { useEffect, useState } from "react";

const SellTicketPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [list, setList] = useState<any[]>([]);
    const url = import.meta.env.VITE_APP_BACKEND_URL_ORGANISER_IMAGE;
    const getUserOrganiserList = useDebounce(async (): Promise<void> => {
        try {
            const { status, data } = await listUserOrganiser();
            if (status === 200) {
                setList(data.data);
            }
        } catch (error) {
            console.log("error", error);
        }
    }, 1500);

    useEffect(() => {
        getUserOrganiserList("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div className="banner_section sell_ticket_section">
                <div className="banner_row">
                    <div className="banner_col">
                        <div className="banner_title">
                            <span>sell ticket</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="wt_section">
                <div className="wt_row pd_tb pd_l">
                    <div className="wt_col df">
                        <div className="wt_left">
                            <div className="wt_left_inner">
                                <div className="wt_title site_title">
                                    <span>
                                        Want to sell tickets with Book My
                                        Ticket?
                                    </span>
                                </div>
                                <div className="wt_text text">
                                    <p>
                                        Are you ready to take your event to the next level? Look no further! We offer you a cutting-edge and hassle-free ticket-selling solution. Say goodbye to complicated setups and hello to super-easy registration! Our platform ensures that you can get started in no time, allowing you to focus on what truly matters – creating unforgettable experiences for your attendees.
                                    </p>
                                    <p>
                                        Sell tickets smarter, not harder. Have real-time data at your fingertips, With our quick analytics and insights monitoring. This data empowers you to make informed decisions and optimize your ticket sales strategy for maximum success. From tracking sales trends to understanding attendee demographics, our comprehensive analytics tools provide you with valuable insights every step of the way. Choose us and experience the future of event management!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wt_right">
                            <div className="wt_right_box_inner">
                                <div className="wt_img">
                                    <img src={tic_img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ch_row pd_b c_wt">
                <div className="ch_title site_title df">
                    <span>What can you host?</span>
                </div>
                <div className="ch_text text tc">
                    <p>
                        Host any event imaginable! Break free from the ordinary and explore endless event possibilities. From thrilling concerts to engaging conferences and everything in between,
                        our platform welcomes all kinds of events. Start hosting diverse events today and wow your audience!
                    </p>
                </div>
                <div className="ch_col df">
                    <div className="ch_box">
                        <div className="ch_box_inner">
                            <div className="ch_img">
                                <img src={ch1_img} alt="" />
                            </div>
                            <div className="ch_icon">
                                <img src={ch1_icon} alt="" />
                            </div>
                            <div className="ch_name">
                                <span>Performance</span>
                            </div>
                        </div>
                    </div>
                    <div className="ch_box">
                        <div className="ch_box_inner">
                            <div className="ch_img">
                                <img src={ch2_img} alt="" />
                            </div>
                            <div className="ch_icon">
                                <img src={ch2_icon} alt="" />
                            </div>
                            <div className="ch_name">
                                <span>Experiences</span>
                            </div>
                        </div>
                    </div>
                    <div className="ch_box">
                        <div className="ch_box_inner">
                            <div className="ch_img">
                                <img src={ch3_img} alt="" />
                            </div>
                            <div className="ch_icon">
                                <img src={ch3_icon} alt="" />
                            </div>
                            <div className="ch_name">
                                <span>Parties</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="so_section">
                <div className="so_row pd_tb ">
                    <div className="so_title site_title df">
                        <span>What are the services we offer?</span>
                    </div>
                    <div className="so_desc text tc">
                        <p>
                            Empower Your Event Strategy! Explore our suite of tools and services, crafted to Revamp event management and ticket sales.
                        </p>
                    </div>
                    <div className="so_col df pd_r">
                        <div className="so_col_one">
                            <div className=" so_img_main">
                                <img src={so_img} />
                            </div>
                        </div>
                        <div className="so_col_two">
                            <div className="so_col_box">
                                <div className="so_block">
                                    <ul className="so_ul">
                                        <li className="so_li">
                                            <div className="so_img">
                                                <img src={so1_img} />
                                            </div>
                                            <div className="so_text">
                                                <span>
                                                    Online Sales & Marketing
                                                </span>
                                            </div>
                                        </li>
                                        <li className="so_li">
                                            <div className="so_img">
                                                <img src={so2_img} />
                                            </div>
                                            <div className="so_text">
                                                <span>Pricing</span>
                                            </div>
                                        </li>
                                        <li className="so_li">
                                            <div className="so_img">
                                                <img src={so3_img} />
                                            </div>
                                            <div className="so_text">
                                                <span>
                                                    On ground support & gate
                                                    entry management
                                                </span>
                                            </div>
                                        </li>
                                        <li className="so_li">
                                            <div className="so_img">
                                                <img src={so4_img} />
                                            </div>
                                            <div className="so_text font_24">
                                                <span>
                                                    Reports & business insights
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bf_section">
                <div className="bf_row pd_b c_wt">
                    <div className="bf_title site_title df">
                        <span>
                            Benefits of using-Do It Yourself our new event
                            management tool
                        </span>
                    </div>
                    <div className="bf_col df">
                        <div className="bf_box">
                            <div className="bf_box_inner">
                                <div className="bf_img">
                                    <img src={bf1_img} alt="" />
                                </div>
                                <div className="bf_icon_title font_24">
                                    <span>Quick & Easy Registration</span>
                                </div>
                                <div className="bf_text tc">
                                    <p>
                                        Swift Registration, Swift Sales! Our simple registration process lets you focus on selling tickets, not paperwork.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bf_box">
                            <div className="bf_box_inner">
                                <div className="bf_img">
                                    <img src={bf2_img} alt="" />
                                </div>
                                <div className="bf_icon_title font_24">
                                    <span>Monitor Analytics & Insights</span>
                                </div>
                                <div className="bf_text tc">
                                    <p>
                                        Stay ahead of the curve. With predictive analytics, you can anticipate future trends, identify growth opportunities, and optimize your event strategy for maximum impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bf_box">
                            <div className="bf_box_inner">
                                <div className="bf_img">
                                    <img src={bf3_img} alt="" />
                                </div>
                                <div className="bf_icon_title font_24">
                                    <span>
                                        Take Your Events Live Superfast!{" "}
                                    </span>
                                </div>
                                <div className="bf_text tc">
                                    <p>
                                        Launch your events instantly! Get your events live with just a few clicks.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sb_section">
                <div className="sb_row pd_tb c_wt">
                    <div className="sb_main_block df">
                        <div className="sb_title_block">
                            <div className="sb_title_inner site_title wt tc">
                                <span>
                                    Sit back and watch your event come to life
                                </span>
                            </div>
                        </div>
                        <div className="smi_desc_block">
                            <div className="sb_text text wt">
                                <p>
                                    Relax, and let us handle the details! We will take care of the nitty-gritty details, allowing you to sit back and watch your event thrive. Sit back and watch your event vision come to life fluidly.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="or_section">
                <div className="or_row pd_tb c_wt">
                    <div className="or_title site_title tc">
                        <span>Our Organizers</span>
                    </div>

                    <div className="or_col_box">
                        <div className="or_block df">
                            {list &&
                                list.length > 0 &&
                                list.map((organiser: any) => (
                                    <div className="or_box" key={organiser._id}>
                                        <a
                                            href="#"
                                            target="_blank"
                                            className="or_box_a"
                                            rel="noopener"
                                        >
                                            <div className="or_img">
                                                <img
                                                    src={
                                                        url +
                                                        organiser?.organiser_photo
                                                    }
                                                />
                                            </div>
                                        </a>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="in_section pd_b">
                <div className="in_row pd_tb c_wt">
                    <div className="in_title site_title df">
                        <span>Inquiry Now</span>
                    </div>
                    <form action="" method="POST">
                        <div className="ds_contact_form_box">
                            <div className="form_box">
                                <div className="form_box_inner">
                                    <div className="ds_form_input_12">
                                        <div className="ds_form_input_inner">
                                            <div className="ds_form_input_6">
                                                <div className="input_field_box">
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        className="input_field"
                                                    />
                                                </div>
                                                <div className="svg_box">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="24"
                                                        viewBox="0 0 21 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M18.0516 24.0001H2.71875C1.21875 23.9954 0.0046875 22.7813 0 21.2813V20.0813C0 17.1469 1.23281 14.3485 3.40312 12.3751C4.30781 11.5547 5.65312 11.4422 6.67969 12.1032C7.75313 12.7922 9.03281 13.1579 10.3875 13.1579C11.7422 13.1579 13.0219 12.7922 14.0953 12.1032C15.1219 11.4422 16.4672 11.5547 17.3719 12.3751C19.5422 14.3485 20.7797 17.1469 20.775 20.0813V21.2813C20.7703 22.786 19.5516 24.0001 18.0516 24.0001ZM5.21719 12.6094C4.77656 12.6094 4.35469 12.7735 4.03125 13.0688C2.05781 14.8641 0.932812 17.4141 0.932812 20.0813V21.2813C0.9375 22.2657 1.72969 23.0579 2.71406 23.0626H18.0469C19.0312 23.0626 19.8281 22.2657 19.8281 21.2813V20.0813C19.8281 17.4141 18.7031 14.8688 16.7297 13.0688C16.1391 12.5344 15.2625 12.4594 14.5922 12.8907C13.3688 13.6782 11.9109 14.0954 10.3781 14.0954C8.84531 14.0954 7.3875 13.6782 6.16406 12.8907C5.8875 12.7079 5.55469 12.6094 5.21719 12.6094Z"
                                                            fill="#B0B0B0"
                                                        />
                                                        <path
                                                            d="M10.3887 12.0937C7.05117 12.0891 4.34648 9.38437 4.3418 6.04687C4.3418 2.71406 7.05117 0 10.3887 0C13.7262 0.0046875 16.4309 2.70937 16.4355 6.04687C16.4309 9.37969 13.7215 12.0937 10.3887 12.0937ZM10.3887 0.942187C7.5668 0.942187 5.2793 3.22969 5.2793 6.05156C5.2793 8.87344 7.5668 11.1609 10.3887 11.1609C13.2105 11.1609 15.498 8.87344 15.498 6.05156C15.4934 3.22969 13.2105 0.942187 10.3887 0.942187Z"
                                                            fill="#B0B0B0"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ds_form_input_6">
                                                <div className="input_field_box">
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        className="input_field"
                                                    />
                                                </div>
                                                <div className="svg_box">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="16"
                                                        viewBox="0 0 24 16"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M22.7692 0H1.23079C0.553827 0 0 0.553827 0 1.23075V14.7692C0 15.4461 0.553827 16 1.23079 16H22.7692C23.4461 16 24 15.4462 24 14.7692V1.23075C24 0.553827 23.4461 0 22.7692 0ZM22.3073 0.923014L12.708 8.12309C12.5354 8.25444 12.2704 8.33661 11.9999 8.33539C11.7295 8.33661 11.4646 8.25444 11.2919 8.12309L1.69261 0.923014H22.3073ZM17.1797 8.59817L22.4104 15.0597C22.4157 15.0662 22.4221 15.0711 22.4277 15.077H1.57228C1.57781 15.0708 1.58428 15.0662 1.58953 15.0597L6.8203 8.59817C6.85844 8.55104 6.88692 8.49686 6.90412 8.43872C6.92131 8.38057 6.92688 8.31961 6.92051 8.25932C6.91413 8.19903 6.89594 8.14058 6.86697 8.08732C6.83801 8.03405 6.79883 7.98702 6.75167 7.94891C6.55353 7.78864 6.26305 7.81902 6.10274 8.0172L0.923061 14.4157V1.49995L10.7384 8.86147C11.1073 9.13625 11.5562 9.25719 11.9999 9.2584C12.4429 9.25747 12.8922 9.13653 13.2614 8.86147L23.0767 1.49995V14.4156L17.8972 8.0172C17.7369 7.81906 17.4461 7.78859 17.2482 7.94891C17.0498 8.10917 17.0193 8.40003 17.1797 8.59817Z"
                                                            fill="#B0B0B0"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ds_form_input_6">
                                                <div className="input_field_box">
                                                    <input
                                                        type="text"
                                                        placeholder="Phone"
                                                        className="input_field"
                                                    />
                                                </div>
                                                <div className="svg_box">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M4.84513 15.9536C7.2123 18.7833 10.0619 21.0112 13.3143 22.5877C14.5525 23.1745 16.2086 23.8707 18.0536 23.9901C18.168 23.995 18.2774 24 18.3917 24C19.63 24 20.6247 23.5723 21.4353 22.6921C21.4402 22.6871 21.4502 22.6772 21.4552 22.6672C21.7436 22.3191 22.0718 22.0058 22.415 21.6726C22.6487 21.4488 22.8874 21.2151 23.1162 20.9764C24.1754 19.8724 24.1754 18.47 23.1062 17.4007L20.1174 14.4119C19.6101 13.8848 19.0034 13.6063 18.3669 13.6063C17.7303 13.6063 17.1186 13.8848 16.5965 14.407L14.8161 16.1873C14.652 16.0928 14.4829 16.0083 14.3238 15.9287C14.1249 15.8293 13.9409 15.7348 13.7767 15.6303C12.1555 14.6009 10.6835 13.2582 9.27612 11.5325C8.56498 10.6324 8.08756 9.8765 7.75437 9.10568C8.22184 8.68297 8.65946 8.24037 9.08218 7.80771C9.23137 7.65354 9.38553 7.49938 9.5397 7.34521C10.0768 6.80812 10.3652 6.18649 10.3652 5.55491C10.3652 4.92333 10.0818 4.3017 9.5397 3.76461L8.05772 2.28264C7.88367 2.10858 7.71956 1.93949 7.55047 1.76544C7.22225 1.42727 6.87911 1.07915 6.54094 0.765852C6.02871 0.263572 5.42697 0 4.79042 0C4.15884 0 3.55213 0.263572 3.02001 0.770825L1.16009 2.63075C0.483749 3.30709 0.100823 4.12764 0.0212544 5.0775C-0.0732338 6.26606 0.145581 7.52922 0.71251 9.05595C1.5828 11.4182 2.89568 13.6113 4.84513 15.9536ZM1.23468 5.18193C1.29436 4.52051 1.54798 3.9685 2.0254 3.49109L3.87538 1.64111C4.16382 1.36262 4.48209 1.2184 4.79042 1.2184C5.09378 1.2184 5.40211 1.36262 5.68557 1.65106C6.01877 1.95939 6.33207 2.28264 6.67024 2.62578C6.83932 2.79983 7.01338 2.97389 7.18744 3.15292L8.66941 4.63489C8.97774 4.94322 9.13688 5.25653 9.13688 5.56486C9.13688 5.87319 8.97774 6.18649 8.66941 6.49482C8.51525 6.64898 8.36108 6.80812 8.20692 6.96229C7.74442 7.42976 7.31177 7.87236 6.83435 8.29507L6.80949 8.31993C6.39672 8.7327 6.46137 9.12557 6.56083 9.42395C6.56581 9.43887 6.57078 9.44882 6.57575 9.46374C6.95868 10.3838 7.4908 11.259 8.3213 12.3034C9.81322 14.1434 11.3847 15.5707 13.1153 16.6697C13.3292 16.809 13.5579 16.9184 13.7718 17.0278C13.9707 17.1272 14.1547 17.2217 14.3188 17.3261C14.3387 17.3361 14.3536 17.346 14.3735 17.356C14.5376 17.4405 14.6968 17.4803 14.8559 17.4803C15.2537 17.4803 15.5123 17.2267 15.5969 17.1421L17.4568 15.2822C17.7452 14.9938 18.0586 14.8396 18.3669 14.8396C18.7448 14.8396 19.0532 15.0734 19.2471 15.2822L22.2459 18.276C22.8426 18.8728 22.8377 19.5193 22.231 20.1509C22.0221 20.3746 21.8033 20.5885 21.5695 20.8123C21.2214 21.1504 20.8584 21.4986 20.5302 21.8914C19.9583 22.5081 19.277 22.7965 18.3967 22.7965C18.3122 22.7965 18.2227 22.7915 18.1381 22.7866C16.507 22.6821 14.9902 22.0456 13.8513 21.5035C10.7581 20.0066 8.0428 17.8831 5.79001 15.1877C3.93506 12.9548 2.68682 10.8761 1.86129 8.64816C1.34906 7.28056 1.15511 6.18152 1.23468 5.18193Z"
                                                            fill="#B0B0B0"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ds_form_input_12">
                                        <div className="ds_form_input_6">
                                            <div className="input_field_box">
                                                <input
                                                    type="text"
                                                    placeholder="Business Name"
                                                    className="input_field"
                                                />
                                            </div>
                                            <div className="svg_box">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="22"
                                                    viewBox="0 0 24 22"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M22.911 12.0908C22.5837 12.0908 22.3655 12.309 22.3655 12.6363V19.728C22.3655 20.0553 22.1473 20.2735 21.82 20.2735H2.18142C1.8541 20.2735 1.63592 20.0553 1.63592 19.728V12.6363C1.63592 12.309 1.41769 12.0908 1.09042 12.0908C0.763149 12.0908 0.544922 12.309 0.544922 12.6363V19.728C0.544922 20.6554 1.25408 21.3646 2.18146 21.3646H21.82C22.7474 21.3646 23.4565 20.6554 23.4565 19.728V12.6363C23.4565 12.309 23.2383 12.0908 22.911 12.0908Z"
                                                        fill="#B0B0B0"
                                                    />
                                                    <path
                                                        d="M22.3661 4.45388H1.63654C0.709157 4.45388 0 5.16304 0 6.09042V9.58173C0 10.3454 0.545498 11 1.2547 11.1637L9.8193 13.073V14.8186C9.8193 15.1459 10.0375 15.3641 10.3648 15.3641H13.6379C13.9652 15.3641 14.1834 15.1459 14.1834 14.8186V13.073L22.748 11.1637C23.4572 11 24.0027 10.3454 24.0027 9.58169V6.09038C24.0027 5.16304 23.2935 4.45388 22.3661 4.45388ZM13.0924 14.2731H10.9103V12.0911H13.0924V14.2731ZM22.9116 9.58169C22.9116 9.85443 22.748 10.0727 22.4752 10.1272L14.1834 11.982V11.5455C14.1834 11.2182 13.9651 11 13.6379 11H10.3648C10.0375 11 9.8193 11.2183 9.8193 11.5455V11.982L1.52745 10.1272C1.2547 10.0727 1.09104 9.85448 1.09104 9.58173V6.09042C1.09104 5.7631 1.30927 5.54492 1.63654 5.54492H22.3661C22.6934 5.54492 22.9116 5.76315 22.9116 6.09042V9.58169ZM14.7289 0.635254H9.27375C8.34637 0.635254 7.63721 1.34441 7.63721 2.2718V2.81729C7.63721 3.14461 7.85544 3.36279 8.18271 3.36279C8.50998 3.36279 8.72821 3.14456 8.72821 2.81729V2.2718C8.72821 1.94448 8.94643 1.7263 9.2737 1.7263H14.7289C15.0562 1.7263 15.2744 1.94452 15.2744 2.2718V2.81729C15.2744 3.14461 15.4926 3.36279 15.8199 3.36279C16.1472 3.36279 16.3654 3.14456 16.3654 2.81729V2.2718C16.3655 1.34441 15.6563 0.635254 14.7289 0.635254Z"
                                                        fill="#B0B0B0"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ds_form_input_6">
                                            <div className="input_field_box">
                                                <textarea
                                                    typeof="text"
                                                    placeholder="Message"
                                                    className="input_field message"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ds_form_button">
                                <button
                                    // type="submit"
                                    onClick={() => navigate("/sell-ticket")}
                                    className="ds_form_btn site_button hover_button"
                                >
                                    <span>submit</span>
                                </button>
                            </div>
                            <p>
                                {" "}
                                <input
                                    type="hidden"
                                    name="tab_checkbox"
                                    placeholder="tab_checkbox"
                                />
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
export default SellTicketPage;
