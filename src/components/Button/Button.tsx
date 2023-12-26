import React from "react";

import { ButtonContainer } from "./styles";
import { ButtonProps, ButtonSizes, ButtonTypes } from "./types";

export const Button = ({
  text,
  size = ButtonSizes.m,
  buttontype = ButtonTypes.classic,

  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer size={size} buttontype={buttontype} {...rest}>
      <>{text}</>
    </ButtonContainer>
  );
};
