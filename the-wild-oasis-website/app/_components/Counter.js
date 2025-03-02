"use client";

import { useState } from "react";

function Counter({ user }) {
  const [counter, setCounter] = useState(1);

  console.log(user);

  return <button onClick={() => setCounter((c) => c + 1)}>{counter} </button>;
}

export default Counter;
