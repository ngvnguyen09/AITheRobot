export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 pt-16 pb-8 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
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
    </footer>
  );
}
