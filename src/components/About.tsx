import { motion } from 'framer-motion';
import { Target, Lightbulb, BookOpen } from 'lucide-react';

const objectives = [
  'Tạo công cụ hỗ trợ học tập lịch sử thông minh',
  'Tăng hứng thú qua tương tác trực tiếp với robot',
  'Ứng dụng AI trả lời câu hỏi lịch sử tự nhiên',
  'Hỗ trợ giáo viên trong quá trình giảng dạy',
  'Góp phần triển khai giáo dục STEM trong nhà trường'
];

export function About() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-dark-800 relative border-t border-dark-700" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Lft Column - Context & Idea */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white">Bối cảnh thực tiễn</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Nhiều học sinh cảm thấy khó tiếp cận với lượng kiến thức lớn, nhiều sự kiện và mốc thời gian lịch sử khi học theo phương pháp truyền thống. Việc ứng dụng công nghệ mới như robot và trí tuệ nhân tạo sẽ tạo ra môi trường học tập tương tác, nâng cao hiệu quả và tăng cường sự chủ động, hứng thú cho học sinh.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white">Ý tưởng giải pháp</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Dự án <strong>Robot Lịch Sử 4.0</strong> là một robot trợ lý học tập thông minh có khả năng giao tiếp bằng giọng nói, hỏi đáp lịch sử tự nhiên.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Khi học sinh đặt câu hỏi, hệ thống nhận dạng giọng nói, AI phân tích nội dung và tạo câu trả lời. Robot trả lời bằng giọng nói và hiển thị biểu cảm trên màn hình. Robot mang hình dáng Creeper quen thuộc để tạo sự thân thiện, thu hút sự chú ý.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-900 border border-dark-700 p-8 lg:p-12 rounded-3xl h-fit"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Mục tiêu dự án</h2>
            </div>
            
            <ul className="space-y-6">
              {objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 min-w-6 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-sm font-bold text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    {idx + 1}
                  </div>
                  <span className="text-gray-300 text-lg">{objective}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
