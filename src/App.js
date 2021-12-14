import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const ClearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result} />
      <input
        type="button"
        value="9"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="0"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="Clear"
        className="button button1"
        onClick={ClearDisplay}
      />
      <input
        type="button"
        value="="
        className="button button1"
        onClick={calculate}
      />
    </div>
  );
}
