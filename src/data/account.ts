import placeholderImg from '../assets/placeholder-img.jpg';
import { UserDataType } from '../types/UserDataType';

//placeholder account for testing
export const account: UserDataType = {
  details: {
    id: '1',
    email: 'email@placeholder',
    password: 'password123',
    firstName: 'Oliver',
    lastName: 'the Dog',
    currentTag: '#1 Dog',
    img: placeholderImg,
  },
  settings: {
    darkMode: false,
    colorTheme: 'blue',
  },
};
