import { motion } from 'framer-motion';
import { Presentation, Lightbulb } from 'lucide-react';

const stats = [
  { label: 'Hứng thú học tập Lịch sử', value: '86%' },
  { label: 'Hiểu rõ sự kiện lịch sử', value: '80%' },
  { label: 'Tự tin đặt câu hỏi trực tiếp', value: '78%' },
  { label: 'Thấy robot dễ sử dụng', value: '88%' }
];

export function Impact() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-dark-800 relative border-t border-dark-700" id="impact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block mb-4">
            Hiệu Quả & Tính Mới
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kết quả khả quan từ quá trình thử nghiệm và triển khai tại môi trường phổ thông.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-900 border border-dark-700 p-8 rounded-3xl text-center group hover:border-primary-500/50 transition-colors"
            >
              <div className="text-5xl font-black text-white mb-2 group-hover:text-primary-400 transition-colors">
                {stat.value}
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 p-8 rounded-3xl bg-dark-900 border border-dark-700"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent-500/20 text-accent-400 flex items-center justify-center">
              <Presentation className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Tác Động Giáo Dục STEM</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Sản phẩm hỗ trợ giáo viên đổi mới phương pháp giảng dạy, giúp học sinh tiếp cận kiến thức lịch sử trực quan. Đồng thời phát triển năng lực tư duy công nghệ, sáng tạo không gian học tập (lớp học, thư viện, phòng lab STEM).
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex gap-6 p-8 rounded-3xl bg-dark-900 border border-dark-700"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center">
              <Lightbulb className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Tính Mới Đột Phá</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Thay thế việc đọc sách giáo khoa qua tương tác bằng giọng nói thời gian thực. Ít ứng dụng vào lịch sử thì nay tích hợp cả AI, STT, xử lý hình ảnh, và một robot hoạt hình sinh động, mở ra phương pháp dạy học thụ động thành chủ động.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
