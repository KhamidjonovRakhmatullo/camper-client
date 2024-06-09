import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import SideBarComponent from '../sideBar';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function SortButton() {
  const [state, setState] = React.useState({
    md: false,
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
      onClick={toggleDrawer(size, true)}
      onKeyDown={toggleDrawer(size, false)}
    >
      <div style={{padding: "40px 20px"}}>
      <SideBarComponent/>
      </div>
    </Box>
  );

  return (
    <React.Fragment>
      <ButtonGroup variant="outlined">
        {['md'].map((size) => (
          <Button key={size} onClick={toggleDrawer(size, true)} sx={{border: "",padding: "0px 3px"}}>
           <MenuOpenIcon style={{fontSize: "25px", padding: "0px", margin: "0px"}}/>
          </Button>
        ))}
      </ButtonGroup>
      {['md',].map((size) => (
        <Drawer
          key={size}
          size={size}
          open={state[size]}
          onClose={toggleDrawer(size, false)}
        >
          {list(size)}
        </Drawer>
      ))}
    </React.Fragment>
  );
}