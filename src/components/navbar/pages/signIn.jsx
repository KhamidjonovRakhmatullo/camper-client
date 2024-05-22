import * as React from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import user1 from "../../assets/user.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  SignInCheckBox,
  SignInInput,
  SignInTitle,
} from "../../../styles/NavStyled";
import Checkbox from "@mui/joy/Checkbox";
import { CarBoxButton } from "../../../styles/motorStyled";
import Button from "@mui/joy/Button";
import { DividerWrapper } from "../../../styles/carInfoStyle";
import logos1 from '../../assets/modalLogos.png'
import { Link } from "react-router-dom";

export default function SignInComponent() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div style={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src={user1}
          alt="user"
          color="neutral"
          onClick={() => setOpen(true)}
        />
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0px 30px" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: 500,
            borderRadius: "20px",
            padding: " 37px 33px 50px 33px",
            boxShadow: "lg",
          }}
        >
          <SignInTitle>Sign in</SignInTitle>
          <>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "20px",
              }}
            >
              <SignInInput>
                <p>Email</p>
                <TextField
                  fullWidth
                  label="Your email"
                  id="yourEmail"
                  sx={{ backgroundColor: "rgba(92, 89, 89, 0.1)" ,}}
                />
              </SignInInput>
              <SignInInput>
                <p>Password</p>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  sx={{
                    backgroundColor: "rgba(92, 89, 89, 0.1)",
                    width: "100%",
                  }}
                />
              </SignInInput>
            </Box>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop :"20px"}}>
            <SignInCheckBox>
                <Checkbox
                  color="neutral"
                  label="Keep me logged in"
                  size="md"
                  variant="outlined"
                  sx={{ fontSize: "14px", color: "#373737", fontWeight: "400" }}
                />
                Forget your password ?
              </SignInCheckBox>


              <Button
                type="submit"
                value="Send"
                sx={{
                  height: "50px",
                  width: "100%",
                  backgroundColor: "#006DAB",
                  borderRadius: "10px",
                }}
              >
                <h3>SIGN IN</h3>
              </Button>

              <div style={{display: "flex", gap: "20px", padding :"0px 50px"}}>
              <DividerWrapper/> 
              <div>OR</div>
               <DividerWrapper/>
              </div>
              <div style={{display: 'flex',justifyContent: 'center',}}>
                <img src={logos1} alt="logo" />
              </div>
              <Link to="createAccount">
              <CarBoxButton>CREATE ACCOUNT</CarBoxButton>
              </Link>
            </div>

          </>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
