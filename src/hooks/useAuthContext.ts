import { useContext } from 'react';
import { AuthenticatedUserContext } from 'src/providers';

export function useAuthContext() {
  return useContext(AuthenticatedUserContext);
}
