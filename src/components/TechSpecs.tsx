import { motion } from 'framer-motion';
import { Mic, FileText, BrainCircuit, Volume2, MonitorPlay, Component, Cpu } from 'lucide-react';

const archLayers = [
  { icon: <Mic className="w-6 h-6" />, title: '1. Input Layer', desc: 'Robot thu nhận giọng nói câu hỏi của học sinh qua hệ thống micro.' },
  { icon: <FileText className="w-6 h-6" />, title: '2. Speech-to-Text Layer', desc: 'Chuyển đổi tín hiệu âm thanh thu được thành văn bản.' },
  { icon: <BrainCircuit className="w-6 h-6" />, title: '3. AI Processing Layer', desc: 'Gemini AI phân tích nội dung, xác định chủ đề lịch sử và tạo câu trả lời.' },
  { icon: <Volume2 className="w-6 h-6" />, title: '4. Response Generation Layer', desc: 'Chuyển đổi câu trả lời văn bản thành âm thanh qua Text-to-Speech.' },
  { icon: <MonitorPlay className="w-6 h-6" />, title: '5. Interaction Layer', desc: 'Hiển thị biểu cảm trên màn hình LCD, dùng OpenCV nhận diện khuôn mặt.' }
];

const hardwareComponents = [
  { id: 1, name: 'Raspberry Pi 4 Model B', role: 'Bộ xử lý trung tâm' },
  { id: 2, name: 'Mô-đun ESP32', role: 'Điều khiển LCD và biểu cảm' },
  { id: 3, name: 'Màn hình LCD IPS 11 inch', role: 'Hiển thị mặt robot và nội dung minh họa' },
  { id: 4, name: 'Micro & Loa mini', role: 'Thu âm giọng nói & Phát câu trả lời' },
  { id: 5, name: 'Webcam', role: 'Nhận diện khuôn mặt học sinh' },
  { id: 6, name: 'Robot Creeper Formex', role: 'Khung vỏ vật lý tái chế thân thiện' },
];

export function TechSpecs() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-dark-800 relative border-t border-dark-700" id="tech-specs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Architecture */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-primary-500 inline-block mb-4">
                Kiến Trúc Hệ Thống AI
              </h2>
              <p className="text-gray-400">
                Xây dựng theo kiến trúc đa lớp kết hợp xử lý giọng nói, phân tích ngôn ngữ tự nhiên và tạo phản hồi tức thì.
              </p>
            </div>

            <div className="space-y-4">
              {archLayers.map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-dark-900 border border-dark-700 hover:border-dark-600 transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-500">
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{layer.title}</h3>
                    <p className="text-sm text-gray-400">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Hardware */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Cpu className="text-primary-500 w-8 h-8" />
                Phần Cứng Sản Phẩm
              </h2>
              <p className="text-gray-400">
                Sản phẩm cao 1,3 m, thiết kế dễ sử dụng, vật liệu Formex an toàn và tối ưu chi phí chế tạo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hardwareComponents.map((component, idx) => (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-dark-900 p-5 rounded-2xl border border-dark-700 flex flex-col gap-2 relative overflow-hidden group hover:border-primary-500/50 transition-colors"
                >
                  <Component className="absolute -bottom-4 -right-4 w-24 h-24 text-dark-800 z-0 group-hover:text-dark-700 transition-colors" />
                  <div className="relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-dark-800 text-xs font-medium text-gray-300 mb-2">
                       Linh kiện {component.id}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">{component.name}</h3>
                    <p className="text-sm text-primary-400">{component.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
