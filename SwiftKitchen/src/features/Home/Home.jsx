import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Stats(props) {
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh {...props} ref={meshRef} scale={active ? 1.5 : 1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Home() {
  return (
    <View className="flex-1 bg-red-500">
      <Canvas className="flex-1 bg-blue-500">
        <color attach="background" args={["lightblue"]} />
        <ambientLight />
        <pointLight position={[0, 1.2, 0]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </View>
  );
}
