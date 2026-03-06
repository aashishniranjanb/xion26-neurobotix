"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

const mouse = { x: 0, y: 0 };

const LEFT_FINGER_BONES = [
  "HandL001_060", "HandL002_061", "HandL003_062", "HandL004_063",
  "HandL005_064", "HandL006_065", "HandL007_066", "HandL008_067",
  "HandL009_068", "HandL010_069", "HandL011_070", "HandL013_071",
  "HandL014_072", "HandL015_073", "HandL016_074", "HandL017_075",
  "HandL018_076", "HandL019_077", "HandL020_078", "HandL021_079",
  "HandL022_080",
];

const RIGHT_FINGER_BONES = [
  "HandR001_093", "HandR002_094", "HandR003_095", "HandR004_096",
  "HandR005_097", "HandR006_098", "HandR007_099", "HandR008_0100",
  "HandR009_0101", "HandR010_0102", "HandR011_0103", "HandR013_0104",
  "HandR014_0105", "HandR015_0106", "HandR016_0107", "HandR017_0108",
  "HandR018_0109", "HandR019_0110", "HandR020_0111", "HandR021_0112",
  "HandR022_0113",
];

function RobotModel() {
  const { scene } = useGLTF("/robot.glb");

  const headBone = useRef<THREE.Bone | null>(null);
  const neckBone = useRef<THREE.Bone | null>(null);
  const armLBone = useRef<THREE.Bone | null>(null);
  const armRBone = useRef<THREE.Bone | null>(null);
  const armL2Bone = useRef<THREE.Bone | null>(null);
  const armR2Bone = useRef<THREE.Bone | null>(null);
  const spineBone = useRef<THREE.Bone | null>(null);
  const leftFingers = useRef<{ bone: THREE.Bone; orig: THREE.Euler }[]>([]);
  const rightFingers = useRef<{ bone: THREE.Bone; orig: THREE.Euler }[]>([]);

  const origHead = useRef(new THREE.Euler());
  const origNeck = useRef(new THREE.Euler());
  const origArmL = useRef(new THREE.Euler());
  const origArmR = useRef(new THREE.Euler());
  const origArmL2 = useRef(new THREE.Euler());
  const origArmR2 = useRef(new THREE.Euler());
  const origSpine = useRef(new THREE.Euler());

  useEffect(() => {
    const leftFingerMap = new Map<string, { bone: THREE.Bone; orig: THREE.Euler }>();
    const rightFingerMap = new Map<string, { bone: THREE.Bone; orig: THREE.Euler }>();

    scene.traverse((child: any) => {
      if (!child.isBone) return;
      switch (child.name) {
        case "Bone_0116": headBone.current = child; origHead.current.copy(child.rotation); break;
        case "Bone004_0118": neckBone.current = child; origNeck.current.copy(child.rotation); break;
        case "ArmL_046": armLBone.current = child; origArmL.current.copy(child.rotation); break;
        case "ArmR_048": armRBone.current = child; origArmR.current.copy(child.rotation); break;
        case "ArmL002_050": armL2Bone.current = child; origArmL2.current.copy(child.rotation); break;
        case "ArmR002_083": armR2Bone.current = child; origArmR2.current.copy(child.rotation); break;
        case "Spine_Yaw_00": spineBone.current = child; origSpine.current.copy(child.rotation); break;
      }
      if (LEFT_FINGER_BONES.includes(child.name)) leftFingerMap.set(child.name, { bone: child, orig: child.rotation.clone() });
      if (RIGHT_FINGER_BONES.includes(child.name)) rightFingerMap.set(child.name, { bone: child, orig: child.rotation.clone() });
    });

    leftFingers.current = LEFT_FINGER_BONES.map((n) => leftFingerMap.get(n)).filter(Boolean) as { bone: THREE.Bone; orig: THREE.Euler }[];
    rightFingers.current = RIGHT_FINGER_BONES.map((n) => rightFingerMap.get(n)).filter(Boolean) as { bone: THREE.Bone; orig: THREE.Euler }[];
  }, [scene]);

  useEffect(() => {
    scene.traverse((child: any) => {
      if (!child.isMesh) return;

      const processMaterial = (mat: any) => {
        const clone = mat.clone();
        // Keep original texture maps — they have the black parts baked in!
        // Just tint the color channel gold so light areas become gold
        // and dark/black texture areas stay dark naturally
        clone.color = new THREE.Color("#FFD700");
        clone.metalness = 0.85;
        clone.roughness = 0.28;
        clone.envMapIntensity = 1.2;
        clone.needsUpdate = true;
        return clone;
      };

      if (Array.isArray(child.material)) {
        child.material = child.material.map(processMaterial);
      } else {
        child.material = processMaterial(child.material);
      }
    });
  }, [scene]);

  useFrame(() => {
    const s = 0.06;
    if (headBone.current) {
      headBone.current.rotation.x = THREE.MathUtils.lerp(headBone.current.rotation.x, origHead.current.x - mouse.y * 0.35, s);
      headBone.current.rotation.y = THREE.MathUtils.lerp(headBone.current.rotation.y, origHead.current.y + mouse.x * 0.45, s);
    }
    if (neckBone.current) {
      neckBone.current.rotation.x = THREE.MathUtils.lerp(neckBone.current.rotation.x, origNeck.current.x - mouse.y * 0.15, s);
      neckBone.current.rotation.y = THREE.MathUtils.lerp(neckBone.current.rotation.y, origNeck.current.y + mouse.x * 0.2, s);
    }
    if (spineBone.current) {
      spineBone.current.rotation.y = THREE.MathUtils.lerp(spineBone.current.rotation.y, origSpine.current.y + mouse.x * 0.1, s * 0.5);
    }
    if (armLBone.current) {
      armLBone.current.rotation.z = THREE.MathUtils.lerp(armLBone.current.rotation.z, origArmL.current.z + mouse.y * 0.5, s);
      armLBone.current.rotation.x = THREE.MathUtils.lerp(armLBone.current.rotation.x, origArmL.current.x + mouse.x * 0.3, s);
    }
    if (armRBone.current) {
      armRBone.current.rotation.z = THREE.MathUtils.lerp(armRBone.current.rotation.z, origArmR.current.z - mouse.y * 0.5, s);
      armRBone.current.rotation.x = THREE.MathUtils.lerp(armRBone.current.rotation.x, origArmR.current.x + mouse.x * 0.3, s);
    }
    if (armL2Bone.current) {
      armL2Bone.current.rotation.y = THREE.MathUtils.lerp(armL2Bone.current.rotation.y, origArmL2.current.y - mouse.x * 0.25, s);
      armL2Bone.current.rotation.x = THREE.MathUtils.lerp(armL2Bone.current.rotation.x, origArmL2.current.x + mouse.y * 0.2, s);
    }
    if (armR2Bone.current) {
      armR2Bone.current.rotation.y = THREE.MathUtils.lerp(armR2Bone.current.rotation.y, origArmR2.current.y + mouse.x * 0.25, s);
      armR2Bone.current.rotation.x = THREE.MathUtils.lerp(armR2Bone.current.rotation.x, origArmR2.current.x + mouse.y * 0.2, s);
    }
    const curlAmount = -mouse.y * 0.3;
    leftFingers.current.forEach(({ bone, orig }) => {
      bone.rotation.z = THREE.MathUtils.lerp(bone.rotation.z, orig.z + curlAmount, s * 0.8);
    });
    rightFingers.current.forEach(({ bone, orig }) => {
      bone.rotation.z = THREE.MathUtils.lerp(bone.rotation.z, orig.z - curlAmount, s * 0.8);
    });
  });

  return <primitive object={scene} scale={4.2} position={[0, -7.2, 0]} rotation={[0, -0.4, 0]} />;
}

export default function RobotScene() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.6, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[4, 10, 6]} intensity={3} color="#ffffff" />
        <directionalLight position={[-5, 3, -3]} intensity={1} color="#FFD700" />
        <directionalLight position={[0, -2, -6]} intensity={1} color="#FFB800" />
        <pointLight position={[0, 3, 5]} intensity={2} color="#FFD700" distance={18} />
        <pointLight position={[2, 8, 3]} intensity={1} color="#ffffff" distance={20} />
        <Suspense fallback={null}>
          <RobotModel />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}