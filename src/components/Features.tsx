
import { motion } from 'framer-motion';
import { Bot, ShieldCheck, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary-500" />,
    title: 'AI First',
    description: 'Ứng dụng trí tuệ nhân tạo để phân tích dữ liệu đầu vào. Giải pháp gồm mô hình Robot Creeper 1M3 giao tiếp trực tiếp và Chatbot AI 24/7.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent-500" />,
    title: 'Xử Lý Dữ Liệu 3 Lớp',
    description: 'Hệ thống AI xử lý mạnh mẽ: Thu nhận dữ liệu (Input), phân tích dữ liệu bằng LLM (Processing) và tự động xuất lộ trình tối ưu (Recommendation).',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: 'Security First',
    description: 'Thiết kế hệ thống theo nguyên tắc tối thiểu hóa dữ liệu, đảm bảo bảo mật và AI vận hành có trách nhiệm với người dùng.',
  },
  {
    icon: <Target className="w-8 h-8 text-red-500" />,
    title: 'Outcome-Based Thinking',
    description: 'Tập trung vào kết quả: hỗ trợ học sinh tối ưu nguyện vọng, giảm rủi ro và giảm áp lực tư vấn cho hệ thống nhà trường.',
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
