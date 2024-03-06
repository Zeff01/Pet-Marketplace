import { firebaseAuth, firebaseDb } from '../../config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, query, where, getDoc, getDocs, addDoc, Timestamp } from 'firebase/firestore';

export type SignupForm = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type UserDocumentData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: string[];
  items: string[];
  created_at: Timestamp;
  error?: string;
};

export class UserMethods {
  static async signup({
    name,
    email,
    phone,
    password,
  }: SignupForm): Promise<{ message?: string; error?: string }> {
    // check first if user already exist
    try {
      const usersRef = collection(firebaseDb, 'users');
      const q = query(usersRef, where('email', '==', email));
      const user = await getDocs(q);
      if (!user.empty) {
        return {
          error: 'user already exist!',
        };
      }
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await addDoc(usersRef, {
        name,
        email,
        phone,
        pets: [],
        items: [],
        created_at: Timestamp.now(),
      });
      return {
        message: 'user created',
      };
    } catch (error) {
      return {
        error: 'something went wrong',
      };
    }
  }

  static async signin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ result?: UserDocumentData; error?: string }> {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);

      const usersRef = collection(firebaseDb, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshots = await getDocs(q);
      if (querySnapshots.empty) {
        return {
          error: 'user not found',
        };
      }
      if (querySnapshots.docs.length > 1) {
        return {
          error: 'multiple users with same email found',
        };
      }
      let userData = {} as UserDocumentData;
      querySnapshots.forEach(doc => {
        const data = { ...doc.data(), id: doc.id } as UserDocumentData;
        userData = data;
      });

      return {
        result: userData,
      };
    } catch (error) {
      console.warn(error);
      return {
        error: 'something went wrong',
      };
    }
  }

  static async logout(): Promise<{ error?: string; message?: string }> {
    try {
      await signOut(firebaseAuth);
      return { message: 'logout successfully' };
    } catch (error) {
      return { error: 'logout failed' };
    }
  }

  static async getUserData(email: string): Promise<{ result?: UserDocumentData; error?: string }> {
    try {
      const usersRef = collection(firebaseDb, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshots = await getDocs(q);
      if (querySnapshots.empty) {
        return {
          error: 'user does not exist',
        };
      }
      let userData = {} as UserDocumentData;
      querySnapshots.forEach(doc => {
        const data = { ...doc.data(), id: doc.id } as UserDocumentData;
        userData = data;
      });

      return {
        result: userData,
      };
    } catch (error) {
      return {
        error: 'something went wrong',
      };
    }
  }
}

export type Signup = ReturnType<typeof UserMethods.signup>;
export type Signin = ReturnType<typeof UserMethods.signin>;
export type Logout = ReturnType<typeof UserMethods.logout>;
