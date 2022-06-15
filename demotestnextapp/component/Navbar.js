import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <h1>
        <Link href="/welcome">user</Link>
      </h1>
    </div>
  );
}
