import { userProps } from 'src/types';
import { user } from '../schema/userSchema';

export const userRepository = {
	create: async (userDetails: userProps): Promise<userProps | null> => {
		return await user.create(userDetails);
	},

	findById: async (id: string): Promise<userProps | null> => {
		return await user.findOne({ _id: id });
	},

	findByEmail: async (email: string): Promise<userProps | null> => {
		return await user.findOne({ email: email });
	},
};
