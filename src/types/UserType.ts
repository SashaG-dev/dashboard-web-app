export type UserType = {
  id: string | null;
  email: string | null;
  password: string | null;
  displayName: string | null;
  name: string | null;
  photoURL: string | null;
  color: 'red' | 'yellow' | 'green' | 'blue' | 'purple';
  darkMode: boolean;
};
