import "swiper/css";
import "swiper/css/autoplay"
import "swiper/css/free-mode"
import "./style.company.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import TeslaLogo from "assets/img/company/tesla.svg";
import SpaceXLogo from "assets/img/company/spacex.svg";
import FivetranLogo from "assets/img/company/fivetran.svg";
import HopinLogo from "assets/img/company/hopin.svg";
import AmazonLogo from "assets/img/company/amazon.svg";
import AirbnbLogo from "assets/img/company/airbnb.svg";

export const Company = () => {
    return (
        <>
            <div className="company">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={6}
                    spaceBetween={56}
                    a11y={false}
                    freeMode={true}
                    speed={7000}
                    loop={true}
                    autoplay={{
                        delay: 0.0,
                        disableOnInteraction: false,
                    }}
                    className="smooth-transition"
                >
                    <SwiperSlide>
                        <img src={TeslaLogo} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SpaceXLogo} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={FivetranLogo} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HopinLogo} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AmazonLogo} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AirbnbLogo} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HopinLogo} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}