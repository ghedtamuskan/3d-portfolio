import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 150 }) => {
    const mesh = useRef();

    const { particles, positions, speeds, snowTexture } = useMemo(() => {
        // Generate a soft circular gradient texture for snow point mapping
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        const texture = new THREE.CanvasTexture(canvas);

        const temp = [];
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 15;
            const y = Math.random() * 15;
            const z = (Math.random() - 0.5) * 15;
            // very slow speed and slight horizontal sway
            temp.push({ 
                position: [x, y, z], 
                speed: 0.005 + Math.random() * 0.01, 
                offset: Math.random() * Math.PI * 2,
                swaySpeed: 0.001 + Math.random() * 0.002
            });
            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
            spd[i] = temp[i].speed;
        }
        return { particles: temp, positions: pos, speeds: spd, snowTexture: texture };
    }, [count]);

    useFrame((state) => {
        if (!mesh.current?.geometry?.attributes?.position) return;
        const positionsArr = mesh.current.geometry.attributes.position.array;
        const time = state.clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            let x = positionsArr[i * 3];
            let y = positionsArr[i * 3 + 1];
            
            // Drop down like snow
            y -= speeds[i];
            
            // Add slight horizontal sway (sine wave) mapping to time/offset
            const offset = particles[i].offset;
            const sway = particles[i].swaySpeed;
            x += Math.sin(time * 0.5 + offset) * 0.002; // Using state.clock time
            
            if (y < -5) y = Math.random() * 5 + 10;
            
            positionsArr[i * 3] = x;
            positionsArr[i * 3 + 1] = y;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                map={snowTexture}
                color="#ffffff"
                size={0.12} // Reduced size for smaller particles
                transparent
                opacity={0.8}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default Particles;



