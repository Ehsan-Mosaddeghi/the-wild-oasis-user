"use client";

import { useState } from "react";

function Counter({ user }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {user.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
    </div>
  );
}

export default Counter;
