import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// add firebase config
const firebaseConfig = {
  ...Constants?.expoConfig?.extra?.firebaseConfig,
};

// initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const firebaseDb = getFirestore(firebaseApp);

export { firebaseApp, firebaseAuth, firebaseDb };
