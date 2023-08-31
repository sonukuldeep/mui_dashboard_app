import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  SxProps,
  Typography,
} from "@mui/material";
import { ColorText, LatestVideoCard } from "../components";

function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Channel Dashboard
      </Typography>
      <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={styles.item}></LatestVideoCard>
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest post</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar
                sx={styles.avatar}
                alt="user"
                src="https://api.dicebear.com/7.x/pixel-art/svg"
              ></Avatar>
              <Typography sx={styles.postMeta}>Learn React with me</Typography>
              <Typography sx={styles.postMeta}>Jan 1,2024</Typography>
            </Box>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores pariatur, atque maxime earum ratione nobis aperiam eos
              hic excepturi repudiandae!
            </Typography>
            <Divider sx={styles.divider}></Divider>
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">Comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">6</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO COMMUNITY TAB
            </Typography>
          </CardContent>
        </Card>
        <Card sx={styles.items}>
          <CardContent>
            <Typography variant="cardTitle">Channel analytics</Typography>
            <Typography variant="h7">Current Subscription</Typography>
            <Typography variant="h4">100</Typography>
            <Typography variant="h7">
              <ColorText color="customGreen.main">+70</ColorText>{" "}
              <ColorText color="customNeutral.normal">
                in the last 28 days
              </ColorText>
            </Typography>
            <Divider sx={styles.divider}></Divider>
            <Typography variant="h6">Summary</Typography>
            <Typography variant="h8">
              <ColorText color="customNeutral.normal">Last 28 days</ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7">225</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Watch time (hours)</Typography>
              <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">$450.00</Typography>
            </Box>
            <Divider sx={styles.divider}></Divider>
            <Typography variant="h6">Top videos</Typography>
            <Typography variant="h8">
              <ColorText color="customNeutral.normal">Last 48 hours</ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Why you should not become a software dev in 2023
              </Typography>
              <Typography variant="h7">450</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                CSS GRID Tutorial: How to use Grids to make awesome user
                interface.
              </Typography>
              <Typography variant="h7">287</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Call APIS in React Native: Practical Guide
              </Typography>
              <Typography variant="h7">130</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashboard;

interface IStyles {
  [key: string]: SxProps;
}

const styles: IStyles = {
  pageTitle: {
    mb: 2,
  },
  columnsContainer: {
    columns: "280px 3",
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },
  divider: {
    my: 2,
  },
  videoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },
  cardAction: {
    mt: 2,
  },
  ideaContent: {
    display: "flex",
  },
  ideaImage: {
    width: 80,
    alignSelf: "center",
    ml: 5,
  },
  ideaQuestion: {
    fontSize: "0.9rem",
    fontWeight: 500,
    my: 2,
  },
  avatar: {
    width: "30px",
    height: "auto",
    marginRight: 1,
  },
  postStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoRows: "25px",
  },
  postAuthorSection: {
    display: "flex",
    alignItems: "center",
    my: 3,
  },
  postMeta: {
    mr: 1,
    fontSize: "0.8rem",
    color: "neutral.normal",
  },
  videoThumbnail: {
    width: 80,
    ml: "auto",
  },
  commentRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2,
  },
  commentDetailsSection: {
    display: "flex",
    alignItems: "center",
  },
  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2,
  },
  insiderImage: {
    width: "100%",
    mt: 1,
  },
};
