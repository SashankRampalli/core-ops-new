import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./contexts/theme";
import { ThemeSelector } from "./components";

function App() {
  const { setTheme, getTheme } = useTheme();

  useEffect(() => { 
    setTheme(getTheme()); 
  }, [setTheme, getTheme]);

  return (
    <div>
      <h2>App</h2>
      <ThemeSelector />
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
