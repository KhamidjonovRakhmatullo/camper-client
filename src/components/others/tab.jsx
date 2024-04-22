import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import ItemReviewsComponent from './itemReviews';

export default function TabsComponent() {
  const [placement, setPlacement] = React.useState('top');
  return (
    <Tabs
      variant="plain"
      aria-label="Placement indicator tabs"
      value={placement}
      onChange={(event, newValue) => setPlacement(newValue)}
      sx={{border: "0px solid red", width: "100%"}}
    >
      <TabList underlinePlacement={placement} sx={{border:"0px solid blue",backgroundColor: "rgba(0, 109, 171, 0.20)", height: "60px", paddingLeft: "70px",}}>
        <Tab disableIndicator value="top" sx={{width: "170px"}}>
        Item reviews
        </Tab>
        <Tab disableIndicator value="right" sx={{width: "170px"}}>
        Q&A
        </Tab>
        <Tab disableIndicator value="bottom" sx={{width: "170px"}}>
        FAQ
        </Tab>
        <Tab disableIndicator value="left" sx={{width: "170px"}}>
        Contact
        </Tab>
      </TabList>
      <TabPanel value="top">
       <ItemReviewsComponent/>
      </TabPanel>
      <TabPanel value="bottom">
        underlinePlacement <b>Bottom</b>
      </TabPanel>
      <TabPanel value="left">
        underlinePlacement <b>Left</b>
      </TabPanel>
      <TabPanel value="right">
        underlinePlacement <b>Right</b>
      </TabPanel>
    </Tabs>
  );
}