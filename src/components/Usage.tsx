import { motion } from 'framer-motion';
import { Power, Wifi, Mic, Bot, MessageSquareText, RefreshCw } from 'lucide-react';

const usageSteps = [
  { icon: <Power className="w-8 h-8" />, title: 'Bước 1: Khởi động hệ thống', desc: 'Cấp nguồn điện và khởi động hệ điều hành trên Raspberry Pi 4. Robot tự động kích hoạt.' },
  { icon: <Wifi className="w-8 h-8" />, title: 'Bước 2: Kết nối hệ thống AI', desc: 'Kết nối mạng Internet để truy cập các dịch vụ AI như Speech-to-Text, Gemini API.' },
  { icon: <Mic className="w-8 h-8" />, title: 'Bước 3: Tiếp nhận câu hỏi', desc: 'Học sinh đặt câu hỏi về nhân vật, sự kiện lịch sử qua micro thu âm.' },
  { icon: <Bot className="w-8 h-8" />, title: 'Bước 4: Xử lý dữ liệu AI', desc: 'Âm thanh chuyển thành văn bản, AI phân tích nội dung và tạo câu trả lời phù hợp.' },
  { icon: <MessageSquareText className="w-8 h-8" />, title: 'Bước 5: Phản hồi & tương tác', desc: 'Phát câu trả lời qua giọng nói, LCD hiển thị biểu cảm hoặc hình ảnh minh họa.' },
  { icon: <RefreshCw className="w-8 h-8" />, title: 'Bước 6: Tương tác liên tục', desc: 'Robot tiếp tục ở trạng thái sẵn sàng lắng nghe câu hỏi tiếp theo từ người dùng.' },
];

export function Usage() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-dark-900 relative" id="usage">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block mb-4">
            Cách Thức Sử Dụng & Vận Hành
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Robot Lịch Sử 4.0 được thiết kế để sử dụng đơn giản, thuật tiện trong không gian lớp học STEM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usageSteps.map((step, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-dark-800 p-8 rounded-3xl border border-dark-700 relative overflow-hidden group hover:border-primary-500/50 hover:bg-dark-700/50 transition-all cursor-default"
             >
               <div className="w-16 h-16 rounded-2xl bg-dark-700 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 group-hover:bg-primary-500/10 transition-transform">
                 {step.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
               <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
