/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import PhotoViz from "./PhotoViz";
import useStore from "./store";
import { setTargetImage, navigateImage } from "./actions";
import { Link } from "react-router-dom";

const btnStyle = {
  padding: '12px 24px',
  fontSize: '1.1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.3)',
  borderRadius: '30px',
  cursor: 'pointer',
  backdropFilter: 'blur(10px)',
  pointerEvents: 'auto',
  zIndex: 10,
  transition: 'all 0.4s ease',
};

const arrowBtn = {
  ...btnStyle,
  width: '50px',
  height: '50px',
  padding: 0,
  borderRadius: '50%',
  fontSize: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Gallery() {
  const targetImage = useStore.use.targetImage();
  const images = useStore.use.images();

  // Open first image when "Xem ảnh" is clicked
  const handleViewPhotos = () => {
    if (images && images.length > 0) {
      setTargetImage(images[0].id);
    }
  };

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#111' }}>
      <PhotoViz />
      
      {/* Back button to Home */}
      <Link 
        to="/"
        style={{
          ...arrowBtn,
          position: 'absolute',
          top: '20px',
          left: '20px',
          textDecoration: 'none',
          fontSize: '1.2rem',
          width: '45px',
          height: '45px',
        }}
      >
        ✕
      </Link>

      {/* Title - centered on screen */}
      <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: targetImage 
            ? 'translate(-50%, -50%) scale(0.6)' 
            : 'translate(-50%, -50%)',
          opacity: targetImage ? 0 : 1,
          textAlign: 'center',
          pointerEvents: 'none',
          transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          color: 'white',
          textShadow: '0 4px 20px rgba(0,0,0,0.9)',
          whiteSpace: 'nowrap',
        }}>
          Dự án Trạm lịch sử 4.0
      </div>

      {/* "Xem ảnh" button - normal view */}
      <button
        onClick={handleViewPhotos}
        style={{
          ...btnStyle,
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: !targetImage ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(80px)',
          opacity: !targetImage ? 1 : 0,
        }}
      >
        📷 Xem ảnh
      </button>

      {/* Viewer controls - only when an image is selected */}
      {/* Previous arrow */}
      <button
        onClick={() => navigateImage(-1)}
        style={{
          ...arrowBtn,
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: targetImage ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)',
          opacity: targetImage ? 1 : 0,
        }}
      >
        ‹
      </button>

      {/* Next arrow */}
      <button
        onClick={() => navigateImage(1)}
        style={{
          ...arrowBtn,
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: targetImage ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)',
          opacity: targetImage ? 1 : 0,
        }}
      >
        ›
      </button>

      {/* Back to sphere button */}
      <button
        onClick={() => setTargetImage(null)}
        style={{
          ...btnStyle,
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          transform: targetImage ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
          opacity: targetImage ? 1 : 0,
        }}
      >
        Trở lại khối cầu
      </button>
    </main>
  );
}
