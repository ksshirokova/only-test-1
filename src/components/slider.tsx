import React, { useEffect } from "react";
import Swiper from "react-id-swiper";
import { useRef } from "react";
import { TData } from "../utils/types";
import { gsap } from "gsap";

export default function Slider({ data }: { data: TData[] }) {
  const ref: any = useRef(null);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };
  const linearAppearance = () => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
        duration: 1,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  };
  useEffect(() => {
    linearAppearance();
  });

  return (
    <section className="slider-container">
      <section className="slider">
        <Swiper ref={ref}>
          {data.map((el: TData) => (
            <div className="slider-content">
              <h3>{el.year}</h3>
              <p>{el.text}</p>
            </div>
          ))}
        </Swiper>
      </section>
      <button onClick={goNext} className="button">
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
    </section>
  );
}
