 
import React, { useState,useEffect} from 'react';


const Loding = () => {
const [blogs,setblogs]=useState('ram');

useEffect(()=>{
   
    setblogs('mohan');
    
},2000);

    return ( 
        <div className="loding">
        
            <p>{blogs}</p>
            
        </div>
     );
}
 
export default Loding;