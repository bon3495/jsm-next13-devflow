import { z } from 'zod';

export const CardQuestionSchema = z.object({
  _id: z.number(),
  title: z.string().trim(),
  tags: z.array(
    z.object({
      _id: z.number(),
      name: z.string().trim(),
    }),
  ),
  author: z.object({
    _id: z.number(),
    name: z.string().trim(),
    picture: z.string().trim(),
  }),
  views: z.number(),
  answers: z.number(),
  createAt: z.string().trim(),
});

export const CardQuestionsListSchema = z.object({
  data: z.array(CardQuestionSchema),
});
