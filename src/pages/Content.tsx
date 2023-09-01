import { AttachMoneyOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Box, SxProps, Tab, Tabs, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import TabPanel from "../components/TabPanel";
import { SyntheticEvent, useState } from "react";

const columns = [
  {
    field: "thumbnail",
    headerName: "Video",
    minWidth: 500,
    flex: 4,
    renderCell: (params: Params) => (
      <Box sx={styles.videoColumn}>
        <Box
          component="img"
          sx={styles.videoThumbnail}
          src={params.row.thumbnail}
        />
        <Box sx={styles.videoDetails}>
          <Typography sx={styles.videoTitle}>
            Must Know JavaScript Interview Questions | Part 1
          </Typography>
          <Typography sx={styles.videoDescription}>
            In this video you will learn how to solve JavaScript interview
            questions.
          </Typography>
        </Box>
      </Box>
    ),
  },

  {
    field: "visibility",
    headerName: "Visibility",
    minWidth: 170,
    flex: 2,
    renderCell: (params: Params) => (
      <Box sx={styles.iconColumn}>
        <VisibilityOutlined />
        <Typography sx={styles.iconColumnText}>
          {params.row.visibility}
        </Typography>
      </Box>
    ),
  },
  {
    field: "monetization",
    headerName: "Monetization",
    minWidth: 170,
    flex: 2,
    renderCell: (params: Params) => (
      <Box sx={styles.iconColumn}>
        <AttachMoneyOutlined />
        <Typography sx={styles.iconColumnText}>
          {params.row.monetization}
        </Typography>
      </Box>
    ),
  },
  {
    field: "views",
    headerName: "Views",
    minWidth: 170,
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    minWidth: 170,
    flex: 1,
  },
];

const videos = [
  {
    id: 1,
    thumbnail:
      "https://wsrv.nl/?url=fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/307803734/original/59c99f2ce435813ef71963839eeba2fbb33a70bd/create-the-most-eyecatching-thumbnail-for-your-youtube-vid.png&w=300&h=300",
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 12,
  },
  {
    id: 2,
    thumbnail:
      "https://wsrv.nl/?url=fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131484564/original/27076652cc604c0ce0ce33a2e461672d5d00cde8/make-you-five-minecraft-thumbnails.png&w=300&h=300",
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 12,
  },
];

const posts = [
  {
    id: 1,
    thumbnail:
      "https://wsrv.nl/?url=fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131484564/original/27076652cc604c0ce0ce33a2e461672d5d00cde8/make-you-five-minecraft-thumbnails.png&w=300&h=300",
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 12,
  },
  {
    id: 2,
    thumbnail:
      "https://wsrv.nl/?url=fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131484564/original/27076652cc604c0ce0ce33a2e461672d5d00cde8/make-you-five-minecraft-thumbnails.png&w=300&h=300",
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 12,
  },
  {
    id: 3,
    thumbnail:
      "https://wsrv.nl/?url=fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/307803734/original/59c99f2ce435813ef71963839eeba2fbb33a70bd/create-the-most-eyecatching-thumbnail-for-your-youtube-vid.png&w=300&h=300",
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 12,
  },
];

const playlists = [
  {
    id: 1,
    thumbnail:
      "https://wsrv.nl/?url=fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/307803734/original/59c99f2ce435813ef71963839eeba2fbb33a70bd/create-the-most-eyecatching-thumbnail-for-your-youtube-vid.png&w=300&h=300",
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 12,
  },
];

const lives: Rows[] = [];

function Content() {
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Content
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic-tab-example"
        >
          <Tab label="Video" id="tab-0"></Tab>
          <Tab label="Live" id="tab-1"></Tab>
          <Tab label="Posts" id="tab-2"></Tab>
          <Tab label="Playlists" id="tab-3"></Tab>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DataGrid
          rows={videos}
          columns={columns}
          checkboxSelection
          autoHeight
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataGrid rows={lives} columns={columns} checkboxSelection autoHeight />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataGrid rows={posts} columns={columns} checkboxSelection autoHeight />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DataGrid
          rows={playlists}
          columns={columns}
          checkboxSelection
          autoHeight
        />
      </TabPanel>
    </Box>
  );
}

export default Content;

interface IStyles {
  [key: string]: SxProps;
}
const styles: IStyles = {
  pageTitle: {
    mb: 2,
  },
  videoThumbnail: {
    width: 120,
  },
  videoTitle: {
    fontSize: "0.8rem",
    width: 490,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  videoDescription: {
    fontSize: "0.7rem",
    color: "neutral.normal",
    width: 490,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  videoDetails: {
    ml: 2,
  },
  videoColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconColumn: {
    display: "flex",
    alignItems: "center",
  },
  iconColumnText: {
    ml: 1,
    fontSize: "0.9rem",
  },
};
