
import { motion } from 'framer-motion';
import { Bot, ShieldCheck, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary-500" />,
    title: 'Giao Tiếp Giọng Nói',
    description: 'Chuyển đổi âm thanh thành văn bản và ngược lại (Speech-to-Text & Text-to-Speech), tạo trải nghiệm tương tác trực tiếp tự nhiên.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent-500" />,
    title: 'Trí Tuệ Nhân Tạo (AI)',
    description: 'Tích hợp mô hình Gemini AI để xử lý, phân tích câu hỏi và trả lời thông tin lịch sử một cách chính xác, nhanh chóng.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: 'Tương Tác Trực Quan',
    description: 'Thiết kế Creeper độc đáo, đi kèm màn hình LCD hiển thị biểu cảm linh hoạt và nhận diện khuôn mặt qua thư viện OpenCV.',
  },
  {
    icon: <Target className="w-8 h-8 text-red-500" />,
    title: 'Giáo Dục STEM',
    description: 'Khuyến khích tư duy khoa học, sáng tạo, và kỹ năng giải quyết vấn đề qua sự kết hợp Khoa học, Công nghệ, Kỹ thuật và Toán học.',
  }
];

export function Features() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block mb-4">
            Giá trị Cốt lõi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sự khác biệt của hệ sinh thái AI đến từ cách tiếp cận tư duy đa tầng và bảo mật tối đa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 p-8 rounded-2xl border border-dark-700 hover:border-dark-600 transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-dark-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
