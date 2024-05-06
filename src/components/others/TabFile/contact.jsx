import React, { useEffect } from "react";
import map1 from "../../assets/map.png";
import {
  FAQConrainer,
  GrayText,
  InputWrapper,
  MapWrapper,
  NumberAndEmailWrapper,
  NumberWrapper,
  SendQuestionWrapper,
  MapWrapper1
} from "../../../styles/carInfoStyle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const ContactComponent = () => {
  //email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o5ao8bp", "template_o1ptwpj", form.current, {
        publicKey: "m413NYcWa48YEs7hQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message is sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("fail");
        }
      );
  };

  ///map
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c98f8997cad4ba538b73bfec3d6153dc"
    );
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(36.815673, 127.113049),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [new kakao.maps.LatLng(36.815673, 127.113049)];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FAQConrainer>
        <MapWrapper>
          <MapWrapper1>
          <div id="map" className="map" />
          </MapWrapper1>
          <NumberAndEmailWrapper>
            <NumberWrapper>
              <GrayText $MarginBottom>Phone number</GrayText>
              <p>+7 237 181 181</p>
              <p>+7 123 181 175</p>
            </NumberWrapper>
            <NumberWrapper>
              <GrayText $MarginBottom>E-mail</GrayText>
              <p>logo.uz</p>
            </NumberWrapper>
          </NumberAndEmailWrapper>
        </MapWrapper>
        <SendQuestionWrapper>
          <InputWrapper>
            <h2>For personal deals</h2>
            <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  border: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TextField
                  name="user_name"
                  fullWidth
                  required
                  label="Your name"
                  id="fullWidth"
                  sx={{ border: "none", backgroundColor: "#FAFAFA" }}
                />
                <TextField
                  name="user_email"
                  fullWidth
                  required
                  label="Your email"
                  id="fullWidth"
                  sx={{ border: "none", backgroundColor: "#FAFAFA" }}
                />
                <Select
                  placeholder="Select your wealth"
                  name="user_wealth"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: "100%",
                    backgroundColor: "#FAFAFA",
                    color: "black",
                    fontWeight: "400",
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  <Option value="$">$10,000-$100,000</Option>
                  <Option value="$">$100,000-$500,000</Option>
                  <Option value="$">$500,000-$1mln</Option>
                  <Option value="$">soqqa more...</Option>
                </Select>
                <Textarea
                  name="message"
                  required
                  placeholder="Your target"
                  minRows={5}
                  sx={{ backgroundColor: "#FAFAFA" }}
                />
                <Button type="submit" value="Send" sx={{ height: "50px" }}>
                  Send message
                </Button>
              </Box>
            </form>
          </InputWrapper>
        </SendQuestionWrapper>
      </FAQConrainer>
    </div>
  );
};

export default ContactComponent;
