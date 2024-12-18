/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/second.glb')

  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    (document.body.style.cursor = hovered ? 'pointer' : 'auto')
  }, [hovered])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} position={[0.09, 2.79, 0.14]} rotation={[0.43, -0.15, -0.06]} scale={[1.24, 1, 1]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.002']} position={[0, 1.22, 0]} scale={0.76} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.003']} position={[0.09, 2.79, 0.14]} rotation={[0.43, -0.15, -0.06]} scale={[1.24, 1, 1]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.004']} position={[0.09, 2.79, 0.14]} rotation={[0.43, -0.15, -0.06]} scale={[1.24, 1, 1]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.003']} position={[0, 1.25, -0.01]} scale={0.76} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.005']} position={[-0.09, 0.23, -1.08]} rotation={[0.43, -0.15, -0.06]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.006']} position={[-0.06, 0.5, -1.02]} rotation={[0.43, -0.17, -0.06]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.005']} position={[-0.07, 2.2, 0.81]} rotation={[0.43, -0.15, -0.06]} scale={[0.1, 0.06, 0.04]} />
      <mesh geometry={nodes.NurbsPath.geometry} material={materials['Material.005']} position={[-0.08, 2.08, 0.77]} rotation={[0.43, -0.15, -0.06]} scale={0.08} />
      <group position={[0.02, 0.89, -0.44]} rotation={[-0.53, 0, 0]} scale={[0.06, 0.06, 0.1]}>
        <mesh geometry={nodes.Cube011_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube011_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Cube009.geometry} material={materials.Material} position={[0, 0.99, 1.37]} rotation={[0, 0, -Math.PI]} scale={[-1.43, -0.07, -0.79]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.008']} position={[-0.01, 1.08, 1.95]} scale={[0.28, 0.02, 0.14]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.008']} position={[-0.01, 1.48, 1.95]} scale={[0.03, 0.4, 0.03]} />
      <group position={[-0.01, 1.85, 1.9]} rotation={[0.28, 0, 0]} scale={[0.76, 0.39, 0.02]}>
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['Material.009']} />
      </group>
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.008']} position={[-0.01, 1.85, 1.94]} rotation={[0.27, 0, 0]} scale={[0.08, 0.08, 0.03]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.008']} position={[0, 1.07, 1]} scale={[0.58, 0.02, 0.23]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Material.005']} position={[0.49, 1.1, 1.15]} scale={[0.03, 0.01, 0.03]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.005']} position={[0.49, 1.1, 1.06]} scale={[0.03, 0.01, 0.03]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Material.005']} position={[0.49, 1.1, 0.97]} scale={[0.03, 0.01, 0.03]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Material.005']} position={[0.49, 1.1, 0.88]} scale={[0.03, 0.01, 0.03]} />
      <group position={[-1.06, 1.16, 1.65]} scale={0.1}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.013']} />
      </group>
      <group position={[1.21, 1.17, 1.81]} scale={0.13}>
        <mesh geometry={nodes.Cube018_1.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cube018_2.geometry} material={materials['Material.012']} />
      </group>
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.001']} position={[1.21, 1.36, 1.81]} scale={[0.08, 0.24, 0.08]} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.001']} position={[1.31, 1.44, 1.81]} rotation={[-0.14, 0.04, -0.71]} scale={[0.04, 0.09, 0.04]} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials['Material.001']} position={[1.12, 1.36, 1.81]} rotation={[0.09, 0, 0.62]} scale={[0.04, 0.09, 0.04]} />
      <mesh geometry={nodes.Sphere011.geometry} material={materials['Material.007']} position={[1.2, 1.39, 1.73]} rotation={[0.06, -0.36, 1.45]} scale={0.01} />
      <mesh geometry={nodes.Text001.geometry} material={materials['Material.005']} position={[-0.58, 0.96, 2.15]} rotation={[Math.PI / 2, 0, 0]} scale={[0.13, 0.12, 0.12]} />
      <mesh geometry={nodes.Text005.geometry} material={materials['Material.011']} position={[0.51, 1.99, 1.93]} rotation={[1.87, 0, Math.PI]} scale={0.19} />
      <mesh geometry={nodes.Sphere004.geometry} material={materials['Material.007']} position={[1.2, 1.6, 1.82]} rotation={[-0.68, -0.07, 0.16]} scale={0.01} />
      <mesh geometry={nodes.Sphere005.geometry} material={materials['Material.007']} position={[1.19, 1.52, 1.76]} rotation={[-2.32, 0.59, 1.59]} scale={0.01} />
      <mesh geometry={nodes.Sphere006.geometry} material={materials['Material.007']} position={[1.37, 1.46, 1.8]} rotation={[-2.47, 0.54, -0.47]} scale={0} />
      <mesh geometry={nodes.Sphere007.geometry} material={materials['Material.007']} position={[1.06, 1.42, 1.82]} rotation={[-1.52, -0.7, -1.5]} scale={0} />
      <mesh geometry={nodes.Sphere008.geometry} material={materials['Material.007']} position={[1.17, 1.48, 1.86]} rotation={[3, 0.58, -0.35]} scale={0} />
      <mesh geometry={nodes.Sphere009.geometry} material={materials['Material.007']} position={[1.35, 1.51, 1.8]} rotation={[0.86, 0.56, -0.08]} scale={0} />
      <mesh geometry={nodes.Sphere010.geometry} material={materials['Material.007']} position={[1.25, 1.36, 1.88]} rotation={[-0.68, -0.07, 0.16]} scale={0.01} />
      <mesh geometry={nodes.Sphere012.geometry} material={materials['Material.007']} position={[1.24, 1.46, 1.88]} rotation={[-1.21, 0.26, -0.42]} scale={0} />
      <mesh geometry={nodes.Sphere013.geometry} material={materials['Material.007']} position={[1.25, 1.53, 1.85]} rotation={[-0.63, -1.02, -0.68]} scale={0.01} />
      <mesh geometry={nodes.Sphere014.geometry} material={materials['Material.007']} position={[1.18, 1.35, 1.88]} rotation={[1.03, -0.58, 0.11]} scale={0} />
      <mesh geometry={nodes.Sphere015.geometry} material={materials['Material.007']} position={[1.11, 1.39, 1.84]} rotation={[-0.86, 0.03, 0]} scale={0} />
      <mesh geometry={nodes.Sphere016.geometry} material={materials['Material.007']} position={[1.25, 1.49, 1.76]} rotation={[0.68, 0.3, 0.98]} scale={0} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.008']} position={[-0.85, 0.84, 1.08]} scale={[0.08, 0.05, 0.16]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.005']} position={[-0.85, 1.1, 1.18]} rotation={[1.57, -0.01, -1.62]} scale={0.02} />
      <mesh geometry={nodes.Text.geometry} material={nodes.Text.material} position={[-2.12, 0.04, 2.75]} scale={0.74} />
      <mesh geometry={nodes.Text002.geometry} material={nodes.Text002.material} position={[0.58, 0.04, 3.01]} scale={0.83} />
      <mesh geometry={nodes.Text004.geometry} material={nodes.Text004.material} position={[-1.1, 0.04, 3.64]} scale={0.65} />
      <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[-0.42, 0.04, 1.35]} scale={0.27} />
      
      <group
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        dispose={null}
      >
        <mesh 
        
           onClick={() =>  window.open("https://www.linkedin.com/in/artyom-novikevich-a0b249205/")}
          geometry={nodes.Cube019.geometry} material={materials.back} position={[-0.86, 0.06, 2.53]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.38, -0.05, -0.4]} />
        <mesh 
           onClick={() =>  window.open("https://github.com/Samotaa")}
          geometry={nodes.Cube020.geometry} material={materials.back} position={[1.78, 0.06, 2.75]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.27, -0.05, -0.4]} />
        <mesh 
          onClick={() =>  window.open("https://t.me/s4mota")}
          geometry={nodes.Cube021.geometry} material={materials.back} position={[0.13, 0.06, 3.49]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.27, -0.05, -0.4]} />
      </group>
    </group>
  )
}

useGLTF.preload('/second.glb')
