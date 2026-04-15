import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface Client {
  photo: string;
  audio: string;
  name: string;
  restaurant: string;
  location: string;
  photoLeft: boolean;
}

const clients: Client[] = [
  {
    photo: '/testimonials/social proof/client1.jpg.png',
    audio: '/testimonials/social proof/client1.mp3.MP3',
    name: 'Karim R.',
    restaurant: 'Al Bahar Restaurant',
    location: 'Dubai, UAE',
    photoLeft: true,
  },
  {
    photo: '/testimonials/social proof/client2.jpg.png',
    audio: '/testimonials/social proof/client2.mp3.MP3',
    name: 'James T.',
    restaurant: 'The Copper Plate',
    location: 'London, UK',
    photoLeft: false,
  },
  {
    photo: '/testimonials/social proof/client3.jpg.png',
    audio: '/testimonials/social proof/client3.mp3.MP3',
    name: 'Sofia M.',
    restaurant: 'Warung Sari',
    location: 'Bali, Indonesia',
    photoLeft: true,
  },
  {
    photo: '/testimonials/social proof/client4.jpg.png',
    audio: '/testimonials/social proof/client4.mp3.MP3',
    name: 'Michelle K.',
    restaurant: 'Harbor Bites',
    location: 'Miami, USA',
    photoLeft: false,
  },
];

function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  };

  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.4)',
        border: '1px solid rgba(0,255,133,0.2)',
        borderRadius: '12px',
        padding: '16px',
      }}
    >
      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '12px', letterSpacing: '0.05em' }}>
        🎙 Listen to their story
      </p>

      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        crossOrigin="anonymous"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={e => console.error('Audio failed to load:', src, e)}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#00FF85',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            boxShadow: '0 0 16px rgba(0,255,133,0.3)',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="1" width="4" height="12" rx="1.5" fill="#080c08" />
              <rect x="8" y="1" width="4" height="12" rx="1.5" fill="#080c08" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 1.8L12 7L3 12.2V1.8Z" fill="#080c08" />
            </svg>
          )}
        </button>

        {/* Progress + time */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div
            onClick={handleSeek}
            style={{
              height: '4px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '2px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00FF85, #00cc6a)',
                borderRadius: '2px',
                transition: 'width 0.1s linear',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.7rem', color: '#00FF85', fontFamily: 'monospace' }}>
              {fmt(currentTime)}
            </span>
            <span style={{ fontSize: '0.7rem', color: 'rgba(0,255,133,0.4)', fontFamily: 'monospace' }}>
              {fmt(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientCard({ client, index }: { client: Client; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fromLeft = client.photoLeft;

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(0,255,133,0.12)',
        borderRadius: '20px',
        background: 'rgba(0,255,133,0.03)',
        boxShadow: '0 0 40px rgba(0,255,133,0.06)',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateX(0)'
          : fromLeft
          ? 'translateX(-60px)'
          : 'translateX(60px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* Desktop: horizontal zigzag */}
      <div
        className="card-inner"
        style={{
          display: 'flex',
          flexDirection: fromLeft ? 'row' : 'row-reverse',
        }}
      >
        {/* Photo side — 45% */}
        <div style={{
          position: 'relative',
          width: '45%',
          flexShrink: 0,
          minHeight: '300px',
          maxHeight: '500px',
          background: '#0d120d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={client.photo}
            alt={client.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              borderRadius: fromLeft
                ? '20px 0 0 20px'
                : '0 20px 20px 0',
            }}
            onError={e => {
              (e.currentTarget as HTMLImageElement).src =
                `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=0a1a0f&color=00ff85&size=400`;
            }}
          />
          {/* Inner edge gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '80px',
              [fromLeft ? 'right' : 'left']: 0,
              background: fromLeft
                ? 'linear-gradient(to right, transparent, rgba(8,12,8,0.85))'
                : 'linear-gradient(to left, transparent, rgba(8,12,8,0.85))',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Info side — 55% */}
        <div
          style={{
            flex: 1,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {/* Name */}
          <div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: '1.6rem',
                color: '#ffffff',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {client.name}
            </h3>
            <p
              style={{
                color: '#00FF85',
                fontSize: '0.9rem',
                fontWeight: 400,
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <MapPin size={13} style={{ flexShrink: 0 }} />
              {client.restaurant} · {client.location}
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(0,255,133,0.2)' }} />

          {/* Audio player */}
          <AudioPlayer src={client.audio} />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      style={{
        position: 'relative',
        background: '#080c08',
        padding: '96px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Radial atmospheric glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,133,0.07), transparent 70%)',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#ffffff',
              lineHeight: 1.2,
              margin: '0 0 16px',
            }}
          >
            Real Clients. Real Results.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00FF85, #00cc6a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real Voices.
            </span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '1rem',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Hear directly from restaurant owners around the world.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {clients.map((c, i) => (
            <ClientCard key={i} client={c} index={i} />
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .card-inner {
            flex-direction: column !important;
          }
          .card-inner > div:first-child {
            width: 100% !important;
            min-height: 260px !important;
            max-height: 400px !important;
            border-radius: 20px 20px 0 0 !important;
          }
          .card-inner > div:first-child img {
            border-radius: 20px 20px 0 0 !important;
          }
          .card-inner > div:first-child > div {
            display: none;
          }
          .card-inner > div:last-child {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
