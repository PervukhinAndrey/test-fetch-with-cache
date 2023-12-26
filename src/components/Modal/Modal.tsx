import React from "react";

import {
  ModalContainer,
  ModalOutsideArea,
  ModalPopUp,
  ExitButton,
} from "./styles";
import { close } from "./modalSlice";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button } from "../Button";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.modal.content);
  return (
    <ModalContainer>
      <ModalOutsideArea onClick={() => dispatch(close())} />
      <ModalPopUp>
        <ExitButton>
          <Button
            text="X"
            size="s"
            buttontype="contentOnly"
            onClick={() => dispatch(close())}
          />
        </ExitButton>
        {content}
      </ModalPopUp>
    </ModalContainer>
  );
};
