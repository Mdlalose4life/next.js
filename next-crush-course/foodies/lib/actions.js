'use server';


import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text){
  return !text || text.trim() === ''
}

async function handleShareMeal(prevState ,formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (isInvalidText(meal.title) ||
  isInvalidText(meal.summary) || 
  isInvalidText(meal.instructions) ||
  isInvalidText(meal.creator) ||
  isInvalidText(meal.creator_email) ||
  !meal.creator_email.include('@') ||
  !meal.image || meal.image.size === 0
  ){
    return {
      message: "invalid input."
    }
  }


  await saveMeal(meal);
  revalidatePath("/meals");
  // revalidatePath("/meals");
  // revalidatePath("/");
  redirect('/meals')
}
export default handleShareMeal