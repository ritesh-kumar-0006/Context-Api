import { useState } from "react";
import BlogList from "./BlogList";


// we are using {useState} function in react js
//and passing props in  side of BlogList  component
const Home = () => {
const[name,setName]=useState([
        { name:"Mohit ",fname:"rahul", id:2   },
        { name:"Ramesh", fname:" mahesh", id:3  },
    ]);

    
const  handleclick=() => {
    setName([
        { name:"ritesh",fname:"rahul", id:2   },
        { name:"Ankit", fname:" gopal", id:3  },
    ]);
}
    return ( 
        <div className="home">
            <BlogList name={name}  title="All blogs" />
        
            <button onClick={handleclick}> subscribe</button>
            <BlogList name={name.filter((name2) => name2.id === 3)} title ="mario's  blogs"/>
        </div>
     );
}
 
export default Home;