'use server';

import { z } from 'zod';

import { QuestionServerSchema } from '@/actions/schema/question-server';
import QuestionModel from '@/database/question.model';
import TagModel from '@/database/tag.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function createQuestion(params: z.infer<typeof QuestionServerSchema>) {
  try {
    connectToDatabase();
    const { title, details, tags, author } = QuestionServerSchema.parse(params);

    // Create the question
    const question = await QuestionModel.create({
      title,
      details,
      author,
    });

    const tagsDocument = [];

    // Create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await TagModel.findOneAndUpdate(
        {
          name: {
            $regex: new RegExp(`^${tag}$`, 'i'),
          },
        },
        {
          $setOnInsert: { name: tag },
          $push: { questions: question._id },
        },
        {
          upsert: true,
          new: true,
        },
      );

      tagsDocument.push(existingTag._id);
    }

    await QuestionModel.findByIdAndUpdate(question._id, {
      $push: {
        tags: { $each: tagsDocument },
      },
    });

    // Create an interaction record for the user's ask question action

    // Increment author's reputation by +5 for creating a question
  } catch (error) {}
}
