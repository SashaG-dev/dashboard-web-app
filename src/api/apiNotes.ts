import { doc } from 'firebase/firestore';
import { db } from './firebase';

export const notesRef = doc(db, 'account-1', 'notes');
