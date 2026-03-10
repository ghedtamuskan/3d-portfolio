import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 150 }) => {
    const mesh = useRef();

    const { particles, positions, speeds } = useMemo(() => {
        const temp = [];
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = Math.random() * 10 + 5;
            const z = (Math.random() - 0.5) * 10;
            temp.push({ position: [x, y, z], speed: 0.005 + Math.random() * 0.001 });
            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
            spd[i] = temp[i].speed;
        }
        return { particles: temp, positions: pos, speeds: spd };
    }, [count]);

    useFrame(() => {
        if (!mesh.current?.geometry?.attributes?.position) return;
        const positionsArr = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            let y = positionsArr[i * 3 + 1];
            y -= speeds[i];
            if (y < -2) y = Math.random() * 10 + 5;
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
                color="#ffffff"
                size={0.07}
                transparent
                opacity={1}
                depthWrite={false}
            />
        </points>
    );
};

export default Particles;



