import { Html } from "@react-three/drei";

const Canvas3DLoader = () => {
  return (
    <Html center>
      <div
        style={{
          color: "white",
          fontSize: "14px",
          background: "rgba(0,0,0,0.6)",
          padding: "8px 14px",
          borderRadius: "8px",
        }}
      >
        Loading 3D...
      </div>
    </Html>
  );
};

export default Canvas3DLoader;
