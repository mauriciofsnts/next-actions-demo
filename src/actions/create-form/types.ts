import { z } from "zod";
import { CreateFormSchema } from "./schema";
import { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof CreateFormSchema>;
export type ReturnType = ActionState<InputType, { title: string }>;
