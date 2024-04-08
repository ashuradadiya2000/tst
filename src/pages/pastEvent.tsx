import { listUserPastEvent } from "@/services/client/event";
import { EventsTypes } from "@/types/event.types";
import { useDebounce } from "@/utils/hook/useDebounce";
import calender_logo from "@assets/homeAssets/assets/images/calander.png";
import clock_logo from "@assets/homeAssets/assets/images/clock-img.png";
import lebbanner_logo from "@assets/homeAssets/assets/images/le-banner.jpg";
import loc_logo from "@assets/homeAssets/assets/images/loc.png";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PastEventPage = () => {
    const location = useLocation();

    const [list, setList] = useState<EventsTypes[]>([]);
    const url = import.meta.env.VITE_APP_BACKEND_URL_EVENTS_IMAGE;

    const getUserEventList = useDebounce(async (): Promise<void> => {
        try {
            const { status, data } = await listUserPastEvent("pastEvents");
            if (status === 200) {
                setList(data.list);
            }
        } catch (error) {
            console.log("error", error);
        }
    }, 1500);

    useEffect(() => {
        getUserEventList("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div className="banner_section past_event_section">
                <div className="banner_row">
                    <div className="banner_col">
                        <div className="banner_title">
                            <span>Past Events</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pe_section">
                <div className="pe_row c_wt pd_tb">
                    <div className="pe_col">
                        <div className="le_desc_block">
                            {list &&
                                list.length > 0 &&
                                list.map((event: EventsTypes) => (
                                    <div
                                        className="le_desc_box"
                                        key={event._id}
                                    >
                                        <div className="le_desc_inr">
                                            <div className="le_desc_img">
                                                <img
                                                    src={url + event?.banner}
                                                />
                                                <div className="le_hover_btn"></div>
                                            </div>
                                            <div className="le_info">
                                                <div className="le_info_title">
                                                    <span>{event?.name}</span>
                                                </div>
                                                <div className="le_dt_info">
                                                    <div className="le_dt">
                                                        <img src={clock_logo} />
                                                        <span>
                                                            {event?.time
                                                                ? moment(
                                                                    event?.time,
                                                                    "HH:mm"
                                                                ).format(
                                                                    "h:mm A"
                                                                )
                                                                : "_"}
                                                        </span>
                                                    </div>
                                                    <div className="le_dt">
                                                        <img
                                                            src={calender_logo}
                                                        />
                                                        <span>
                                                            {event?.date
                                                                ? moment(
                                                                    event?.date
                                                                ).format(
                                                                    "MM-DD-YYYY"
                                                                )
                                                                : "-"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="le_img">
                                                    <img src={lebbanner_logo} />
                                                </div>
                                                <div className="le_loc">
                                                    <div className="le_dt">
                                                        <img src={loc_logo} />
                                                        <span>
                                                            {
                                                                event?.venue
                                                                    ?.address
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* <div className="le_btn">
                                                    <a
                                                        href="#"
                                                        className="site_button"
                                                    >
                                                        <span>Buy Ticket</span>
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PastEventPage;
