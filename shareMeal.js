'use server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {insertMeal} from "./query"
const fs = require('fs')
const path = require('path');
var slugify = require('slugify')

function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function ShareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creatoremail"),
  };
  console.log(meal)
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  meal.slug = slugify(meal.title)
  console.log(meal)



  const filename = `${meal.slug}.${meal.image.name.split('.').pop()}`


  const stream = fs.createWriteStream(`public/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });
  meal.image = filename

  insertMeal(meal)
  revalidatePath("/");
  redirect("/");
}
