import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    console.log("clicked", count);
    setCount((prev) => prev + 1);
  };

  function throttle(cb, delay) {
    let timer = true;
    return function hello() {
      if (timer) {
        timer = false;

        console.log("timer", timer);
        // clearTimeout(timer);
        setTimeout(() => {
          cb.apply(this);
          timer = true;
        }, delay);
      }

      console.log("timerfaaffa", timer);
    };
  }
  return (
    <div className="App">
      <input type="text" onChange={throttle(handleChange, 2000)} />
      <div>{count}</div>
    </div>
  );
}
