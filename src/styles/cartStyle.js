import styled from "styled-components";

export const CartContainer = styled.div`
  /* border: 1px solid red; */
  background-color: #fafafa;
  padding: 40px 10%;
  /* max-width: 1300px; */
`;

export const CartTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const UnderLine2 = styled.div`
  background-color: #ff7a00;
  width: ${(props) => (props.$width100px ? `100px` : ``)};
  height: 2px;
`;

export const CartLeftandRightContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-top: 30px;
  gap: 45px;
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const CartLeftContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 20px 64px;
  max-height: 476px;
  width: 100%;
  max-width: 811px;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);


  img {
    width: 100%;
    max-width: 683px;
    max-height: 406px;
  }
`;

export const CarouselImage =styled.div`
margin-top: 50px;
/* border: 1px solid green; */
img {
    width: 100%;
    max-width: 683px;
    max-height: 406px;
  }
`
export const PurchasePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 10px;
  background: rgba(55, 55, 55, 0.1);
  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  height: 50px;

  flex-shrink: 0;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const CartRightContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
  padding: 17px 0px 0px 0px;
  max-height: 600px;
  overflow: scroll;
`;

export const CartCarName = styled.div`
  margin-bottom: ${(props) => (props.$marginBottom10 ? `10px` : ``)};
  color: ${(props) => (props.$colorBlack ? `#000` : `#373737`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$size25 ? `25px` : `30px`)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CartCarPrice = styled.div`
  margin: 12px 0px 20px 0px;

  color: var(--blue, #006dab);
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const CartCarDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;
  max-width: 311px;

  color: rgba(55, 55, 55, 0.7);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  h3 {
    color: #373737;
    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const PaymentButton = styled.button`
  width: 100%;
  max-width: 311px;
  padding: 10px 3.5%;
  border-radius: 10px;
  background-color: #006dab;
  border: 1px solid var(--blue, #006dab);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  margin-top: ${(props) => (props.$marginTop58 ? `58px` : `171px`)};

  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #006dab;
    border: 1px solid #006dab;
  }
  /* @media only screen and (min-width: 600px) {
    padding: ${(props) => (props.$paddingColumn ? `8px 18px` : ``)};
  } */
`;

export const InputText = styled.div`
  margin: 20px 0px 10px 10px;

  color: rgba(55, 55, 55, 0.8);
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputStyled = styled.input`
  width: 100%;
  max-width: 311px;
  height: 50px;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.1);
  border: none;

  padding: 0px 0px 0px 20px;
  color: rgba(55, 55, 55, 0.6);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
