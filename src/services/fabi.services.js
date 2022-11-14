import { db } from './firebase';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

export const addCountAttempt = async () => {
  try {
    await addDoc(collection(db, 'fabi'), {
      exactHour: new Date().toString(),
    });
  } catch (error) {
    console.log({ error });
  }
};
