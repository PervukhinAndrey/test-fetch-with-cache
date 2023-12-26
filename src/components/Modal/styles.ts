import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOutsideArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 100vw;
  min-height: 100vh;

  background-color: #000;
  opacity: 30%;
`;

export const ModalPopUp = styled.div`
  z-index: 2;
  height: 500px;
  width: 500px;

  position: relative;
  border-radius: 20px;
  background-color: lightgrey;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExitButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
