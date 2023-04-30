import React from "react"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function Circle() {
    
    const circleFirst:any= useRef()
    const circleSecond:any= useRef()
    const circleThird:any= useRef()
    const circleForth:any= useRef()
    const circleFifth:any= useRef()
    const circleSixth:any= useRef()
    const numberOne:any= useRef()
    const numberTwo:any= useRef()
    const numberThree:any= useRef()
    const numberFour:any= useRef()
    const numberFive:any= useRef()
    const numberSix:any= useRef()

  // запускаем `gsap` после рендеринга
  
    // gsap.to(el.current, {
    //   // полный поворот
    //   scale:2,
    //   duration:2
    // })
  let tl = gsap.timeline()
    const mouseEnter=(circleRef, numberRef)=>{
        tl.to(circleRef.current, {
            scale: 4,
            width:"19px",
            height:'19px',
            duration:0.5,
            backgroundColor: "#fff"})

          
        tl.to(numberRef.current, {
            
            opacity:1,
            duration:0.2,
            
          })
    }
    const mouseLeave=(circleRef, numberRef)=>{
        tl.to(circleRef.current, {
            scale:1,
            duration:0.5,
            backgroundColor:"#42567A",
            
            width:"4px",
            height:'4px',
            
           
          })
          tl.to(numberRef.current, {
            
            opacity:0,
            duration:0.2,
            
          })
          
    }

  
   


    

    return (
        <div className="main-circle">
          
            <div className='first-circle' ref={circleFirst} onMouseEnter={()=>mouseEnter(circleFirst, numberOne)} onMouseLeave={()=>mouseLeave(circleFirst, numberOne)}><p className="text" ref={numberOne}>1</p></div>
            <div className="second-circle"ref={circleSecond} onMouseEnter={()=>mouseEnter(circleSecond, numberTwo)} onMouseLeave={()=>mouseLeave(circleSecond, numberTwo)}><p className="text" ref={numberTwo}>2</p></div>
            <div className="third-circle"ref={circleThird} onMouseEnter={()=>mouseEnter(circleThird, numberThree)} onMouseLeave={()=>mouseLeave(circleThird, numberThree)}><p className="text" ref={numberThree}>3</p></div>
            <div className="forth-circle" ref={circleForth} onMouseEnter={()=>mouseEnter(circleForth, numberFour)} onMouseLeave={()=>mouseLeave(circleForth, numberFour)}><p className="text" ref={numberFour}>4</p></div>
            <div className="fifth-circle" ref={circleFifth} onMouseEnter={()=>mouseEnter(circleFifth, numberFive)} onMouseLeave={()=>mouseLeave(circleFifth, numberFive)}><p className="text" ref={numberFive}>5</p></div>
            <div className="sixth-circle" ref={circleSixth} onMouseEnter={()=>mouseEnter(circleSixth, numberSix)} onMouseLeave={()=>mouseLeave(circleSixth, numberSix)}><p className="text" ref={numberSix}>6</p></div>

        </div>
    )

}