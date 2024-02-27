import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return <div>{count}</div>;
}

export default Counter;
{
  /* <button onClick={onButtonClick}>+</button> */
}
