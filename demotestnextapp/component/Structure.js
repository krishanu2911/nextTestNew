import React from "react";

export default function Structure({ children }) {
  return (
    <>
      <h1>Exploring Next js</h1>
      <div>{ children }</div>
      <h1>Footer</h1>
    </>
  );
}
