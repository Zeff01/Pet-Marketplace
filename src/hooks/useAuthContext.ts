import { useContext } from 'react';
import { AuthenticatedUserContext } from '../providers';

export function useAuthContext() {
  return useContext(AuthenticatedUserContext);
}
