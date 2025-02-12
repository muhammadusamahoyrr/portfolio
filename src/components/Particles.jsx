import { useFrame } from '@react-three/fiber'
import React, {useRef} from 'react'
const Particles = () => {
    const particles = useRef()
    const count = 5000
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }
  
    useFrame((state) => {
      particles.current.rotation.y += 0.001
      particles.current.rotation.x += 0.001
    })
  
    return (
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="white" transparent opacity={0.6} />
      </points>
    )
  }

export default Particles