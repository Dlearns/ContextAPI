import { useContext } from "react";
import { MyContextStateContext } from "./MyUniqueContext";

export const Layer3 = () => {
  console.log("Render: Layer 3");
  const contextState = useContext(MyContextStateContext);
  return (
    <div>
      <h3>Layer3</h3>
      <p>{contextState.counter}</p>
    </div>
  );
};
