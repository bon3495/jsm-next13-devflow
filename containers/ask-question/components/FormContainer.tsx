'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  FormContext,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormAskQuestionSchema } from '@/containers/ask-question/schema';
import { FormAskQuestionType } from '@/containers/ask-question/types';

const FormContainer = () => {
  const methods = useForm<FormAskQuestionType>({
    resolver: zodResolver(FormAskQuestionSchema),
    defaultValues: {
      title: '',
      details: '',
      expecting: '',
      tags: [],
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data: FormAskQuestionType) => {
    console.log(data);
  };

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <section className="rounded-md border p-6">
          <FormField
            control={control}
            name="title"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel className="w-fit text-base font-semibold">Title</FormLabel>
                <FormDescription className="mb-1">
                  Be specific and imagine you're asking a question to another person.
                </FormDescription>
                <FormControl>
                  <Input
                    {...field}
                    errorMessage={error?.message}
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  />
                </FormControl>
                <FormMessage className="mt-1" />
              </FormItem>
            )}
          />
        </section>
        <section className="rounded-md border p-6">Text Editor</section>
        <section className="rounded-md border p-6">Tags</section>

        <div className="flex items-center">
          <Button type="submit" variant="primary" className="ml-auto">
            Post Your Question
          </Button>
        </div>
      </form>
    </FormContext>
  );
};

export default FormContainer;
