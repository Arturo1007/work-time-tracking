import { useFormStatus } from "react-dom";
import { SubmitButtondRecipe } from "./SubmitButtonStyles";

type button = {
  label: string,
}

export default function Button({label} :button) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled= {pending}
      className={SubmitButtondRecipe()}
    >
      {label}
    </button>
  );
}
