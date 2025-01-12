'use server';

export async function createTime(formData: FormData) {
  const rawFormData = {
    taskDescription: formData.get('task-description'),
    Hoursamount: formData.get('amount-of-hours'),
  };
  console.log(rawFormData);
}
