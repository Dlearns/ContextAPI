import "./styles.css";
import { Layer1 } from "./Layer1";
import { MyContextProvider } from "./MyUniqueContext";

export const App = () => {
  return (
    <MyContextProvider>
      <div className="App">
        <Layer1 />
      </div>
    </MyContextProvider>
  );
};
