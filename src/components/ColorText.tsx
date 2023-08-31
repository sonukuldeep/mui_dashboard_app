import { Box } from "@mui/material";

function ColorText({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ color }} component="span">
      {children}
    </Box>
  );
}

export default ColorText;
