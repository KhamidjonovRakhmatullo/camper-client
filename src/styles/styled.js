import styled from "styled-components";

<<<<<<< HEAD
export const DispJustAlgn = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$column ? `column` : ``)};
  justify-content: ${(props) => (props.$justifyStart ? `start` : `center`)};
  align-items: ${(props) => (props.$alignStart ? `start` : `center`)};
  gap: ${(props) => (props.$gap ? `10px` : ``)};
`;
=======
export const DispJustAlgn =styled.div`
display: flex;
flex-direction: ${(props)=> props.$column ?`column` : ``};
justify-content: ${(props)=> props.$justifyStart ? `start` : `center`};
align-items: ${(props)=> props.$alignStart ? `start` : `center`};
gap: ${(props)=> props.$gap ? `10px` : ``};
`

export const NotFoundContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 600px;
button{
    width: 30%;
    margin-top: 50px;
    margin-bottom: 5px;
}
`
>>>>>>> 668968f45d403c141494987d206f376d8d76491a
