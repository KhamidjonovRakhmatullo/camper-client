import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  SignInCheckBox,
  SignInInput,
  SignInTitle,
} from "../../../styles/NavStyled";
import Checkbox from "@mui/joy/Checkbox";
import Button from "@mui/joy/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

export default function CreateAccountComponent() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
    console.log("clicked");
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "140px 30px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "530px",
            padding: " 37px 33px 50px 33px",
            display: "flex",
            flexDirection: "column",
            boxShadow: " 0px 0px 18px 0px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <SignInTitle>Register</SignInTitle>
            <ClearIcon onClick={handleBack} sx={{cursor: "pointer"}}/>
          </div>
          <Box
            sx={{
              // border: '1px solid blue',
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
                sx={{ backgroundColor: "rgba(92, 89, 89, 0.1)" }}
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
            <SignInInput>
              <p>Repeat your password</p>
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "20px",
            }}
          >
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
              REGISTRATE
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
