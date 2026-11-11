import React from "react";

const child =(prop) => {
    return (
     <div className="card">
       <img src={prop.pizza} alt="" />
    </div>
    );
};

export default child;
