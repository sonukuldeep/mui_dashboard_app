import React, { useState, forwardRef } from "react";
import { Line } from "react-chartjs-2";
import { ArrowDropDownCircleSharp, CheckCircle } from "@mui/icons-material";
import { Box, SxProps, Tab, Tabs } from "@mui/material";
import { getMainChartData, mainChartOptions } from "./ChartConfigs";
import TabPanel from "../../components/TabPanel";
import AnalyticsTabHead from "./AnalyticsTabHead";

const ViewsTabHead = forwardRef<HTMLAnchorElement>((props, ref) => (
  <AnalyticsTabHead
    {...props}
    title="Views"
    ref={ref}
    icon={<ArrowDropDownCircleSharp />}
    value="21.4K"
    subtitle={"700 less than usual"}
  />
));

const WatchTimeTabHead = forwardRef<HTMLAnchorElement>((props, ref) => (
  <AnalyticsTabHead
    {...props}
    title="Watch Time"
    ref={ref}
    icon={
      <ArrowDropDownCircleSharp
        color="secondary"
        sx={{ transform: "rotate(180deg)" }}
      />
    }
    value="400"
    subtitle={"27 more than usual"}
  />
));

const SubscribersTabHead = forwardRef<HTMLAnchorElement>((props, ref) => (
  <AnalyticsTabHead
    {...props}
    ref={ref}
    title="Subscribers"
    icon={<CheckCircle color="primary" />}
    value="+140"
    subtitle={"about the same as usual"}
  />
));

const RevenueTabHead = forwardRef<HTMLAnchorElement>((props, ref) => (
  <AnalyticsTabHead
    {...props}
    ref={ref}
    title="Revenue"
    icon={
      <ArrowDropDownCircleSharp
        color="primary"
        sx={{ transform: "rotate(180deg)" }}
      />
    }
    value="$240.02"
    subtitle={"700 more than usual"}
  />
));

function OverviewCharts() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.container}>
      <Tabs value={value} onChange={handleChange}>
        <Tab {...ViewsTabHead} id="tab-0" />
        <Tab {...WatchTimeTabHead} id="tab-1" />
        <Tab {...SubscribersTabHead} id="tab-2" />
        <Tab {...RevenueTabHead} id="tab-3" />
      </Tabs>

      <TabPanel value={value} index={0} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
    </Box>
  );
}

export default OverviewCharts;

interface IStyles {
  [key: string]: SxProps;
}
const styles: IStyles = {
  mainChart: {
    height: 250,
    border: 1,
    borderColor: "neutral.medium",
    pt: 4,
    borderTop: "none",
    borderRadius: 1,
  },
  container: {
    mt: 4,
    width: "100%",
  },
};
