import { motion } from 'framer-motion';
import { Microscope, Cpu, Wrench, Calculator } from 'lucide-react';

const steps = [
  { id: 1, title: 'Xác định vấn đề', desc: 'Học sinh gặp khó khăn do lượng kiến thức lớn, phương pháp học truyền thống thiếu tương tác.' },
  { id: 2, title: 'Nghiên cứu kiến thức', desc: 'Lịch sử Việt Nam, AI, xử lý ngôn ngữ tự nhiên, robot giáo dục, xử lý hình ảnh và giọng nói.' },
  { id: 3, title: 'Đề xuất giải pháp', desc: 'Chọn robot AI vì tạo trải nghiệm học trực tiếp, sinh động hơn website hay chatbot thông thường.' },
  { id: 4, title: 'Thiết kế sản phẩm', desc: 'Sử dụng Raspberry Pi, ESP32, micro, loa, webcam và màn hình LCD biểu cảm.' },
  { id: 5, title: 'Chế tạo, lập trình', desc: 'Lắp ráp phần cứng, lập trình hệ thống AI, tích hợp các API xử lý giọng nói.' },
  { id: 6, title: 'Thử nghiệm', desc: 'Đánh giá khả năng nhận diện giọng nói, độ chính xác AI, và tốc độ phản hồi.' },
  { id: 7, title: 'Cải tiến', desc: 'Cải thiện micro, tối ưu phần mềm, và bổ sung thêm các biểu cảm trên LCD.' },
];

const stemFields = [
  { icon: <Microscope className="w-8 h-8 text-blue-400" />, title: 'Science (Khoa học)', desc: 'Xử lý âm thanh trong nhận diện giọng nói, nguyên lý xử lý hình ảnh (OpenCV).' },
  { icon: <Cpu className="w-8 h-8 text-purple-400" />, title: 'Technology (Công nghệ)', desc: 'Ứng dụng AI, Speech-to-Text, Text-to-Speech, Gemini API, Raspberry Pi, ESP32.' },
  { icon: <Wrench className="w-8 h-8 text-orange-400" />, title: 'Engineering (Kỹ thuật)', desc: 'Thiết kế cấu trúc robot, tích hợp linh kiện điện tử, xây dựng hệ thống tương tác.' },
  { icon: <Calculator className="w-8 h-8 text-green-400" />, title: 'Mathematics (Toán học)', desc: 'Thuật toán xử lý dữ liệu, AI, tính toán tín hiệu âm thanh và hình ảnh.' }
];

export function Process() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-dark-900 relative" id="process">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* EDP Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block mb-4">
              Quy Trình Thiết Kế Kỹ Thuật
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Phát triển theo quy trình 7 bước (Engineering Design Process) để đảm bảo chất lượng và khả năng ứng dụng thực tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700 relative overflow-hidden group"
              >
                <div className="text-6xl font-black text-dark-700 absolute -bottom-4 -right-2 z-0 group-hover:text-dark-600 transition-colors">
                  0{step.id}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STEM Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ứng Dụng Giáo Dục <span className="text-primary-500">STEM</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Sản phẩm giúp phát triển tư duy khoa học, sáng tạo thông qua 4 lĩnh vực: Khoa học, Công nghệ, Kỹ thuật và Toán học.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stemFields.map((field, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-6 bg-gradient-to-br from-dark-800 to-dark-900 p-8 rounded-3xl border border-dark-700 hover:border-dark-600 transition-colors"
               >
                <div className="bg-dark-700 p-4 rounded-2xl shrink-0">
                  {field.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{field.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{field.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
