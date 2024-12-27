import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UserState = {
	user: boolean;
};

type UserAction = {
	setUser: () => void;
};

export const useUserStore = create<UserAction & UserState>((set) => ({
	user: false,
	setUser: () =>
		set((state) => {
			state.user = !state.user;
		}),
}));
