import React from "react";
// import { useParams } from 'react-router-dom'
// import { campcar } from '../mock/mockdata'
import {
  CartCarDescription,
  CartCarName,
  CartCarPrice,
  CartContainer,
  CartLeftContainer,
  CartLeftandRightContainer,
  CartRightContainer,
  CartTitle,
  InputStyled,
  InputText,
  PaymentButton,
  PurchasePrice,
  UnderLine2,
} from "../../styles/cartStyle";
import image1 from "../assets/campingPlace-5.jpeg";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const CartComponent = () => {
  // const {id} = useParams
  // console.log("userId:", id);
  // const data = campcar.maindata.find( (value) => value.id === parseInt(id) );
  // console.log("id Info:", resultData);

  return (
    <div style={{display: "flex", justifyContent :"center", flex: "1", alignItems: "", backgroundColor: "#fafafa"}}>
    <CartContainer>
      <CartTitle>
        Cart
        <UnderLine2 $width100px />
      </CartTitle>

      <CartLeftandRightContainer>
        <CartLeftContainer>
          <img src={image1} alt="" />
          <PurchasePrice>
            <p>Purchase Price</p>
            <b>12331$</b>
          </PurchasePrice>
        </CartLeftContainer>

          <CartRightContainer>
            <CartCarName>Car Name</CartCarName>
            <CartCarPrice>00000$</CartCarPrice>
            <CartCarDescription>
              <h3>Description</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              viverra amet, tortor tristique odio scelerisque aenean sodales. Nunc
              risus dolor amet porttitor tellus
            </CartCarDescription>
            <PaymentButton>Continue to Payment</PaymentButton>
            <div style={{ margin: "42px 0px 0px 0px", width: "100%" }}>
              <CartCarName $colorBlack $size25 $marginBottom10>
                {" "}
                Enter Account Details
              </CartCarName>
              <div>
                <InputText>First Name</InputText>
                <InputStyled placeholder="First name" id="first-name" />
              </div>
              <div>
                <InputText>Last Name</InputText>
                <InputStyled placeholder="Last name" id="last-name" />
              </div>
              <div>
                <InputText>Email</InputText>
                <InputStyled placeholder="camper@mail.com" id="email" />
              </div>
              <div>
                <InputText>Mobile Phone Number</InputText>
                <InputStyled
                  placeholder="+8210-1111-2222"
                  id="phone-number"
                  type="number"
                />
              </div>
            </div>
            <div style={{ margin: "50px 0px 30px 0px", width: "100%" }}>
              <CartCarName $colorBlack $size25 $marginBottom10>
                {" "}
                Card
              </CartCarName>
              <div>
                <InputText>Name of card</InputText>
                <InputStyled placeholder="First name" id="first-name" />
              </div>
              <div>
                <InputText>Card number</InputText>
                <InputStyled
                  placeholder="Last name"
                  id="last-name"
                  type="number"
                />
              </div>
              <div>
                <InputText>Expiration Month</InputText>
                <Select
                  placeholder="01"
                  color="neutral"
                  size="md"
                  variant="soft"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: "100%",
                    maxWidth: "311px",
                    height: "50px",
                    backgroundColor: "rgba(55, 55, 55, 0.10)",
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  <Option value="01">01</Option>
                  <Option value="02">02</Option>
                  <Option value="03">03</Option>
                  <Option value="04">04</Option>
                  <Option value="05">05</Option>
                  <Option value="05">05</Option>
                  <Option value="07">07</Option>
                  <Option value="08">08</Option>
                  <Option value="09">09</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                </Select>
              </div>
              <div>
                <InputText>Expiration Year</InputText>
                <Select
                  placeholder="2024"
                  color="neutral"
                  size="md"
                  variant="soft"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: "100%",
                    maxWidth: "311px",
                    height: "50px",
                    backgroundColor: "rgba(55, 55, 55, 0.10)",
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  <Option value="2025">2025</Option>
                  <Option value="2026">2026</Option>
                  <Option value="2027">2027</Option>
                  <Option value="2028">2028</Option>
                  <Option value="2030">2030</Option>
                </Select>
              </div>
              <div>
                <InputText>CCV</InputText>
                <InputStyled
                  placeholder="CCV"
                  id="CCV-number"
                  type="password"
                />
              </div>
              <div>
                <InputText>Billing Zip Cod</InputText>
                <InputStyled
                  placeholder="Billing Zip Cod"
                  id="CCV-number"
                  type="number"
                />
              </div>
              <PaymentButton $marginTop58>Continue to Payment</PaymentButton>
            </div>
          </CartRightContainer>
       
      </CartLeftandRightContainer>
    </CartContainer>
     </div>
  );
};

export default CartComponent;
