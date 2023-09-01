import { Box, Button, Typography } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
type Props = {
  title: string;
  ref: React.Ref<HTMLAnchorElement>;
  value: string;
  icon: React.ReactNode;
  subtitle: string;
};
const AnalyticsTabHead = forwardRef(
  (
    { title, value, icon, subtitle }: Props,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => (
    <Button ref={ref} sx={styles.container} href="">
      <Typography sx={styles.tabTitle}>{title}</Typography>
      <Box sx={styles.tabValueRow}>
        <Typography sx={styles.tabValue}>{value}</Typography>
        {icon}
      </Box>
      <Typography sx={styles.tabSubTitle}>{subtitle}</Typography>
    </Button>
  )
);

export default AnalyticsTabHead;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "neutral.normal",
    textTransform: "capitalize",
    // px: 7,
    py: 2,
    border: 1,
    borderColor: "neutral.medium",
    flexGrow: 1,
  },
  tabTitle: {
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  tabValueRow: {
    display: "flex",
    alignItems: "center",
  },
  tabValue: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    color: "neutral.main",
    mr: 1,
  },
  tabSubTitle: {
    fontSize: "0.6rem",
    fontStyle: "italic",
    textTransform: "lowercase",
    display: { xs: "none", md: "inline" },
  },
};
