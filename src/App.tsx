import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import "./App.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <h1>Hello, world from MUI</h1>
      </main>
    </ThemeProvider>
  );
}

export default App;
