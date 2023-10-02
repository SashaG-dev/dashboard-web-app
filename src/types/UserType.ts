export type UserType = {
  id: string | null;
  email: string | null;
  password: string | null;
  displayName: string | null;
  photoURL: string | null;
  tag: {
    hasTag: boolean;
    currentTag: string | null;
  };
  color: 'red' | 'yellow' | 'green' | 'blue' | 'purple';
  darkMode: boolean;
};
