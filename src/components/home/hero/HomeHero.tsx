import "./style.hero.scss"
import {Link} from "react-router-dom";

export const HomeHero = () => {
    return (
        <>
            <div className="hero-container">
                <div className="hero-container--left">
                    <div className="hero-container--image-left hero-img-background"></div>
                </div>
                <div className="hero-container--center">
                    <div className="hero-container--title">
                        <span>Theory big design</span>
                    </div>
                    <Link to={"contact"} className="order-design-btn hero-order-design-btn">
                        <span>
                            Order design
                        </span>
                    </Link>
                </div>
                <div className="hero-container--right">
                    <div className="hero-container--image-right hero-img-background"></div>
                    <span className="hero-container--right-text">
                        A community <span className="text-orange">(union / community)</span> building the brands of the future
                    </span>
                </div>
            </div>
        </>
    )
}