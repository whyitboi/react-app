import { useState } from "react";

export function CLock() {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter((count) => count + 1);
  }, 1000);

  return <p>{counter} seconds has passed</p>;
}
