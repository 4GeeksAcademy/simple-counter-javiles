import React from "react";
import { MyDiv } from "./App";
import { useState, useEffect } from "react";

//include images into your bundle


//create your first component

const Home = () => {

    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{setCounter(counter => counter+1)},1000)
        console.log(counter)

        return() => clearInterval(interval)
    }, [counter]) 

   function calculateSeconds(aCounter, placeValue){
        return Math.floor(aCounter / placeValue) % 10

    }

	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> React Simple Counter</h1>
            <MyDiv 
                thousandsDigit={calculateSeconds(counter,1000)}
                hundredsDigit={calculateSeconds(counter,100)}
                tensDigit={calculateSeconds(counter,10)}
                onesDigit={calculateSeconds(counter,1)}
            />
            
            
		</div>
	);
};

export default Home;
