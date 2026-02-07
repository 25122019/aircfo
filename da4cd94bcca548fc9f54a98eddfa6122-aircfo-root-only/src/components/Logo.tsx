import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-12 h-12">
        {/* Background stylized shape */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 rounded-xl rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-blue-500/20 shadow-lg" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 border border-white/20" />
        
        {/* Stylized 'A' */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 text-white z-10 drop-shadow-md"
        >
          <path d="M12 4L4 20" />
          <path d="M12 4L20 20" />
          <path d="M7 16H17" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span className="font-extrabold text-2xl leading-none tracking-tighter text-slate-900">
          AirCFO<span className="text-blue-600">.world</span>
        </span>
        <span className="text-[10px] font-bold text-blue-500/80 uppercase tracking-[0.2em] leading-none mt-1">
          Expert Reviews
        </span>
      </div>
    </Link>
  );
}
