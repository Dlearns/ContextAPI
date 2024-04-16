import { createContext, useState } from "react";
import { useInterval } from "./useInterval";

/**
 * Define the context without undefined value
 */
export const MyContextStateContext = createContext({
  counter: 0,
  layer1Name: "Layer1",
  layer2Name: "Layer2",
});

export const MyContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const [layer1, setLayer1] = useState("Layer1");
  const [layer2, setLayer2] = useState("Layer2");

  useInterval(() => {
    setCounter((d) => d + 1);
  }, 1000);

  return (
    <MyContextStateContext.Provider
      value={{
        counter: counter,
        layer1Name: layer1,
        layer2Name: layer2,
      }}
    >
      {props.children}
    </MyContextStateContext.Provider>
  );
};
