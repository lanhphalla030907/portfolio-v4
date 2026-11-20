"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Sparkles, User, RefreshCw } from "lucide-react";

export const HeroVisual: React.FC = () => {
  const [mode, setMode] = useState<"photo" | "aura">("photo");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    mesh: THREE.Mesh;
    wireframeMesh: THREE.Mesh;
    particles: THREE.Points;
    reqId: number;
  } | null>(null);

  // Initialize Three.js interactive 3D scene
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const width = canvas.clientWidth || 480;
    const height = canvas.clientHeight || 560;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const accentPointLight = new THREE.PointLight(0x60C1E5, 5, 20);
    accentPointLight.position.set(4, 3, 4);
    scene.add(accentPointLight);

    const cyanRimLight = new THREE.PointLight(0x38bdf8, 3, 20);
    cyanRimLight.position.set(-4, -2, -2);
    scene.add(cyanRimLight);

    // Central Core: Complex Metallic Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.4, 0.42, 128, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x0b1026,
      emissive: 0x60C1E5,
      emissiveIntensity: 0.18,
      roughness: 0.15,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Geometric Wireframe Outer Aura
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    wireframeMesh.scale.set(1.03, 1.03, 1.03);
    scene.add(wireframeMesh);

    // Particle Aura Constellation
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x60C1E5,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Interactive mouse tracking
    let targetRotX = 0;
    let targetRotY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.8;
      targetRotX = -y * 0.8;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let reqId = 0;
    let clock = new THREE.Clock();
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!isVisible) return;
      const elapsedTime = clock.getElapsedTime();

      // Idle Rotation + Smooth Lerp to Mouse Position
      mesh.rotation.y += 0.008;
      mesh.rotation.x += 0.004;
      wireframeMesh.rotation.y += 0.008;
      wireframeMesh.rotation.x += 0.004;

      mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.05;
      mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.05;

      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const newWidth = canvas.clientWidth || 480;
      const newHeight = canvas.clientHeight || 560;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    sceneRef.current = { renderer, scene, camera, mesh, wireframeMesh, particles, reqId };

    return () => {
      cancelAnimationFrame(reqId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[460px] aspect-[4/5] mx-auto select-none">
      {/* Blueprint Outer Corner Frame */}
      <div className="absolute -inset-3 border border-line/10 cut-corner-md pointer-events-none" />
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-accent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-accent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-accent z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-accent z-20 pointer-events-none" />

      {/* Main Visual Display Container */}
      <div className="relative w-full h-full cut-corner-md overflow-hidden bg-surface shadow-xl border border-line/15">
        {/* State 1: Professional Portrait Mode */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            mode === "photo" ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Subtle architectural gradient background */}
          <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent z-10" />

          {/* Developer Portrait Image */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
            alt="Developer portrait"
            className="w-full h-full object-cover object-top scale-100 hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Bottom Card Identity Metadata */}
          <div className="absolute bottom-5 inset-x-5 z-20 flex items-center justify-between text-white">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase">
                IDENTITY // VERIFIED
              </span>
              <p className="font-display font-bold text-base tracking-tight">ALEXANDER CHEN</p>
            </div>
            <span className="text-[10px] font-mono bg-surface/10 backdrop-blur-sm px-2.5 py-1 border border-white/20 rounded-sm">
              CA, USA
            </span>
          </div>
        </div>

        {/* State 2: Interactive 3D WebGL Aura Mode */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#080d20] to-[#040711] transition-opacity duration-500 ease-in-out ${
            mode === "aura" ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* 3D Canvas Metadata HUD */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-semibold">
              WEBGL 3D MATRIX // INTERACTIVE
            </span>
          </div>

          <div className="absolute bottom-4 inset-x-4 z-20 text-center">
            <span className="text-[10px] font-mono text-slate-400 bg-surface/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              Drag or move cursor to rotate mesh
            </span>
          </div>
        </div>
      </div>

      {/* Dual-Mode Toggle Switcher Bar */}
      <div className="mt-4 flex items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode("photo")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
              mode === "photo"
                ? "bg-night text-white font-semibold shadow-xs"
                : "bg-surface text-ink-soft hover:text-ink border border-line/10"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Portrait</span>
          </button>

          <button
            onClick={() => setMode("aura")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
              mode === "aura"
                ? "bg-brand-accent text-night font-semibold shadow-sm"
                : "bg-surface text-ink-soft hover:text-accentText border border-line/10"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Aura</span>
          </button>
        </div>

        <span className="text-[11px] font-mono text-ink-muted hidden sm:inline-flex items-center gap-1">
          <RefreshCw className="w-3 h-3 text-brand-accent" />
          <span>Dual state view</span>
        </span>
      </div>
    </div>
  );
};
