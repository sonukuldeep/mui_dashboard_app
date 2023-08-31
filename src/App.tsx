import { Box, CssBaseline, SxProps, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import theme from "./config/theme";
import { AppHeader, SideNav } from "./components";
import { Analytics, Content, Customization, Dashboard } from "./pages";

function App() {
  const [isCollapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppHeader
        setCollapsed={setCollapsed}
        setToggled={setToggled}
        broken={broken}
      />
      <Box sx={styles.container}>
        <SideNav
          isCollapsed={isCollapsed}
          setBroken={setBroken}
          setToggled={setToggled}
          toggled={toggled}
        />
        <Box component={"main"} sx={styles.mainSection}>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/content" element={<Content />}></Route>
            <Route path="/analytics" element={<Analytics />}></Route>
            <Route path="/customization" element={<Customization />}></Route>
          </Routes>
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
