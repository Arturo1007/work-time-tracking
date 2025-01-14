'use server';

import { revalidatePath } from "next/cache";
import { prisma } from "../db/prisma";
import { parseTimeToMinutes } from "../utils/TimeSyntaxValidation";
import { TimeSchema } from "./zodSchemas";

export async function createTime(prevState: any, formData: FormData) {
  try {
    const results = TimeSchema.safeParse({
      taskDescription: formData.get('task-description'),
      hoursAmount: formData.get('amount-of-hours'),
    });
    if (!results.success) {
      return { success: false, message: "Error:", errors: results.error.errors };
    }
    const {taskDescription, hoursAmount} = results.data;
    const minutesAmount = parseTimeToMinutes(hoursAmount);

    const newTime = await prisma.time.create({
      data: {
        description: taskDescription,
        minutesAmount: minutesAmount,
      }
    });

    if (!newTime) {
      return { success: false, message: "There was an error on trying to create the new record.", errors: []};
    }
    revalidatePath('/');
    return { success: true, message: "Record has been stored sucessfully.", errors: []};
  } catch (error) {
    return { success: false, message: "A unexpected error has ocurred.", errors: []};
  }
}
