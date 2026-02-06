export interface ThemeData {
  text: string;
  value: string;
  ImageSrc: string;
}

export interface ThemeContextType {
  setTheme: (theme: string) => void;
  getThemeData: () => ThemeData[];
  getTheme: () => string;
}

export type ThemeSwatchAccent = 'light' | 'dark';
