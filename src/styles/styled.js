import styled from "styled-components";

export const DispJustAlgn = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$column ? `column` : ``)};
  justify-content: ${(props) => (props.$justifyStart ? `start` : `center`)};
  align-items: ${(props) => (props.$alignStart ? `start` : `center`)};
  gap: ${(props) => (props.$gap ? `10px` : ``)};
`;
