export interface UserDataType {
  details: {
    id: number | string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    currentTag?: string;
    img?: string;
  };
  settings: {
    darkMode: boolean;
    colorTheme: string;
    windDownTime?: number;
  };
}
