import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@utils/BackgroundUtils.js";


const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [-3, 7.5, -7.5],
        }}
        style={{ height: "80vh", width: "100vw" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={10} minDistance={5} />
        <directionalLight />
        <pointLight position={[-15, 0, -15]} power={6.0} />
        <PointCircle />
      </Canvas>

  
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}

      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
