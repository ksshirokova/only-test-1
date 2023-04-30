import React from "react";
import '../scss/index.scss'
import Slider from "./slider";
import Circle from "./circle";
import { useState } from "react";
import { scienceData } from "../utils/constants";



function App(){
    const [data, setData] = useState(scienceData)
    
    return(
    <main>
        <p>2015</p>
        
        <Circle />
        <Slider data={data}/>
    </main>
    )

   
}
export default App;