import { doc } from 'firebase/firestore';
import { db } from './firebase';

export const userRef = doc(db, 'account-1', 'details');
