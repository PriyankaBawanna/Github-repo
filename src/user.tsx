import React from "react";
import { useLocation } from "react-router";
const User = () => {
  const Data = useLocation().state.id;
  console.log(Data);

  return (
    <>
      <h1>From user {Data}</h1>
    </>
  );
};
export default User;
