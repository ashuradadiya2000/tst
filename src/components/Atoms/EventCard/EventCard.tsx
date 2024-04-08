import React from 'react'
import moment from "moment";

import { useNavigate } from "react-router-dom";
import clock_logo from "@assets/homeAssets/assets/images/clock-img.png";
import calender_logo from "@assets/homeAssets/assets/images/calander.png";
import lebbanner_logo from "@assets/homeAssets/assets/images/le-img.png";
import loc_logo from "@assets/homeAssets/assets/images/loc.png";

export interface EventProps {
    _id: string
    name: string
    venueId: string
    date: string
    time: string
    desctiption: string
    about_artist: string
    terms_condition: string
    desclaimer: string
    artist_name: string
    floor_type: string
    drafts: boolean
    banner: string
    main_banner: string
    sitting_map: string
    organiserId: string[]
    createdAt: string
    updatedAt: string
    slug: string
    organiserBy: OrganiserBy[]
    venue: Venue
}

export interface OrganiserBy {
    value: string
    label: string
}

export interface Venue {
    address: string
    city: string
    state: string
    postcode: string
    label: string
    value: string
}

const EventCard: React.FC<EventProps> = (event): JSX.Element => {

    const url = import.meta.env.VITE_APP_BACKEND_URL_EVENTS_IMAGE;
    const navigate = useNavigate();

    return (
        <div className="le_desc_box" key={event._id}>
            <div className="le_desc_inr">
                <div className="le_desc_img">
                    <img src={url + event?.banner} alt={event.name} />
                </div>
                <div className="le_info">
                    <div className="le_info_title">
                        <span>{event?.name}</span>
                    </div>
                    <div className="le_dt_info">
                        <div className="le_dt">
                            <img src={clock_logo} alt="Clock Logo" />
                            <span>
                                {event?.time ? moment(event?.time, "HH:mm").format("h:mm A") : "_"}
                            </span>
                        </div>
                        <div className="le_dt">
                            <img src={calender_logo} alt="Calendar Logo" />
                            <span>{event?.date ? moment(event?.date).format("DD-MM-YYYY") : "-"}</span>
                        </div>
                    </div>
                    <div className="le_img">
                        <img src={lebbanner_logo} alt={event.name} />
                    </div>
                    <div className="le_loc">
                        <div className="le_dt">
                            <img src={loc_logo} alt={event.name} />
                            <span>{event?.venue?.address}</span>
                        </div>
                    </div>
                    <div className="le_btn">
                        <button onClick={() => navigate('/event/' + event.slug)} className="site_button">
                            <span>Buy Ticket</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard