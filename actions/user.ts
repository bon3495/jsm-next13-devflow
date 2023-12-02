'use server';

import { revalidatePath } from 'next/cache';

import { UserInfoType, UserServerType } from '@/containers/authentication/types';
import QuestionModel from '@/database/question.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getUserById(params: UserServerType): Promise<UserInfoType> {
  try {
    connectToDatabase();

    const { userId } = params;

    const existingUser = await UserModel.findOne({ clerkId: userId });

    return existingUser;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getUserById', error);
    throw error;
  }
}

export async function createUser(params: Partial<UserInfoType>): Promise<UserInfoType> {
  try {
    connectToDatabase();

    const newUser = (await UserModel.create(params)) as UserInfoType;

    return newUser;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - createUser', error);
    throw error;
  }
}

export async function updateUser(clerkId: string, params: Partial<UserInfoType>, path: string) {
  try {
    connectToDatabase();

    await UserModel.findByIdAndUpdate(clerkId, params, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - updateUser', error);
    throw error;
  }
}

export async function deleteUser(clerkId: string): Promise<void> {
  try {
    connectToDatabase();

    const user = (await UserModel.findOne({ clerkId })) as UserInfoType;
    if (!user) {
      throw new Error('User not found!');
    }

    // Delete user from database, and questions, comments, answers, ...
    // const userQuestionIds = await QuestionModel.find({ author: user._id });

    await QuestionModel.deleteMany({ author: user._id });
    await UserModel.findByIdAndDelete(user._id);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - deleteUser', error);
    throw error;
  }
}
