import { useState } from "react";
import BlogList from "./BlogList";
//we are using  reuse component in this function
const Reuse = () => {
const[name,setName]=useState([
        { name:"vishnu",fname:"visraj singh", id:2   },
        { name:" avinash", fname:" revendra kumar",id:3  },
    ]);
    const onclickhandle =() =>{
        setName([
            { name:"rajkumar singh",fname:"rahul roy", id:2 },
            { name:"Ankit", fname:" manish singh",id:3  },
        ])
    }

    return ( 
        <div className="home">
            <BlogList name={name}  title="All blogs" />
        <button onClick={onclickhandle}>login</button>
        <BlogList name={name.filter((name2) => name2.id === 2)} title ="mario's  blogs"/>
        </div>
     );
}
 
export default Reuse;