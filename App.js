import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setstep] = useState(1);
  const [count, setcount] = useState(0);

  function clickhndle() {
    setstep(1);
    setcount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="button-container">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setstep(Number(e.target.value))}
        />
        <span>step:{step}</span>
      </div>
      <p className="para-container">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div className="button-container">
        <button
          className="custom-button"
          onClick={() => setcount(count - step)}
        >
          -
        </button>

        <div>
          <input
            type="text"
            placeholder=""
            value={count}
            onChange={(e) => setcount(e.target.value)}
          ></input>
        </div>

        <button
          className="custom-button"
          onClick={() => setcount(count + step)}
        >
          +
        </button>
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={clickhndle}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
