import React, { useState } from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Circle() {
    
    const [deg, setDeg] = useState(0);
    const mainCircle: any = useRef();
    const circleFirst: any = useRef();
    const circleSecond: any = useRef();
    const circleThird: any = useRef();
    const circleForth: any = useRef();
    const circleFifth: any = useRef();
    const circleSixth: any = useRef();
    const numberOne: any = useRef();
    const numberTwo: any = useRef();
    const numberThree: any = useRef();
    const numberFour: any = useRef();
    const numberFive: any = useRef();
    const numberSix: any = useRef();

    

    let tl = gsap.timeline();

    const mouseEnter = (circleRef, numberRef) => {
        tl.to(circleRef.current, {
            scale: 4,
            width: "19px",
            height: "19px",
            duration: 0.5,
            backgroundColor: "#fff",
        });

        tl.to(numberRef.current, {
            opacity: 1,
            duration: 0.2,
        });
    };
    const mouseLeave = (circleRef, numberRef) => {
        tl.to(circleRef.current, {
            scale: 1,
            duration: 0.5,
            backgroundColor: "#42567A",

            width: "4px",
            height: "4px",
        });
        tl.to(
            numberRef.current,
            {
                opacity: 0,
                duration: 0.5,
            },
            "-=0.5"
        );
    };
    const rotateFirstCircle = () => {

        gsap.fromTo(mainCircle.current, {
            rotate: "-300deg",
        }, {
            rotate: "-360deg",
        });
        
        console.log(mainCircle.current._gsap)
    };
    const rotateSecondCircle = () => {
        gsap.fromTo(mainCircle.current, {
            rotate: "0",
        }, {
            rotate: "-60deg",
        },);
        
    };
    const rotateThirdCircle = () => {
        gsap.fromTo(mainCircle.current, {
            rotate: "-60deg",
        }, {
            rotate: "-120deg",
        },);
    };
    const rotateForthCircle = () => {
        gsap.fromTo(mainCircle.current, {
            rotate: "-120deg",
        }, {
            rotate: "-180deg",
        },);
    };
    const rotateFifthCircle = () => {
        gsap.fromTo(mainCircle.current, {
            rotate: "-180de",
        }, {
            rotate: "-240deg",
        },);
    };
    const rotateSixthCircle = () => {
        gsap.fromTo(mainCircle.current, {
            rotate: "-240deg",
        }, {
            rotate: "-300deg",
        },);
    };
    console.log(deg)
    return (
        <div className="main-circle" ref={mainCircle}>
            <div
                className="first-circle"
                ref={circleFirst}
                onClick={rotateFirstCircle}
                onMouseEnter={() => mouseEnter(circleFirst, numberOne)}
                onMouseLeave={() => mouseLeave(circleFirst, numberOne)}
            >
                <p className="text" ref={numberOne}>
                    1
                </p>
            </div>
            <div
                className="second-circle"
                ref={circleSecond}
                onClick={rotateSecondCircle}
                onMouseEnter={() => mouseEnter(circleSecond, numberTwo)}
                onMouseLeave={() => mouseLeave(circleSecond, numberTwo)}
            >
                <p className="text" ref={numberTwo}>
                    2
                </p>
            </div>
            <div
                className="third-circle"
                ref={circleThird}
                onClick={rotateThirdCircle}
                onMouseEnter={() => mouseEnter(circleThird, numberThree)}
                onMouseLeave={() => mouseLeave(circleThird, numberThree)}
            >
                <p className="text" ref={numberThree}>
                    3
                </p>
            </div>
            <div
                className="forth-circle"
                ref={circleForth}
                onClick={rotateForthCircle}
                onMouseEnter={() => mouseEnter(circleForth, numberFour)}
                onMouseLeave={() => mouseLeave(circleForth, numberFour)}
            >
                <p className="text" ref={numberFour}>
                    4
                </p>
            </div>
            <div
                className="fifth-circle"
                ref={circleFifth}
                onClick={rotateFifthCircle}
                onMouseEnter={() => mouseEnter(circleFifth, numberFive)}
                onMouseLeave={() => mouseLeave(circleFifth, numberFive)}
            >
                <p className="text" ref={numberFive}>
                    5
                </p>
            </div>
            <div
                className="sixth-circle"
                ref={circleSixth}
                onClick={rotateSixthCircle}
                onMouseEnter={() => mouseEnter(circleSixth, numberSix)}
                onMouseLeave={() => mouseLeave(circleSixth, numberSix)}
            >
                <p className="text" ref={numberSix}>
                    6
                </p>
            </div>
        </div>
    );
}
