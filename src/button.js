import { useState } from "react";

const Button = (handleClick) => {
  const [button, setButton] = useState();
  return <button onClick={() => setButton(handleClick)}> im button</button>;
};

export default Button;
