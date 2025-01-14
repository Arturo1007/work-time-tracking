"use client";
import React, { useActionState } from "react";
import InputField, { HoursField } from "../input-field/InputField";
import Button from "../submit-btn/SubmitBtn";
import { css } from "../../../../styled-system/css";
import { createTime } from "@/app/libs/actions";
import FormErrorBox from "../form-error-box/FormErrorBox";

export default function FormNewTime() {
  const [state, formAction, pending] = useActionState(createTime, {
    success: false,
    message: "",
    errors: [],
  });

  return (
    <form
      action={formAction}
      className={css({
        pt: "8",
        fontSize: "xl",
        width: "full",
        sm: { width: "1/2" },
      })}
    >
      <FormErrorBox
        success={state.success}
        errors={state.errors}
        message={state.message}
      />
      <InputField
        description="Task description:"
        placeholder="Type your description here"
        name="task-description"
      />
      <HoursField
        description="Amount of hours:"
        placeholder="30m, 1h, 1h 30m"
        name="amount-of-hours"
      />
      <Button label="Create" />
    </form>
  );
}
