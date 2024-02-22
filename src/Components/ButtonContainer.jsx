import React from "react";
import style from "./ButtonContainer.module.css";

export default function ButtonContainer({ onButtonClick }) {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={style.buttonContainer}>
      {buttonName.map((buttonName) => (
        <button
          className={style.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}
