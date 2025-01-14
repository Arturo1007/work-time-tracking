import { z } from 'zod';

export const TimeSchema = z.object({
  taskDescription: z.string({message:'Description field value is invalid.'})
  .trim()
  .max(255, {message: 'Description field must have less than 255 characters.'}),
  hoursAmount: 
  z.string({message:'Hours field value is invalid.'})
  .trim()
  .toLowerCase()
  .regex(/^(\d+h\s*)?(\d+m)?$/, 'Invalid time syntax.'),
});