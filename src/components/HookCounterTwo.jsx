import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  //   this will not increment count by 5 instead it will increment it by one
  //   const incementFive = () => {
  //     for (let i = 0; i < 5; i++) {
  //       setCount(count + 1);
  //     }
  //   };


  //   this will increment count by 5
  const incementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount=> prevCount - 1)}>Decrement</button>
      <button onClick={incementFive}>Increment 5</button>
    </div>
  );
};

export default HookCounterTwo;
