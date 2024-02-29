import { PetUsers } from '@utils/models/users';
import React, { useState, createContext, ReactNode } from 'react';

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

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
