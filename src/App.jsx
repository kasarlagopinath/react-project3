import React, { useState} from "react";
import "./App.css";
import Child from "./child";
const App = () => {
    const [count, setCount] = usestate(0);

  return (
    <div>
      <h2>{count}</h2>
    <child count={count} counter={setcount}/> 
    </div>
  );
};

export default App;