import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";

export default function GameCamera() {
  const cameraPosition = new Vector3(-15, 15, 60);
  const center = new Vector3(-10, -10, 15);

  return (
    <PerspectiveCamera position={cameraPosition} makeDefault>
      <OrbitControls enableDamping={false} target={center} />
    </PerspectiveCamera>
  );
}
