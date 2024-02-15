import { useState, useEffect } from "react";

export default function Timer({ count, setCount }) {
  useEffect(() => {
    // variable for the interval - takes a cbf and interval time
    const interval = setInterval(() => {
      // what you want to run for each time on the interval i.e. what set interval does
      setCount((preCount) => preCount + 1); // functional update (gets previous value before the render)
      //   setCount(count + 1); // normal update
    }, 1000);
    return () => clearInterval(interval); // stop the intervals running - cleanUpFunction
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
