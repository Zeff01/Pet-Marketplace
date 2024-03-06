import { PetUsers } from '@utils/models/users';
import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../config';
import { useUserData } from '../hooks/useUserData';
import { UserMethods } from '@utils/services/user';

interface AuthContextValue {
  user: PetUsers | null;
  setUser: (user: PetUsers | null) => void;
}

export const AuthenticatedUserContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => {},
});

interface AuthenticatedUserProviderProps {
  children: ReactNode;
}

export const AuthenticatedUserProvider: React.FC<AuthenticatedUserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<PetUsers | null>(null);
  const { userData, updateUser } = useUserData();

  async function autoLogin(email: string) {
    const { result, error } = await UserMethods.getUserData(email);
    if (error) {
      alert(error);
    }
    if (result) {
      updateUser(result);
    }
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, u => {
      if (u) {
        setUser({ provider: u });
        console.log(`${u.email} has logged in`);
        // auto sign ins user
        if (!userData && u.email) {
          autoLogin(u.email);
        }
        return;
      }
      setUser(u);
      updateUser(null);
      console.log('user logged out');
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    console.log({ user: firebaseAuth.currentUser });
  }, [user]);

  useEffect(() => {
    console.log({ userData });
  }, [userData]);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
