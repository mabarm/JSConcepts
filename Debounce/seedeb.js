import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    console.log("clicked", count);
    setCount((prev) => prev + 1);
  };

  function debounce(cb, delay) {
    let timer;
    return function hello() {
      if (timer) {
        console.log("timer", timer);
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        cb.apply(this);
      }, delay);
      console.log("timerfaaffa", timer);
    };
  }
  return (
    <div className="App">
      <input type="text" onChange={debounce(handleChange, 2000)} />
      <div>{count}</div>
    </div>
  );
}
