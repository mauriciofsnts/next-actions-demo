"use client";
import { createForm } from "@/actions/create-form";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";

export default function Home() {
  const { execute, fieldErrors } = useAction(createForm, {
    onSuccess: (data) => {
      window.alert(`Success: ${JSON.stringify(data, null, 2)}`);
    },
    onError: (error) => {
      window.alert("Error: " + error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={onSubmit} className="space-y-2">
        <FormInput
          id="title"
          errors={fieldErrors}
          placeholder="Enter a title"
        />

        <FormSubmit>Submit</FormSubmit>
      </form>
    </main>
  );
}
