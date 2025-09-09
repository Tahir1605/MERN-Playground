import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // start the interval
    const intervalId = setInterval(() => {
      console.log("setInterval executed");
      setSeconds((prevSecond) => prevSecond + 1);
    }, 1000);

    // cleanup: stops interval on unmount
    return () => {
      console.log("Timer stopped");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 className="text-lg text-white font-semibold">Seconds : {seconds}</h1>
    </div>
  );
}

export default Timer;
