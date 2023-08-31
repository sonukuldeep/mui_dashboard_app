import { Avatar, Box, SxProps, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();
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
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.customNeutral.medium
                : undefined,
            };
          },
        }}
      >
        <MenuItem
          component={<NavLink to="/" />}
          active={location.pathname === "/"}
          icon={<DashboardOutlined />}
        >
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem
          component={<NavLink to="/content" />}
          active={location.pathname === "/content"}
          icon={<SourceOutlined />}
        >
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem
          component={<NavLink to="/analytics" />}
          active={location.pathname === "/analytics"}
          icon={<AnalyticsOutlined />}
        >
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem
          component={<NavLink to="/customization" />}
          active={location.pathname === "/customization"}
          icon={<StyleOutlined />}
        >
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
