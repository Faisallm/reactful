import React from "react";
import { useState } from "react";

// Content is a different type of component

const Content = () => {
  // current state of our app
  const [name, setName] = useState("Faisal");
  const [count, setCount] = useState(0);

  // this will automatically create a function
  //   this function will change the state
  //  and cause the component to re-render with
  // the new state.
  const handleNameChange = () => {
    const names = ["Faisal", "Lawan", "Muhammad"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  //  the event is saved as e
  // e is used to save the current html element
  // that is being worked on.
  const handleClick = () => {
    // cout the value of the current state.
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  }

  return (
    <main>
      {/* this name variable is a state */}
      <p>Hello {name}!</p>

      <button onClick={handleNameChange}>Change the name</button>
      <button onClick={handleClick}>click it!</button>
      <button onClick={handleClick2}>click it2!</button>
    </main>
  );

};

export default Content;
