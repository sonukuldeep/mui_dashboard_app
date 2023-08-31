import { Avatar, Box, SxProps, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  AnalyticsOutlined,
  DashboardOutlined,
  SourceOutlined,
  StyleOutlined,
} from "@mui/icons-material";

export default function SideNav({
  isCollapsed,
  toggled,
  setBroken,
  setToggled,
}: {
  isCollapsed: boolean;
  toggled: boolean;
  setBroken: React.Dispatch<React.SetStateAction<boolean>>;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const theme = useTheme();

  return (
    <Sidebar
      style={{ height: "100%", top: "auto" }}
      breakPoint="md"
      backgroundColor={theme.palette.customNeutral.light}
      collapsed={isCollapsed}
      toggled={toggled}
      onBreakPoint={setBroken}
      onBackdropClick={() => setToggled(false)}
    >
      <Box sx={styles.container}>
        <Avatar
          sx={styles.avatar}
          alt="avatar"
          src="https://api.dicebear.com/7.x/pixel-art/svg"
        />
        {!isCollapsed ? (
          <>
            <Typography variant="body2" sx={styles.title}>
              YouTube
            </Typography>
            <Typography variant="overline">React with Me</Typography>
          </>
        ) : null}
      </Box>
      <Menu>
        <MenuItem active icon={<DashboardOutlined />}>
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem icon={<SourceOutlined />}>
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem icon={<AnalyticsOutlined />}>
          <Typography variant="body2">Analysis</Typography>
        </MenuItem>
        <MenuItem icon={<StyleOutlined />}>
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

interface IStyles {
  [key: string]: SxProps;
}

const styles: IStyles = {
  avatar: {
    width: "40%",
    height: "auto",
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  title: {
    mt: 1,
  },
};
