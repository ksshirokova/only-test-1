
import '../scss/index.scss'
import React, { useState } from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Slider from "./slider";
import { carsData, cinemaData, literatureData, pencilData, scienceData, tablesData } from "../utils/constants";
import { TData } from '../utils/types';
import CountUp from 'react-countup';


function App() {

    const [data, setData] = useState(scienceData)
    const [name, setName] = useState<string>('Наука')
    const [number, setNumber] = useState<number>(1)




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
    const yearsRef: any = useRef();
   



    let tl = gsap.timeline();

    let firstYear = data[0].year
    let secondYear = data[data.length - 1].year

    
    
    

    const mouseEnter = (circleRef: any, numberRef: any) => {
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

    const mouseLeave = (circleRef: any, numberRef: any) => {
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


    const rotateNumbers = (deg: string) => {
        gsap.to(numberOne.current, {
            rotate: deg
        })
        gsap.to(numberTwo.current, {
            rotate: deg
        })
        gsap.to(numberThree.current, {
            rotate: deg
        })
        gsap.to(numberFour.current, {
            rotate: deg
        })
        gsap.to(numberFive.current, {
            rotate: deg
        })
        gsap.to(numberSix.current, {
            rotate: deg
        })
    }

    const rotateCircle = (typeOfData: TData[], name: string, fromDeg: string, toDeg: string, numberDeg: string) => {
        gsap.fromTo(mainCircle.current, {
            rotate: fromDeg,
        }, {
            rotate: toDeg,
        },);
        setData(typeOfData)
        setName(name)
        rotateNumbers(numberDeg)
       

    }


    const rotateBack = () => {
        number > 1 && setNumber(number - 1)

        name == 'Кино' &&

            rotateCircle(scienceData, 'Наука', '0deg', '60deg', '60deg')


        name == 'Литература' &&

            rotateCircle(cinemaData, 'Кино', '60deg', '120deg', '120deg')


        name == 'Машины' &&
            rotateCircle(literatureData, 'Литература', '120deg', '180deg', '180deg')

        name == 'Столы' &&
            rotateCircle(carsData, 'Машины', '180deg', '240deg', '240deg')

        name == 'Карандаши' &&
            rotateCircle(tablesData, 'Столы', '240deg', '300deg', '300deg')


    }
    const rotateForward = () => {

        number <= 5 && setNumber(number + 1)

        name == 'Наука' &&
            rotateCircle(cinemaData, 'Кино', '0deg', '-60deg', '60deg')


        name == 'Кино' &&

            rotateCircle(literatureData, 'Литература', '-60deg', '-120deg', '120deg')


        name == 'Литература' &&

            rotateCircle(carsData, 'Машины', '-120deg', '-180deg', '180deg')


        name == 'Машины' &&
            rotateCircle(tablesData, 'Столы', '-180deg', '-240deg', '240deg')

        name == 'Столы' &&
            rotateCircle(pencilData, 'Карандаши', '-240deg', '-300deg', '300deg')




    }



   








    return (
        <main>
            
  
            <div className='first-line'></div>
            <div className='second-line'></div>
            <h1>Исторические даты</h1>
            <p className="category">{name}</p>
            <div className="years" >
                <h3  ><CountUp className="first-year" start={firstYear- 4} end={firstYear}  separator=""/></h3>
                <h3 ><CountUp className="last-year" start={secondYear- 4} end={secondYear}  separator=""/></h3>
            </div>
            <div className='buttons-container'>
                <p className='numbers'>0{number}/06</p>
                <button className={`${number == 1 ? "button_disabled" : 'button'}`} onClick={rotateBack}>

                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" stroke-width="2" />
                    </svg>


                </button>
                <button className={`${number == 6 ? "button_disabled" : 'button'}`} onClick={rotateForward}>

                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" stroke-width="2" />
                    </svg>

                </button>
            </div>
            <div className="main-circle" ref={mainCircle}>

                <div
                    className="circle first-circle"
                    ref={circleFirst}
                    onClick={() => rotateCircle(scienceData, 'Наука', '-300deg', '-360deg', '360deg')}
                    onMouseEnter={() => mouseEnter(circleFirst, numberOne)}
                    onMouseLeave={() => mouseLeave(circleFirst, numberOne)}
                >
                    <p className="text" ref={numberOne}>
                        1
                    </p>
                </div>
                <div
                    className="circle second-circle"
                    ref={circleSecond}
                    onClick={() => rotateCircle(cinemaData, 'Кино', '0deg', '-60deg', '60deg')}
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
                    onClick={() => rotateCircle(literatureData, 'Литература', '-60deg', '-120deg', '120deg')}
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
                    onClick={() => rotateCircle(carsData, 'Машины', '-120deg', '-180deg', '180deg')}
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
                    onClick={() => rotateCircle(tablesData, 'Столы', '-180deg', '-240deg', '240deg')}
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
                    onClick={() => rotateCircle(pencilData, 'Карандаши', '-240deg', '-300deg', '300deg')}
                    onMouseEnter={() => mouseEnter(circleSixth, numberSix)}
                    onMouseLeave={() => mouseLeave(circleSixth, numberSix)}
                >
                    <p className="text" ref={numberSix}>
                        6
                    </p>
                </div>
            </div>

            <Slider data={data} />


        </main>
    )


}
export default App;