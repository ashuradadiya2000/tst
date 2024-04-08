import { Navigate, Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import { useSelector } from "react-redux";

import UserLayout from "@/layout/UserLayout";

import Home from "@/pages/Home/Home";
import EventDetail from "@/pages/EventDetail/EventDetail";
import EventBooking from "@/pages/EventBooking/EventBooking";
import EventBookingDetail from "@/pages/EventBookingDetail/EventBookingDetail";
import PaymentSuccess from "@/pages/Payment/PaymentSuccess";

import Faq from "@/pages/faq";
import Login from "@/pages/login";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PastEvent from "@/pages/pastEvent";
import SellTicket from "@/pages/sellTicket";
import PrivacyPolicy from "@/pages/privacyPolicy";
import TermsCondition from "@/pages/termsCondition";
import ExchangePrivacyPolicy from "@/pages/exchangePrivayPolicy";

import { authStorage } from "./utils/login";



interface AuthState {
    auth: {
        token: string | null;
        role: string | null;
        authenticated: boolean;
    };
}

const App: React.FC = (): React.ReactElement | null => {

    const { authenticated } = useSelector((state: AuthState) => state.auth);
    const isLoggedin = authenticated && authStorage.authToken
    return (
        <Router>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route path="/login" element={isLoggedin ? <Navigate to="/" replace /> : <Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/event/:slug" element={<EventDetail />} />
                    <Route path="/booking/:eventId/:categoryId" element={<EventBooking />} />
                    <Route path="/customer-details/:eventId/:categoryId" element={<EventBookingDetail />} />
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="/payment-fail" element={<h1>Payment Fail</h1>} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/past-event" element={<PastEvent />} />
                    <Route path="/sell-ticket" element={<SellTicket />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/excahange-return-policy" element={<ExchangePrivacyPolicy />} />
                    <Route path="/terms-condition" element={<TermsCondition />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
