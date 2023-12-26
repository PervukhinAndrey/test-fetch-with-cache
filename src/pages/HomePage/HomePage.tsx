import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { HomePageContainer } from "./styles";

import { Button } from "../../components/Button";
import {
  fetchUsers,
  clearTimestamp,
} from "../../components/UserCard/userCardSlice";
import { open } from "../../components/Modal/modalSlice";
import { UserCard } from "../../components/UserCard";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const modalContent = <UserCard />;
  return (
    <HomePageContainer>
      <Button
        size="l"
        text={"Invalidate cache"}
        onClick={() => {
          dispatch(clearTimestamp());
        }}
      />
      <Button
        size="l"
        text={"Fetch New Data"}
        onClick={() => {
          const a = Date.now();
          dispatch(fetchUsers(a));
          dispatch(open(modalContent));
        }}
      />
    </HomePageContainer>
  );
};
