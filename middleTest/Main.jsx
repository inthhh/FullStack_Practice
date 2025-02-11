import React from "react";
import { Header } from "./Header";
import { Contents } from "./Contents";

export const Main = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <Contents />
    </div>
  );
};
