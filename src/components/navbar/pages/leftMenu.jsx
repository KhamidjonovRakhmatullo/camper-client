import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Button from "@mui/joy/Button";
import menu1 from "../../assets/menu.svg";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/Home";
import ListItemContent from "@mui/joy/ListItemContent";
import ModalClose from "@mui/joy/ModalClose";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import LandscapeIcon from "@mui/icons-material/Landscape";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from '@mui/icons-material/Person';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import SettingsIcon from '@mui/icons-material/Settings';

export default function LeftMenuButton() {
  const [state, setState] = React.useState({
    sm: false,
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (size, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
      <div style={{}}>
        <List sx={{ padding: "10px 0px 10px 16px", margin: "" }}>
          <ListItem disablePadding>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                // border: "1px solid blue" ,
                gap: 0.5,
                ml: "auto",
                mt: 1,
                mr: 2,
              }}
            >
              <Typography
                fontSize="25px"
                fontWeight="500"
                sx={{ color: "#006DAB" }}
              >
                Pages
              </Typography>
              <ModalClose id="close-icon" sx={{ position: "initial" }} />
            </Box>
          </ListItem>
        </List>
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "#006DAB" }}>
            <ListItem disablePadding sx={{ margin: "10px 0px" }}>
              <ListItemButton sx={{ gap: "10px" }}>
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography>Home</Typography>
                </ListItemContent>
                <NavigateNextIcon />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="motor" style={{ textDecoration: "none", color: "#006DAB" }}>
            <ListItem disablePadding sx={{ margin: "10px 0px" }}>
              <ListItemButton sx={{ gap: "10px" }}>
                <DirectionsCarIcon />
                <ListItemContent>
                  <Typography>Motor</Typography>
                </ListItemContent>
                <NavigateNextIcon />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="caravan"
            style={{ textDecoration: "none", color: "#006DAB" }}
          >
            <ListItem disablePadding sx={{ margin: "10px 0px" }}>
              <ListItemButton sx={{ gap: "10px" }}>
                <AirportShuttleIcon />
                <ListItemContent>
                  <Typography>Caravan</Typography>
                </ListItemContent>
                <NavigateNextIcon />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="tuning"
            style={{ textDecoration: "none", color: "#006DAB" }}
          >
            <ListItem disablePadding sx={{ margin: "10px 0px" }}>
              <ListItemButton sx={{ gap: "10px" }}>
                <ElectricCarIcon />
                <ListItemContent>
                  <Typography>Tuning</Typography>
                </ListItemContent>
                <NavigateNextIcon />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="usedCar"
            style={{ textDecoration: "none", color: "#006DAB" }}
          >
            <ListItem disablePadding sx={{ margin: "10px 0px" }}>
              <ListItemButton sx={{ gap: "10px" }}>
                <CarRepairIcon />
                <ListItemContent>
                  <Typography>Used Car</Typography>
                </ListItemContent>
                <NavigateNextIcon />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="campingPlace"
            style={{ textDecoration: "none", color: "#006DAB" }}
          >
            <ListItem disablePadding sx={{ margin: "10px 0px" }}>
              <ListItemButton sx={{ gap: "10px" }}>
                <LandscapeIcon />
                <ListItemContent>
                  <Typography>Camping Place</Typography>
                </ListItemContent>
                <NavigateNextIcon />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <Divider />

        <Link
          to="createAccount"
          style={{ textDecoration: "none", color: "#006DAB" }}
        >
          <ListItem sx={{ margin: "10px 0px" }}>
            <ListItemButton sx={{ gap: "10px" }}>
              <ListItemContent>
                <Typography>Profile</Typography>
              </ListItemContent>
              <PersonIcon />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="orders"
          style={{ textDecoration: "none", color: "#006DAB" }}
        >
          <ListItem sx={{ margin: "10px 0px" }}>
            <ListItemButton sx={{ gap: "10px" }}>
              <ListItemContent>
                <Typography>My Orders</Typography>
              </ListItemContent>
              <ChecklistRtlIcon />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="setting"
          style={{ textDecoration: "none", color: "#006DAB" }}
        >
          <ListItem sx={{ margin: "10px 0px" }}>
            <ListItemButton sx={{ gap: "10px" }}>
              <ListItemContent>
                <Typography>Setting</Typography>
              </ListItemContent>
              <SettingsIcon />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="campingPlace"
          style={{ textDecoration: "none", color: "#006DAB" }}
        >
          <ListItem sx={{ margin: "10px 0px" }}>
            <ListItemButton sx={{ gap: "10px" }}>
              <ListItemContent>
                <Typography>Log out</Typography>
              </ListItemContent>
              <LogoutIcon />
            </ListItemButton>
          </ListItem>
        </Link>
      </div>
    </Box>
  );

  return (
    <React.Fragment>
      <ButtonGroup variant="outlined">
        {["left"].map((anchor) => (
          <Button
            key={anchor}
            onClick={toggleDrawer(anchor, true)}
            sx={{ border: "none", padding: "0px" }}
          >
            <img src={menu1} alt="menu icon" />
          </Button>
        ))}
      </ButtonGroup>
      {["left"].map((anchor) => (
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
