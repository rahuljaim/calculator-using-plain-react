import React from "react";
import mock from "./mock";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [prev, setPrev] = useState("0");
  const [numb, setNumb] = useState(0);
  const [symb, setSymb] = useState("");

  function handler(e) {
    const num = Number(e.target.value);
    if (num <= 9 || e.target.value === ".") {
      // let updateNum = Number(input.concat(e.target.value));
      // setNumb(Number(input));
      // console.log(numb, typeof(numb));
      setInput(input.concat(e.target.value));
    }
    if (e.target.value === "RESET") {
      setInput("");
    }
    if (e.target.value === "DEL") {
      const dlt = input.split("");
      dlt.pop();
      // console.log(dlt.join())
      // console.log(input)
      setInput(dlt.join(""));
    }
    if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "/" ||
      e.target.value === "x"
    ) {
      setPrev(input);
      setInput("");
      setSymb(e.target.value);
    }

    if (e.target.value === "=") {
      switch (symb) {
        case "+":
          let sum = Number(prev) + Number(input);
          setInput(sum);
          setSymb("");
          break;
        case "-":
          let sub = Number(prev) - Number(input);
          setInput(sub);
          setSymb("");
          break;
        case "/":
          let div = Number(prev) / Number(input);
          setInput(div);
          setSymb("");
          break;
        case "x":
          let mul = Number(prev) * Number(input);
          setInput(mul);
          setSymb("");
          break;
        default:
          break;
      }
    }
  }
  let items = mock.keys.map((e) => (
    <div className={e.class} key={e.id}>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handler}
        value={e.label}
      >
        {e.label}
      </button>
    </div>
  ));
  return (
    <>
      <div className="container mt-5" style={{ width: "220px" }}>
        <input
          className="form-control"
          type="text"
          placeholder=""
          aria-label="Disabled input example"
          disabled
          value={input}
        />
        <div className="row">{items}</div>
      </div>
    </>
  );
};
export default App;
