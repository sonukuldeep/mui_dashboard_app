import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  SxProps,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Circle } from "@mui/icons-material";
import ColorText from "../../components/ColorText";
import { realtimeChartData, realtimeChartOptions } from "./ChartConfigs";

function RealTimeCard() {
  return (
    <Card sx={styles.realtimeStatsCard}>
      <CardContent>
        <Box>
          <Typography variant="cardTitle">Realtime</Typography>
          <Box sx={styles.updateLiveRow}>
            <Circle sx={styles.dotIcon} />
            <ColorText color="neutral.normal">
              <Typography variant="h7">Updating Live</Typography>
            </ColorText>
          </Box>
          <Divider sx={styles.divider} />
          <Typography sx={styles.valueText}>4,144</Typography>
          <ColorText color="neutral.normal">
            <Typography variant="h7">Subscribers</Typography>
          </ColorText>
          <Divider sx={styles.divider} />
          <Typography sx={styles.valueText}>1,786</Typography>
          <ColorText color="neutral.normal">
            <Typography variant="h7">Views Last 48 hours</Typography>
          </ColorText>
          <Box sx={styles.realtimeChart}>
            <Bar options={realtimeChartOptions} data={realtimeChartData} />
          </Box>
          <Typography variant="link">See more</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RealTimeCard;

interface IStyles {
  [key: string]: SxProps;
}

const styles: IStyles = {
  realtimeStatsCard: {
    mb: 2,
  },
  updateLiveRow: {
    display: "flex",
    alignItems: "center",
  },
  dotIcon: {
    width: 10,
    color: "primary.normal",
    mr: 1,
  },
  divider: {
    my: 2,
  },
  valueText: {
    fontSize: "1.3rem",
    fontWeight: "400",
  },
  realtimeChart: {
    height: 70,
    mt: 4,
  },
};
