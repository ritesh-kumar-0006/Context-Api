import { useEffect } from "react";
import { useState } from "react";

const Effect = () => {
    
    const[count,setCount]=useState(1);
    const[value,setvalue]=useState(0);


    useEffect(()=>{
        
setCount(count);

    },[count]);

    useEffect(()=>{
        setTimeout(()=>{
                    setvalue((value) =>value);
           },1000);

    },[value]);


    return ( 

        <div className="Effect">
         <h1>I have renderd{count} times!</h1>
        
         <h2>i have value randerd{value}</h2>
       

        </div>
     );
}
 
export default Effect;