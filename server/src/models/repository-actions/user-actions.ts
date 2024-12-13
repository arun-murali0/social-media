import { User } from '../user-schema/user-schema';
import { UserProp } from '../../types';

export const userRepository = {
	create: async (userData: UserProp): Promise<UserProp | null> => {
		return await User.create(userData);
	},

	findByEmail: async (email: string): Promise<UserProp | null> => {
		return await User.findOne({ email: email }).exec();
	},

	findById: async (id: string): Promise<UserProp | null> => {
		return await User.findOne({ _id: id }).exec();
	},
};
