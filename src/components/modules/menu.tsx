import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircleImage from "../atoms/CircleImage";
// import ContainerImage from "./components/ContainerImage";
import Image from "../atoms/Image";
import ContainerHocs from "../HOCs/ContainerHocs";

const ImageHocs = ContainerHocs(Image, 0.8);
const CircleImageHocs = ContainerHocs(CircleImage, 0.3);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="padding-container">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Image 1" {...a11yProps(0)} />
          <Tab label="Image 2" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ImageHocs src="https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CircleImageHocs src="http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-5_044127233.jpg" />
      </TabPanel>
    </div>
  );
}
