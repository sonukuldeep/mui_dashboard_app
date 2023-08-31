import { createTheme } from "@mui/material";
import { green, grey, indigo } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    customNeutral: {
      light: string;
      medium: string;
      normal: string;
      main: string;
    };
    customGreen: Palette["primary"];
  }

  interface PaletteOptions {
    customNeutral?: {
      light: string;
      medium: string;
      normal: string;
      main: string;
    };
    customGreen?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    link: React.CSSProperties;
    cardTitle: React.CSSProperties;
    h6: React.CSSProperties;
    h7: React.CSSProperties;
    h8: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    link?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    h6?: React.CSSProperties;
    h7?: React.CSSProperties;
    h8?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
    cardTitle: true;
    h6: true;
    h7: true;
    h8: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
      light: indigo["A700"],
    },
    secondary: {
      main: indigo[50],
    },
    customNeutral: {
      light: grey[50],
      medium: grey[200],
      normal: grey[700],
      main: grey[900],
    },
    customGreen: {
      main: green[800],
    },
  },
});

theme = createTheme(theme, {
  typography: {
    link: {
      fontSize: "0.8rem",
      fontWeight: 500,
      color: theme.palette.primary.main,
      display: "block",
      cursor: "pointer",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
    },
    cardTitle: {
      fontSize: "1.2rem",
      display: "block",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.8rem",
    },
    h8: {
      fontSize: "0.7rem",
    },
  },
});

export default theme;
