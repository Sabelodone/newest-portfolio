import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current; // Capture the container ref value

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x9f7aea, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);

    scene.add(torusKnot);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);

      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container?.removeChild(renderer.domElement); // Use the captured container reference
    };
  }, []); // Empty dependency array ensures this runs only once after mount

  return <div ref={containerRef} className="absolute inset-0 z-0 bg-black" />;
};

export default Scene;
