import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  //robienie dat
  const date = new Date("june 21 2027");
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(1);

  //dodawnie do daty
  date.setDate(date.getDate() + step * counter);

  return (
    <div>
      {" "}
      {
        // tworzenie inputa slidera
      }
      <div>
        <input type="range" min={0} max={10} onChange={(e) => setStep(+e.target.value)}></input>
        <span>{step}</span>
      </div>
      <div>
        {
          //dodwanie i odejmowanie z przyciskow
        }
        <button onClick={() => setCounter((s) => s - 1)}>-</button>
        <input type="number" value={counter} onChange={(e) => setCounter(+e.target.value)}></input>
        <button onClick={() => setCounter((s) => s + 1)}>+</button>
      </div>
      <p>
        {step === 0 ? "Today " : `${step * counter} days from today`} is {date.toDateString()}
      </p>
      {step !== 0 ? (
        //tworzenie buttona reset
        <button
          onClick={(e) => {
            setCounter(1);
            setStep(1);
          }}
        >
          RESET
        </button>
      ) : null}
    </div>
  );
}
