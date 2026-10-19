import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'dashboard' | 'logo' | 'avatar';
  title?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'dashboard',
  title = 'Project Preview'
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallbackType === 'avatar') {
      return (
        <div className={`flex items-center justify-center bg-gradient-to-tr from-[#F37335] to-[#BE5EC6] text-white font-bold text-xl rounded-full ${className}`}>
          EO
        </div>
      );
    }

    if (fallbackType === 'logo') {
      return (
        <div className={`flex items-center justify-center bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg p-2 text-xs font-semibold text-[#18120F] ${className}`}>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F37335] to-[#BE5EC6] mr-1.5" />
          {title.slice(0, 3).toUpperCase()}
        </div>
      );
    }

    // Dashboard fallback
    return (
      <div className={`relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white rounded-xl overflow-hidden border border-[#334155]/40 p-5 flex flex-col justify-between ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="text-xs text-white/50 ml-2 font-mono">app.{title.toLowerCase().replace(/[^a-z]/g, '')}.internal</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/70 uppercase tracking-widest font-mono">Enterprise</span>
        </div>

        <div className="py-6 space-y-4">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs text-white/50">Core Metric Performance</p>
              <h4 className="text-2xl font-bold font-sans text-white mt-1">99.98% SLA</h4>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">+42.6% efficiency</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 p-2.5 rounded border border-white/5">
              <span className="text-[10px] text-white/40 block">Throughput</span>
              <span className="text-xs font-bold text-white">4.8k ops/s</span>
            </div>
            <div className="bg-white/5 p-2.5 rounded border border-white/5">
              <span className="text-[10px] text-white/40 block">Latency</span>
              <span className="text-xs font-bold text-white">&lt;14ms</span>
            </div>
            <div className="bg-white/5 p-2.5 rounded border border-white/5">
              <span className="text-[10px] text-white/40 block">Design Nodes</span>
              <span className="text-xs font-bold text-white">200+ tk</span>
            </div>
          </div>
        </div>

        <div className="h-10 bg-white/5 rounded flex items-center justify-center border border-white/10">
          <span className="text-xs text-white/60 font-sans tracking-wide">Interactive Dashboard Interface: {title}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
    />
  );
};
