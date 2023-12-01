'use server';

import { UserServerSchema } from '@/containers/authentication/schema';
import { UserInfoType, UserServerType } from '@/containers/authentication/types';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getUserById(params: UserServerType): Promise<UserInfoType> {
  try {
    connectToDatabase();

    const { userId } = UserServerSchema.parse(params);

    const existingUser = await UserModel.findOne({ clerkId: userId });

    return existingUser;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - user', error);
    throw error;
  }
}
