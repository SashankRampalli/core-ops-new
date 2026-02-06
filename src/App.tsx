import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./contexts/theme";
import { ThemeSelector } from "./components/ThemeSelector";
import { Typography } from "./components/Typography";

function App() {
  const { setTheme, getTheme } = useTheme();

  useEffect(() => {
    setTheme(getTheme());
  }, [setTheme, getTheme]);

  return (
    <div>
      <Typography variant="h5">App</Typography>
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
