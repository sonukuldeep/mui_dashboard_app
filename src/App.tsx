import { Box, CssBaseline, SxProps, ThemeProvider } from "@mui/material";
import { AppHeader, SideNav } from "./components";
import { useState } from "react";
import theme from "./config/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
function App() {
  const [toggled, setToggled] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader setToggled={setToggled} />
      <Box sx={styles.container}>
        <SideNav setToggled={setToggled} toggled={toggled} />
        <Box component={"main"} sx={styles.mainSection}>
          <h1>Hello world</h1>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

interface IStyles {
  [key: string]: SxProps;
}

const styles: IStyles = {
  container: {
    display: "flex",
    bgcolor: "customNeutral.light",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 1,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};
