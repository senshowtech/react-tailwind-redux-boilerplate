import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectUser } from "../../app/userSlice";
import Nav from "../../component/Nav";

export function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <Nav />
    </div>
  );
}
