/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useFrame } from "@react-three/fiber";
import { Billboard, useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import { setTargetImage } from "./actions";
import { useRef, useEffect, useMemo } from "react";

const thumbHeight = 35;

// Reusable vectors to avoid GC pressure on mobile
const _vec2a = new THREE.Vector2();
const _vec2b = new THREE.Vector2();
const _vec3 = new THREE.Vector3();

// Create a proper play triangle geometry once (pointing RIGHT ▶)
const playTriangleGeo = (() => {
  const shape = new THREE.Shape();
  const s = thumbHeight * 0.3;
  // Equilateral triangle pointing right
  shape.moveTo(-s * 0.5, -s * 0.6);
  shape.lineTo(-s * 0.5,  s * 0.6);
  shape.lineTo( s * 0.7,  0);
  shape.closePath();
  return new THREE.ShapeGeometry(shape);
})();

function useUVAnimation(texture, highlight, aspectRef, materialRef, opacity) {
  useEffect(() => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
      let w = texture.image?.width || texture.image?.videoWidth || 1;
      let h = texture.image?.height || texture.image?.videoHeight || 1;
      if (h > 0) {
        aspectRef.current = w / h;
      }
    }
  }, [texture]);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, opacity, delta * 4);
    }
    
    if (texture) {
       const aspect = aspectRef.current;
       if (isFinite(aspect) && aspect > 0) {
           if (highlight) {
              texture.repeat.lerp(_vec2a.set(1, 1), delta * 5);
              texture.offset.lerp(_vec2b.set(0, 0), delta * 5);
           } else {
              if (aspect > 1) { 
                 const repeatX = 1 / aspect;
                 texture.repeat.lerp(_vec2a.set(repeatX, 1), delta * 5);
                 texture.offset.lerp(_vec2b.set((1 - repeatX) / 2, 0), delta * 5);
              } else { 
                 const repeatY = aspect;
                 texture.repeat.lerp(_vec2a.set(1, repeatY), delta * 5);
                 texture.offset.lerp(_vec2b.set(0, (1 - repeatY) / 2), delta * 5);
              }
           }
       }
    }
  });
}

function ImageMaterial({ url, highlight, opacity, aspectRef }) {
  const texture = useTexture(url);
  const materialRef = useRef();
  useUVAnimation(texture, highlight, aspectRef, materialRef, opacity);

  return (
    <meshBasicMaterial
      ref={materialRef}
      map={texture}
      color="#fff"
      transparent
      opacity={0} 
      depthTest={!highlight}
    />
  );
}

function VideoMaterial({ url, highlight, opacity, aspectRef }) {
  const texture = useVideoTexture(url, { crossOrigin: "Anonymous", muted: true, loop: true, playsInline: true });
  const materialRef = useRef();
  useUVAnimation(texture, highlight, aspectRef, materialRef, opacity);

  return (
    <meshBasicMaterial
      ref={materialRef}
      map={texture}
      color="#fff"
      transparent
      opacity={0} 
      depthTest={!highlight}
    />
  );
}

export default function PhotoNode({
  id,
  url,
  x = 0,
  y = 0,
  z = 0,
  highlight,
  dim,
}) {
  const isVideo = /\.(mp4|webm|mkv|mov)(\?.*)?$/i.test(url || id);
  const cleanUrl = typeof url === 'string' ? url : id.split('?')[0];
  
  const opacity = highlight ? 1 : dim ? 0.3 : 1;
  const aspectRef = useRef(1);
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      const aspect = aspectRef.current;
      const targetScaleX = highlight ? thumbHeight * 4 * aspect : thumbHeight;
      const targetScaleY = highlight ? thumbHeight * 4 : thumbHeight;
      meshRef.current.scale.lerp(_vec3.set(targetScaleX, targetScaleY, 1), delta * 5);
    }
  });

  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        setTargetImage(id);
      }}
      position={[x * 400, y * 400, z * 400]}
      renderOrder={highlight ? 10 : 0}
    >
      <Billboard>
        <mesh ref={meshRef} scale={[thumbHeight, thumbHeight, 1]}>
          <planeGeometry />
          {isVideo ? (
            <VideoMaterial url={cleanUrl} highlight={highlight} opacity={opacity} aspectRef={aspectRef} />
          ) : (
            <ImageMaterial url={cleanUrl} highlight={highlight} opacity={opacity} aspectRef={aspectRef} />
          )}
        </mesh>
        
        {/* Play icon ▶ for videos */}
        {isVideo && !highlight && (
          <mesh position={[0, 0, 0.2]} geometry={playTriangleGeo}>
            <meshBasicMaterial color="#ffffff" transparent opacity={0.85} side={THREE.DoubleSide} />
          </mesh>
        )}
      </Billboard>
    </group>
  );
}
