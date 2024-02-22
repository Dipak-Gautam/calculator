import style from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } 
    else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } 
    else {
      let newValue = calVal + buttonText;
      setcalVal(newValue);
    }
  };

  return (
    <>
      <div className={style.calculator}>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
