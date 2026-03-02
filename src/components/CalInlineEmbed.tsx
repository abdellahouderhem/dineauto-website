import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalInlineEmbed() {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'cal-embed-script';

    // Initialize Cal function (from original Cal.com embed code)
    const initCalLoader = () => {
      if (!window.Cal) {
        (function (C: any, A: string, L: string) {
          let p = function (a: any, ar: any) {
            a.q.push(ar);
          };
          let d = C.document;
          C.Cal =
            C.Cal ||
            function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement('script')).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () {
                  p(api, arguments);
                };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === 'string') {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ['initNamespace', namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');
      }
    };

    // Initialize the loader
    initCalLoader();

    // Wait a bit for Cal to be ready, then initialize
    const timer = setTimeout(() => {
      if (window.Cal) {
        // Initialize namespace
        window.Cal('init', 'freecall', { origin: 'https://app.cal.com' });

        // Configure inline embed
        window.Cal.ns.freecall('inline', {
          elementOrSelector: '#my-cal-inline-freecall',
          config: {
            layout: 'month_view',
            useSlotsViewOnSmallScreen: 'true',
            theme: 'dark'
          },
          calLink: 'abdellah-ouderhem/freecall'
        });

        // Set UI preferences
        window.Cal.ns.freecall('ui', {
          theme: 'dark',
          hideEventTypeDetails: true,
          layout: 'month_view'
        });
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="my-cal-inline-freecall"
      ref={calendarRef}
      style={{
        width: '100%',
        height: '700px',
        overflow: 'scroll'
      }}
    />
  );
}
