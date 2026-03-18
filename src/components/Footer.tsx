export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 pt-16 pb-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* School Map Section */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="w-full lg:w-1/3 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-primary-500 text-3xl">📍</span> Vị trí của dự án
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Trạm Lịch Sử 4.0 và Robot Creeper 1M3 được phát triển và tối ưu hóa hệ sinh thái học tập ngay tại khuôn viên trường.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 h-[350px] relative rounded-2xl overflow-hidden border border-dark-700 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1LUBUeO2ianlYe0CtJ_zYr8fGOn5DSbI&ehbc=2E312F&noprof=1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="w-full h-px bg-dark-800/80"></div>

        {/* Existing Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Dream High, Fly High Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">Dream High, Fly High</span>
              <span className="text-primary-500 text-sm">Trạm Lịch Sử 4.0</span>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p className="mb-1">Dự án Robot Lịch Sử 4.0 - Trợ lý học tập thông minh.</p>
            <p>&copy; {new Date().getFullYear()} Nhóm Dream High, Fly High. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
