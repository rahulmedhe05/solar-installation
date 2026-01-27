import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
        >
          {/* Sun circle */}
          <circle cx="16" cy="16" r="8" fill="#FEF3C7" />
          {/* Solar panel */}
          <rect x="11" y="11" width="10" height="10" fill="#1E40AF" rx="1" />
          <line x1="11" y1="14.3" x2="21" y2="14.3" stroke="#60A5FA" strokeWidth="0.8" />
          <line x1="11" y1="17.6" x2="21" y2="17.6" stroke="#60A5FA" strokeWidth="0.8" />
          <line x1="14.3" y1="11" x2="14.3" y2="21" stroke="#60A5FA" strokeWidth="0.8" />
          <line x1="17.6" y1="11" x2="17.6" y2="21" stroke="#60A5FA" strokeWidth="0.8" />
          {/* Sun rays */}
          <line x1="16" y1="2" x2="16" y2="5" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="27" x2="16" y2="30" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="2" y1="16" x2="5" y2="16" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="27" y1="16" x2="30" y2="16" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="6" y1="6" x2="8" y2="8" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="24" x2="26" y2="26" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="6" y1="26" x2="8" y2="24" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="8" x2="26" y2="6" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
