import { userRepository } from '../../models/repository-actions/user-actions';
import { UserProp } from '../../types';

export const userServices = {
	newUser: async (userData: UserProp) => {
		return await userRepository.create(userData);
	},

	emailService: async (email: string) => {
		return await userRepository.findByEmail(email);
	},

	getDataServices: async (id: string) => {
		return await userRepository.findById(id);
	},
};
