import React from "react";

const Child = ({count,counter}) => {
    const clickButton = () => {
      counter(count+5);  
    };
    return (
     <div>
        <button onClick={clickButton}>click</button>
     </div>
    );
};

export default Child;
