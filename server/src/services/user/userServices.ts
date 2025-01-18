import { userProps } from 'src/types';
import { userRepository } from '../../models/repositories/userRespositories';

export const userServices = {
	createNew: async (userDetails: userProps): Promise<userProps | null> => {
		return await userRepository.create(userDetails);
	},

	findUserByEmail: async (email: string): Promise<userProps | null> => {
		return await userRepository.findByEmail(email);
	},

	getUserId: async (id: string): Promise<userProps | null> => {
		return await userRepository.findById(id);
	},
};
