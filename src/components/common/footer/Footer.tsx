import "./style.footer.scss"
import TelegramIcon from "assets/img/icons/social-networks/telegram.svg"
import BeIcon from "assets/img/icons/social-networks/be.svg"
import DribbbleIcon from "assets/img/icons/social-networks/dribbble.svg"
import InstagramIcon from "assets/img/icons/social-networks/insta.svg"
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-container--left">
                            The theory of big design – a community <span className="text-orange">(union / community)</span> building the brands of the future
                        </div>
                        <div className="footer-container--contacts">
                            <div className="contacts">
                                <div className="contacts--telegram">
                                    <Link to={"#"}>
                                        <img src={TelegramIcon} alt="telegram"/>
                                    </Link>
                                </div>
                                <div className="contacts--be">
                                    <Link to={"#"}>
                                        <img src={BeIcon} alt="be"/>
                                    </Link>
                                </div>
                                <div className="contacts--dribbble">
                                    <Link to={"#"}>
                                        <img src={DribbbleIcon} alt="dribbble"/>
                                    </Link>
                                </div>
                                <div className="contacts--instagram">
                                    <Link to={"#"}>
                                        <img src={InstagramIcon} alt="instagram"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="contacts--brief">
                                <button className="brief-btn">
                                    (<span>write a brief</span>)
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <div className="footer-logotype logotype">TBD</div>
                    </Link>
                </div>
            </footer>
        </>
    )
}