import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Yout Account</Link>
      </li>
    </ul>
  );
}

export default Navigation;
