import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { BotModel } from './BotModel';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 lg:px-24 overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 z-10 pt-10 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Dream High, Fly High Logo" className="w-16 h-16 object-contain" />
            <span className="inline-block py-1 px-3 rounded-full bg-dark-800 border border-dark-700 text-sm font-medium text-primary-500">
              Đội thi: Dream High, Fly High
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            ROBOT LỊCH SỬ <br />
            <span className="text-primary-500">CREEPER 1M3</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-xl"
        >
          Robot trợ lý học tập ứng dụng trí tuệ nhân tạo, giao tiếp qua giọng nói giúp học sinh THPT tìm hiểu kiến thức lịch sử trực quan, sinh động và thúc đẩy giáo dục STEM.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mt-6"
        >
          <a href="https://tramlichsu.nctitc.io.vn" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] block text-center">
            Khám phá hệ sinh thái
          </a>
          <Link to="/gallery" className="px-8 py-4 rounded-full bg-dark-800 border border-dark-700 hover:bg-dark-700 text-white font-semibold transition-all">
            Xem hình ảnh hoạt động
          </Link>
        </motion.div>
      </div>

      {/* 3D Model Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative mt-10 md:mt-0 cursor-grab active:cursor-grabbing"
      >
        <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <spotLight position={[-10, 10, -5]} intensity={1} color="#3b82f6" />
          
          <Suspense fallback={null}>
            <BotModel />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} autoRotate={false} />
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  );
}
