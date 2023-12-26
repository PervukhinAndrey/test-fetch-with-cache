import React from "react";

import { UserCardContainer } from "./styles";

import { useAppSelector } from "../../app/hooks";

export const UserCard = () => {
  const userData = useAppSelector(
    (state) => state.user.userRequestData.results
  );
  const name = userData ? userData[0].name : { title: "", first: "", last: "" };
  const link = userData ? userData[0].picture.large : "";

  return (
    <UserCardContainer>
      <img src={link} alt="User avatar" />
      Name: {name.title + " " + name.first + " " + name.last}
    </UserCardContainer>
  );
};
