import { Box, SxProps, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPanel from "../components/TabPanel";
import { ColorText } from "../components";
import {
  MovieFilterRounded,
  SlowMotionVideoRounded,
} from "@mui/icons-material";

function Customization() {
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, value: number) => {
    setValue(value);
  };
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Customization
      </Typography>
      <Box sx={styles.tabHeader}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Layout" id="tab-0"></Tab>
          <Tab label="Branding" id="tab-1"></Tab>
          <Tab label="Basic info" id="tab-2"></Tab>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h6">Video spotlight</Typography>
        <ColorText color="customNeutral.normal">
          <Typography>
            Add a video to the top of your channel homepage
          </Typography>
        </ColorText>
        <Box sx={styles.rowContainer}>
          <SlowMotionVideoRounded sx={styles.rowIcon} />
          <Box sx={styles.secondColumn}>
            <Typography variant="h6">
              Channel trailer for people who haven't subscribed
            </Typography>
            <ColorText color="customNeutral.normal">
              <Typography variant="h7">
                Share a preview of your channel shown with people who haven't
                subscribed yet
              </Typography>
            </ColorText>
          </Box>
          <Typography variant="link" sx={styles.rowLink} color="initial">
            ADD
          </Typography>
        </Box>
        <Box sx={styles.rowContainer}>
          <MovieFilterRounded />
          <Box sx={styles.secondColumn}>
            <Typography variant="h6" color="initial">
              Featured video for returning subscribers
            </Typography>
            <ColorText color="customNeutral.normal">
              <Typography variant="h7" color="initial">
                Highlight a video for your subscribers to watch. Thos video
                won't be shown again at the top of your page for subscribers who
                have watched it.
              </Typography>
            </ColorText>
          </Box>
          <Typography sx={styles.rowLink} variant="link">
            ADD
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Nothing yet!</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Nothing yet!</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Nothing yet!</Typography>
      </TabPanel>
    </Box>
  );
}

export default Customization;
interface IStyles {
  [key: string]: SxProps;
}
const styles: IStyles = {
  pageTitle: {
    mb: 2,
  },
  tabHeader: {
    borderBottom: 1,
    borderColor: "divider",
  },
  rowContainer: {
    width: "100%",
    maxWidth: 900,
    border: 1,
    borderColor: "neutral.medium",
    borderRadius: 1,
    mt: 2,
    p: 2,
    display: "flex",
    alignItems: "flex-start",
  },
  rowIcon: {
    fontSize: 40,
    color: "neutral.normal",
  },
  secondColumn: {
    ml: 1,
  },
  rowLink: {
    ml: "auto",
  },
};
