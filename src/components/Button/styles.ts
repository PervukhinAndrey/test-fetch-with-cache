import styled from "styled-components";

import { ButtonContainerProps, ButtonSizes, ButtonTypes } from "./types";

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: ${({ size }) => (size === ButtonSizes.s ? "5px" : "20px")};
  height: ${({ size }) =>
    size === ButtonSizes.l ? "53px" : size === ButtonSizes.m ? "48px" : "10px"};
  width: ${({ size }) =>
    size === ButtonSizes.l
      ? "250px"
      : size === ButtonSizes.m
      ? "75px"
      : "10px"};

  background-color: ${({ buttontype }) =>
    buttontype === ButtonTypes.classic ? "" : "transparent"};
  border: ${({ buttontype }) =>
    buttontype === ButtonTypes.classic ? "" : "none"};
`;
