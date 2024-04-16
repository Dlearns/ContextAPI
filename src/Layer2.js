import { Layer3 } from "./Layer3";

export const Layer2 = () => {
  console.log("Render: Layer 2");
  return (
    <div>
      <h2>Layer2</h2>
      <Layer3 />
    </div>
  );
};
