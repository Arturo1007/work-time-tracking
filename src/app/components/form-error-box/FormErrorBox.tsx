import { ZodIssue } from "zod";
import { css } from "../../../../styled-system/css";
import { FormErrorBoxRecipe } from "./FormErrorBoxStyles";

type FormErroBox = {
  success: boolean;
  message: string;
  errors: ZodIssue[];
};

export default function FormErrorBox({
  success,
  message,
  errors,
}: FormErroBox) {
  const classes = FormErrorBoxRecipe({ success });
  // If is a sucess message it will only render the message.
  if (success && message) {
    return (
      <div className={classes.root}>
        <h2 className={classes.title}>{message}</h2>
      </div>
    );
  }
  // If it is not a sucess message and it contains an error array, show them as list.
  else if (!success && errors.length > 0 && message) {
    return (
      <ul className={classes.root}>
        <h2 className={classes.title}>{message}:</h2>
        {errors.map((error, index) => (
          <li key={index} className={classes.list}>
            {error.message}
          </li>
        ))}
      </ul>
    );
  }
  // If it is not a sucess message and it doesn't not contains an error array, only show the message
  else if (!success && errors.length == 0 && message) {
    return (
      <div className={classes.root}>
        <h2 className={classes.title}>{message}</h2>
      </div>
    );
  }
}
