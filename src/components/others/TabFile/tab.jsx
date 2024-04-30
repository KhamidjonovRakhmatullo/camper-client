import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import ItemReviewsComponent from './itemReviews';
import QnAComponent from './QnA';
import FAQComponent from './FAQ';
import ContactComponent from './contact';

export default function TabsComponent() {
  const [placement, setPlacement] = React.useState('review');
  return (
    <Tabs
      variant="plain"
      aria-label="Placement indicator tabs"
      value={placement}
      onChange={(event, newValue) => setPlacement(newValue)}
      sx={{border: "px solid red", width: "100%", padding: "0px 0px"}}
    >
      <TabList underlinePlacement={placement} sx={{border:"px solid blue",backgroundColor: "rgba(0, 109, 171, 0.20)", height: "60px", padding: "0px 30px"}}>
        <Tab disableIndicator value="review" sx={{width: "170px"}}>
        Item reviews
        </Tab>
        <Tab disableIndicator value="QnA" sx={{width: "170px"}}>
        Q&A
        </Tab>
        <Tab disableIndicator value="FAQ" sx={{width: "170px"}}>
        FAQ
        </Tab>
        <Tab disableIndicator value="contact" sx={{width: "170px"}}>
        Contact
        </Tab>
      </TabList>
      <TabPanel value="review">
       <ItemReviewsComponent/>
      </TabPanel>
      <TabPanel value="QnA">
       <QnAComponent/>
      </TabPanel>
      <TabPanel value="FAQ">
       <FAQComponent/>
      </TabPanel>
      <TabPanel value="contact">
      <ContactComponent/>
      </TabPanel>
    </Tabs>
  );
}