import { Box } from "@mui/material";

function TabPanel({
  children,
  value,
  index,
  mt = 4,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
  mt?: number;
}) {
  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && <Box sx={{ mt }}>{children}</Box>}
    </div>
  );
}

export default TabPanel;
