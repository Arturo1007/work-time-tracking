'use server';

import { prisma } from "../db/prisma";
import { parseTimeToMinutes } from "../utils/TimeSyntaxValidation";

export async function createTime(formData: FormData) {
  const rawFormData = {
    taskDescription: String(formData.get('task-description')),
    hoursamount: String(formData.get('amount-of-hours')),
  };
  const minutesAmount =  Number(parseTimeToMinutes(rawFormData.hoursamount));

  const newTime = await prisma.time.create({
    data: {
      description: rawFormData.taskDescription,
      minutesAmount: minutesAmount,
    }
  });

  if(newTime) {
    console.log('Time logged sucessfully!!');
  }
}
