import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import favicon_icon from "@assets/homeAssets/assets/images/favicon-icon.png";
import Topbar from "@/components/Atoms/User/Topbar/Topbar";
import Footerbar from "@/components/Atoms/User/Footer/Footer";


const UserLayout: React.FC = (): JSX.Element => {
    return (
        <>
            <Helmet>
                <title>Book My Ticket</title>
                <link rel="icon" type="image/png" href={favicon_icon} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&amp;display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Helmet>

            <Topbar />
            <div className="main_container user" id='content'>
                <Outlet />
            </div>
            <Footerbar />
        </>
    );
};

export default UserLayout;
