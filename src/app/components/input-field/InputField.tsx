"use client";
import { useState } from "react";
import { css, cx } from "../../../../styled-system/css";
import { InputFieldRecipe } from "./InputFieldStyles";
import { validateFormat } from "@/app/utils/TimeSyntaxValidation";

type inputField = {
  description: string;
  placeholder: string;
  style?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export default function InputField({
  description,
  placeholder,
  style,
  size,
}: inputField) {
  const classes = InputFieldRecipe({ size, style });
  return (
    <label className={cx(classes.root, css({ color: "#00BB77" }))}>
      {description}
      <input type="text" placeholder={placeholder} className={classes.input} />
    </label>
  );
}

export function HoursField({
  description,
  placeholder,
  style,
  size,
}: inputField) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const classes = InputFieldRecipe({ size, style });
  const labels = ["5m", "10m", "15m", "30m", "1h", "1h 30m", "2h"];

  const handleClick = (value: string) => {
    setInputValue(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (validateFormat(value)) {
      setErrorMessage("");
    } else {
      setErrorMessage("The value is not formatted corretly.");
    }
    setInputValue(value);
  };

  return (
    <>
      <label className={cx(classes.root, css({ color: "#00BB77" }))}>
        {description}
        <input
          type="text"
          placeholder={placeholder}
          className={classes.input}
          value={inputValue}
          onChange={handleChange}
        />
        <ul className={classes.labelWrapper}>
          {labels.map((time) => (
            <li key={time}>
              <button
                type="button"
                className={classes.label}
                onClick={() => handleClick(time)}
              >
                {time}
              </button>
            </li>
          ))}
        </ul>
      </label>
      {errorMessage && <span className={css({fontSize: 'sm', color: 'red.500'})}>{errorMessage}</span>}
    </>
  );
}
