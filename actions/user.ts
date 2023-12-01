'use server';

import { z } from 'zod';

import { UserInfoSchema, UserServerSchema } from '@/actions/schema/user-server';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getUserById(params: z.infer<typeof UserServerSchema>): Promise<z.infer<typeof UserInfoSchema>> {
  try {
    connectToDatabase();

    const { userId } = UserServerSchema.parse(params);

    const existingUser = await UserModel.findOne({ clerkId: userId });

    return existingUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
