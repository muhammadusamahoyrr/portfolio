import React, { useEffect } from 'react';
import * as THREE from 'three';

const StarField = () => {
  useEffect(() => {
    // Initialize the scene
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    document.body.appendChild(renderer.domElement);

    const h = window.innerHeight;
    const w = window.innerWidth;
    renderer.setSize(w, h);

    // Camera setup
    const fov = 60;
    const aspect = w / h;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 5;

    // Create geometry and star positions
    const geometry = new THREE.BufferGeometry();
    const pointCount = 2000;
    const positions = new Float32Array(pointCount * 3); // 3 coordinates for each point (x, y, z)

    for (let i = 0; i < pointCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100; // Spread stars in 3D space
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(geometry, material);
    const scene = new THREE.Scene();
    scene.add(stars);

    // Animate stars
    const animate = () => {
      requestAnimationFrame(animate);

      // Add rotation for the starfield
      stars.rotation.x += 0.0005; // Slow rotation on X-axis
      stars.rotation.y += 0.001; // Slow rotation on Y-axis

      // Move along Z-axis for a zooming effect
      const positionsArray = geometry.attributes.position.array;
      for (let i = 0; i < pointCount; i++) {
        // Move along Z-axis
        positionsArray[i * 3 + 2] += 0.02;

        // Reset Z position for looping effect
        if (positionsArray[i * 3 + 2] > 10) {
          positionsArray[i * 3 + 2] = -10;
        }
      }

      geometry.attributes.position.needsUpdate = true; // Update the position attribute

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default StarField;
