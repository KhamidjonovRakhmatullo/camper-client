import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import menu1 from '../../assets/menu.svg'


export default function RightMenuButton() {
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
      <div style={{padding: "40px 20px"}}>
    rrrr
      </div>
    </Box>
  );

  return (
    <React.Fragment>
     <ButtonGroup variant="outlined">
        {['right'].map((anchor) => (
          <Button key={anchor} onClick={toggleDrawer(anchor, true)} sx={{border: "none", padding: "0px"}}>
            <img src={menu1} alt="menu icon" />
          </Button>
        ))}
      </ButtonGroup>
      {['right'].map((anchor) => (
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