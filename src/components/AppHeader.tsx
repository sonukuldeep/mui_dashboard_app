import {
  AppBar,
  Badge,
  Box,
  IconButton,
  SxProps,
  Toolbar,
} from "@mui/material";

import {
  Logout,
  MenuTwoTone,
  Notifications,
  Settings,
} from "@mui/icons-material";

export default function AppHeader({
  setToggled,
}: {
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton color="secondary" onClick={() => setToggled((pre) => !pre)}>
          <MenuTwoTone />
        </IconButton>
        <Box
          component={"img"}
          sx={styles.appLogo}
          src="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAD//wAAKysrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERERERERERERERERERERERERERERERERERABEREQAREREAERERABEREQAREREAERERABEREQAREREAERERABEREQARABEAERERABAAAQAREREAABEAABEREQABERAAERERABEREQAREREBEREREBEREREREREREREREREREREREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        ></Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton title="Notification" color="secondary">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton title="settings" color="secondary">
          <Settings />
        </IconButton>
        <IconButton title="sign out" color="secondary">
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

interface IStyles {
  [key: string]: SxProps;
}

const styles: IStyles = {
  appBar: {
    bgcolor: "customNeutral.main",
  },
  appLogo: {
    borderRadius: 2,
    width: 35,
    marginLeft: 2,
    cursor: "pointer",
  },
};
