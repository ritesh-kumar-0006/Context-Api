import React from "react";


const BlogList = (props) => {
const name=props.name;
const title=props.title;

    return ( 
        <div className="blog-List">
            <h2>{title}</h2>
            {name.map((name1) => (
                <div className="blog-Preview" key={name1.id}>
                    <p>{name1.name} {name1.fname}</p>

                </div>

            ))}
            
        </div>
     );
}
 
export default BlogList;