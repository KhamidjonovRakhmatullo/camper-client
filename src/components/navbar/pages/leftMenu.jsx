import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import menu1 from '../../assets/menu.svg'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import ListItemContent from "@mui/joy/ListItemContent";

import { Link } from 'react-router-dom';


export default function LeftMenuButton() {
  const [state, setState] = React.useState({
    md: false,
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (size, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [size]: open });
  };

  const list = (size) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(size, false)}
      onKeyDown={toggleDrawer(size, false)}
    >
      <div style={{padding: "20px 10px"}}>
      <List>
      <ListItem>
            <Link to="/">
              <ListItemButton>
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"aaa"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"aaa"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"aaa"} />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List>
      </div>
    </Box>
  );

  return (
    <React.Fragment>
     <ButtonGroup variant="outlined">
        {['left'].map((anchor) => (
          <Button key={anchor} onClick={toggleDrawer(anchor, true)} sx={{border: "none", padding: "0px"}}>
            <img src={menu1} alt="menu icon" />
          </Button>
        ))}
      </ButtonGroup>
      {['left'].map((anchor) => (
        <Drawer
          key={anchor}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      ))}
      
    </React.Fragment>
  );
}