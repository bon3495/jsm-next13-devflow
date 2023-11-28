import { z } from 'zod';

import { CardQuestionSchema, CardQuestionsListSchema } from '@/containers/home/schema';

export type CardQuestionType = z.infer<typeof CardQuestionSchema>;
export type CardQuestionsListType = z.infer<typeof CardQuestionsListSchema>;
