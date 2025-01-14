"use client";
import { useRef, useState } from "react";
import { css, cx } from "../../../../styled-system/css";
import { InputFieldRecipe } from "./InputFieldStyles";
import { validateFormat } from "@/app/utils/TimeSyntaxValidation";

type inputField = {
  description: string;
  placeholder: string;
  name: string;
  style?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export default function InputField({
  description,
  placeholder,
  style,
  size,
  name,
}: inputField) {
  const classes = InputFieldRecipe({ size, style });
  return (
    <label className={cx(classes.root, css({ color: "#00BB77" }))}>
      {description}
      <input
        type="text"
        placeholder={placeholder}
        className={classes.input}
        name={name}
        required
      />
    </label>
  );
}

export function HoursField({
  description,
  placeholder,
  style,
  size,
  name,
}: inputField) {
  const [errorMessage, setErrorMessage] = useState("");
  const classes = InputFieldRecipe({ size, style });
  const labels = ["5m", "10m", "15m", "30m", "1h", "1h 30m", "2h"];
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (value: string) => {
    if (validateFormat(value)) setErrorMessage(""); else setErrorMessage("The value is not formatted corretly.");
    if (inputRef.current) inputRef.current.value = value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (validateFormat(value)) setErrorMessage(""); else setErrorMessage("The value is not formatted corretly.");
    event.target.value = value;
  };

  return (
    <>
      <label className={cx(classes.root, css({ color: "#00BB77" }))}>
        {description}
        <input
          type="text"
          placeholder={placeholder}
          className={classes.input}
          name={name}
          onChange={handleChange}
          ref={inputRef}
          required
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
      {errorMessage && (
        <span className={classes.errorMessage}>{errorMessage}</span>
      )}
    </>
  );
}
