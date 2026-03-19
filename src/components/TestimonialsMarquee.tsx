import { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const testimonials = [
  {
    name: 'James Thornton',
    username: '@jamest',
    body: 'We went from barely getting bookings online to having a fully automated system. DineAuto changed everything for us.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    country: 'United Kingdom',
  },
  {
    name: 'Sofia Al Mansoori',
    username: '@sofia_m',
    body: 'Our restaurant in Dubai was struggling with no-shows. Now we have automated reminders and our occupancy is up significantly.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    country: 'Dubai',
  },
  {
    name: 'Marco Vitali',
    username: '@marcov',
    body: 'The content they create from our phone photos looks like a professional studio shot. Our Instagram has never looked better.',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: 'Italy',
  },
  {
    name: 'Priya Nair',
    username: '@priyan',
    body: 'Within 30 days we had more Google reviews than the entire previous year. The automation just works while we focus on the food.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: 'India',
  },
  {
    name: 'David Okonkwo',
    username: '@davidok',
    body: 'I was skeptical at first but the AI reservation machine alone saved us hours every week. Customers can book at 2am and we never miss it.',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    country: 'USA',
  },
  {
    name: 'Camille Dubois',
    username: '@camilled',
    body: 'The ads strategy they use is different from anything we tried before. Lower cost, better customers, more repeat visits.',
    img: 'https://randomuser.me/api/portraits/women/33.jpg',
    country: 'France',
  },
  {
    name: 'Yusuf Al Rashidi',
    username: '@yusufalr',
    body: 'DineAuto built us a full system in 30 days. Content, ads, bookings, reviews — everything runs on autopilot now.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: 'Dubai',
  },
  {
    name: 'Anika Muller',
    username: '@anikam',
    body: 'Our slow nights are no longer slow. The comeback system brings back customers we thought we had lost forever.',
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
    country: 'Germany',
  },
  {
    name: 'Liam Nguyen',
    username: '@liamn',
    body: 'Best investment we made for the restaurant. The team genuinely cares about your results not just signing you up.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: 'Australia',
  },
];

const columns = [
  [testimonials[0], testimonials[1], testimonials[2]],
  [testimonials[3], testimonials[4], testimonials[5]],
  [testimonials[6], testimonials[7], testimonials[0]],
  [testimonials[1], testimonials[8], testimonials[6]],
];

interface TestimonialCardProps {
  name: string;
  username: string;
  body: string;
  img: string;
  country: string;
}

function TestimonialMarqueeCard({ name, username, body, img, country }: TestimonialCardProps) {
  return (
    <div className="group relative rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(0,255,100,0.15)',
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div
            className="absolute -inset-1 rounded-full blur-sm opacity-60"
            style={{ background: 'rgba(0,255,100,0.3)' }}
          />
          <Avatar.Root className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-green-500/40">
            <Avatar.Image
              className="aspect-square h-full w-full object-cover"
              src={img}
              alt={name}
            />
            <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-gray-800 text-sm text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white truncate">{name}</p>
          <p className="text-xs text-gray-500">{username}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-gray-300 mb-3">
        "{body}"
      </p>

      <div className="flex items-center gap-1.5 text-xs text-green-400/70">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span>{country}</span>
      </div>
    </div>
  );
}

interface MarqueeColumnProps {
  items: TestimonialCardProps[];
  reverse?: boolean;
  duration?: string;
}

function MarqueeColumn({ items, reverse = false, duration = '35s' }: MarqueeColumnProps) {
  const [hovered, setHovered] = useState(false);
  const animationClass = reverse ? 'animate-marquee-vertical-reverse' : 'animate-marquee-vertical';
  const repeated = Array.from({ length: 7 }, () => items).flat();

  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{ maxHeight: '600px', pointerEvents: 'auto' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent z-10 pointer-events-none" />

      <div
        className="flex flex-col"
        style={{ '--gap': '16px', '--duration': duration } as React.CSSProperties}
      >
        <div
          className={`flex flex-col gap-4 ${animationClass}`}
          style={{ animationPlayState: hovered ? 'paused' : 'running' }}
        >
          {repeated.map((item, idx) => (
            <TestimonialMarqueeCard key={`${item.username}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgb(3,7,18), rgb(5,10,24), rgb(3,7,18))' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-green-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            What Restaurant Owners Say About DineAuto
          </h2>
          <p className="text-green-400 text-lg sm:text-xl">
            Real results from real restaurants around the world
          </p>
        </div>

        <div
          className="relative mx-auto"
          style={{ perspective: '1200px' }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{
              transform: 'rotateX(8deg) rotateY(-5deg)',
              transformStyle: 'preserve-3d',
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              <MarqueeColumn items={columns[0]} duration="80s" />
            </div>
            <div style={{ pointerEvents: 'auto' }}>
              <MarqueeColumn items={columns[1]} reverse duration="88s" />
            </div>
            <div className="hidden sm:block" style={{ pointerEvents: 'auto' }}>
              <MarqueeColumn items={columns[2]} duration="84s" />
            </div>
            <div className="hidden lg:block" style={{ pointerEvents: 'auto' }}>
              <MarqueeColumn items={columns[3]} reverse duration="92s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
