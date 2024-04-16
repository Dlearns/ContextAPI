import { useContext } from "react";
import { MyContextStateContext } from "./MyUniqueContext";
import { Layer2 } from "./Layer2";

export const Layer1 = () => {
  console.log("Render: Layer 1");
  const contextState = useContext(MyContextStateContext);
  return (
    <div>
      <h1>{contextState.layer1Name}</h1>
      <Layer2 />
    </div>
  );
};
