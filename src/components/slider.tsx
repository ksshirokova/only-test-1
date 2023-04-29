import React from "react";
import Swiper from 'react-id-swiper';
import { useRef } from "react";

export default function Slider() {


    const ref: any = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };
    return (
        <section className="slider-container">
            <section className="slider">
                <Swiper ref={ref}>

                    <div className="slider-content">
                        <h3>2015</h3>
                        <p>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                    </div>

                    <div className="slider-content">
                        <h3>2016</h3>
                        <p>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                    </div>

                    <div className="slider-content">
                        <h3>2017</h3>
                        <p>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                    </div>
                    <div className="slider-content">
                        <h3>2017</h3>
                        <p>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                    </div>


                </Swiper>

                


            </section>
            <button onClick={goNext} className="button">

                    <svg width="8" height="15" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
                    </svg>

                </button>
        </section>



    )
}