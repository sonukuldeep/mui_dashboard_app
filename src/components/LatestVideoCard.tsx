import {
  Box,
  Card,
  CardContent,
  CardProps,
  SxProps,
  Typography,
} from "@mui/material";

function LatestVideoCard(props: CardProps) {
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant="cardTitle">Latest Video Performance</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoThumbnail}
            component={"img"}
            src={"https://img.youtube.com/vi/cd3P3yXyx30/sddefault.jpg"}
          />
          <Typography sx={styles.latestVideoTitle}>
            Learn ReactJs for beginners
          </Typography>
        </Box>
        <Typography variant="h7" sx={styles.latestVideoTimeLabel}>
          First 6 hours:
        </Typography>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography>Views</Typography>
          <Typography>225</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Watch Time</Typography>
          <Typography variant="h7">38</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Likes</Typography>
          <Typography variant="h7">23</Typography>
        </Box>

        <Typography sx={styles.cardAction} variant="link">
          GO TO VIDEO ANALYTICS
        </Typography>
        <Typography sx={styles.cardAction} variant="link">
          SEE COMMENTS(12)
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LatestVideoCard;

interface IStyles {
  [key: string]: SxProps;
}

const styles: IStyles = {
  latestVideoContainer: {
    width: "100%",
    position: "relative",
  },
  latestVideoThumbnail: {
    width: "100%",
    mt: 1,
    filter: "brightness(20%)",
    display: "block",
  },
  latestVideoTitle: {
    position: "absolute",
    bottom: 0,
    color: "neutral.light",
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem",
    mb: 2,
  },
  latestVideoTimeLabel: {
    color: "neutral.normal",
    mt: 2,
  },
  latestVideoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
  },
  cardAction: {
    mt: 2,
  },
};
