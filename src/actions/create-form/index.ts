"use server";

import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateFormSchema } from "./schema";

export const simulateDatabaseCall = (data: {
  title: string;
}): Promise<{ title: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ title: data.title });
    }, 1000);
  });
};

const handler = async (data: InputType): Promise<ReturnType> => {
  const { title } = data;
  let item;

  try {
    item = await simulateDatabaseCall({ title });
  } catch (error) {
    return {
      error: "An error occurred while creating the form.",
    };
  }

  revalidatePath("/");
  return { data: item };
};

export const createForm = createSafeAction(CreateFormSchema, handler);
