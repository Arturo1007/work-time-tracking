'use client'
import React from 'react'
import InputField, { HoursField } from '../input-field/InputField'
import Button from '../button/Button'
import { css } from '../../../../styled-system/css'
import { createTime } from '@/app/libs/actions'

export default function FormNewTime() {
  return (
    <form action={createTime}
        className={css({
          pt: "8",
          fontSize: "xl",
          width: "full",
          sm: { width: "1/2" },
        })}
      >
        <InputField
          description="Task description:"
          placeholder="Type your description here"
          name='task-description'
        />
        <HoursField
          description="Amount of hours:"
          placeholder="30m, 1h, 1h 30m"
          name='amount-of-hours'
        />
        <Button btnText="Submit" />
      </form>
  )
}
