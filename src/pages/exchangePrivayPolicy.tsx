import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ExchangePrivacyPolicyPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div className="banner_section past_event_section">
                <div className="banner_row">
                    <div className="banner_col">
                        <div className="banner_title">
                            <span>Exchange & Return Policy</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="privacy_section">
                <div className="privacy_row pd_tb c_wt">
                    <div className="privacy_col">
                        <div className="privacy_content">
                            <p>
                                <b className="aus_inr_title">
                                    What is Lorem Ipsum?
                                </b>
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters
                            </p>
                            <p>
                                <b className="aus_inr_title">
                                    Where can I get some?
                                </b>
                            </p>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                            </p>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                            </p>
                            <p>
                                If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there isn't anything
                                embarrassing hidden in the middle of text. All
                                the Lorem Ipsum generators on the Internet tend
                                to repeat predefined chunks as necessary, making
                                this the first true generator on the Internet.
                                It uses a dictionary of over 200 Latin words,
                                combined with a handful of model sentence
                                structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is
                                therefore always free from repetition, injected
                                humour, or non-characteristic words etc.
                            </p>
                            <p>
                                <b className="aus_inr_title">
                                    Where does it come from?
                                </b>
                            </p>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ExchangePrivacyPolicyPage;
