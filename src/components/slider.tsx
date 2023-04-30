import React from "react";
import Swiper from 'react-id-swiper';
import { useRef } from "react";

export default function Slider({ data }) {


    const ref: any = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };

    // const goPrev = () => {
    //     if (ref.current !== null && ref.current.swiper !== null) {
    //         ref.current.swiper.slidePrev();
    //     }
    // };

    return (

        <section className="slider-container">
            <section className="slider">

                <Swiper ref={ref} >
                {data.map(el=>
                   
                    <div className="slider-content">
                        <h3>{el.year}</h3>
                        <p>{el.text}</p>
                    </div>
                    
                
                )}

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