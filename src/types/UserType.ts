export type UserType = {
  id: string | null;
  username: string | null;
  email: string | null;
  password: string | null;
  image: string | undefined;
  displayedName: string | null;
  tag: {
    hasTag: boolean;
    currentTag: string | null;
  };
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink';
  darkMode: boolean;
  isLoggedIn: boolean;
};
