import { z } from 'zod';

export const CardQuestionSchema = z.object({
  _id: z.string(),
  title: z.string().trim(),
  tags: z.array(
    z.object({
      _id: z.string(),
      name: z.string().trim(),
      path: z.string(),
    }),
  ),
  author: z.object({
    _id: z.string(),
    name: z.string().trim(),
    picture: z.string().trim(),
  }),
  views: z.number(),
  answers: z.number(),
  upvotes: z.number(),
  createAt: z.string().trim(),
});

export const CardQuestionsListSchema = z.object({
  data: z.array(CardQuestionSchema),
});
