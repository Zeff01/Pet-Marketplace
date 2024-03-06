import { Timestamp } from 'firebase/firestore';
import { create } from 'zustand';

export type UserData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: string[];
  items: string[];
  created_at: Timestamp;
} | null;

type State = {
  userData: UserData;
};

type Actions = {
  updateUser(user: UserData): void;
};

export const useUserData = create<State & Actions>(set => ({
  userData: null,
  updateUser: (user: UserData) => set({ userData: user }),
}));
