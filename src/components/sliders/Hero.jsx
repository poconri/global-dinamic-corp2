import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import {useLanguage} from '../../stores/use-languaje';

import DataEs from '@data/sliders/es/hero';
import DataEn from '@data/sliders/en/hero';
import Link from "next/link";

const HeroSlider = () => {
    const {isSpanish} = useLanguage()

  return (
    <section className="featured-slider-one" style={{"background": "grey", "minHeight": "100vh"}}>
        <div className="containe">
            <Swiper
              {...sliderProps.heroSlider}
              className="swiper-container ro f-slider-one"
            >
                {(isSpanish ? DataEs : DataEn).items.map((item, key) => (
                <SwiperSlide key={`hs-slide-${key}`} className="swiper-slide">
                    <div className="f-slider-layer">
                        <img src={item.image} alt={item.title} />
                        <div className="f-slider-one-data">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                            <Link href={item.button.link} className="theme-btn">
                                {item.button.label}
                                <i className="fa-solid fa-angles-right" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
                
                <div className="swiper-nav">
                    <button className="swiper-nav-prev"><i className="fa-solid fa-angles-left" /></button>
                    <button className="swiper-nav-next"><i className="fa-solid fa-angles-right" /></button>
                </div>
            </Swiper>
        </div>
    </section>
  );
};
export default HeroSlider;