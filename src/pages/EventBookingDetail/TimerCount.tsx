import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TimerCountProps {
    floor_type: string
}
const TimerCount: FC<TimerCountProps> = ({ floor_type }): JSX.Element => {

    const navigate = useNavigate();
    const [timeInSeconds, setTimeInSeconds] = useState(600); // 10 minutes

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeInSeconds > 0) {
                setTimeInSeconds((prevTime) => prevTime - 1);
            } else {
                navigate("/select-sheets");
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeInSeconds]);

    const formatTime = () => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="customer_detail_form_box_inner" style={{ display: "flex", justifyContent: "space-between", }} >
            <div className="left-section">
                <div className="cus_title">
                    <span>Customer Details</span>
                </div>
                <div className="cus_info">
                    <span>Billing Information:</span>
                </div>
            </div>
            <div className="right-section">
                <div style={{ textAlign: "right", margin: "0 auto" }} >
                    {floor_type === "open" ? null : (
                        <div className="time_box tc table_border">
                            <div className="cp_box fw4 table_header">
                                <span>Time to Complete Your Purchase</span>
                            </div>
                            <div className="time_text site_title fw4">
                                <span>{formatTime()}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TimerCount