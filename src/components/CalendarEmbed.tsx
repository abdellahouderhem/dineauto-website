import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Cal?: {
      (event: string, namespace: string, config?: Record<string, unknown>): void;
      ns: Record<string, {
        (method: string, config: Record<string, unknown>): void;
      }>;
    };
  }
}

export default function CalendarEmbed() {
  const hasInitedRef = useRef(false);

  useEffect(() => {
    const scriptId = 'cal-embed-js';
    let retries = 0;
    const maxRetries = 10;

    const initializeCalendar = () => {
      if (!window.Cal) {
        if (retries < maxRetries) {
          retries++;
          setTimeout(initializeCalendar, 200);
        }
        return;
      }

      if (hasInitedRef.current) {
        return;
      }

      hasInitedRef.current = true;

      try {
        window.Cal('init', 'freecall', { origin: 'https://app.cal.com' });
        window.Cal.ns.freecall('inline', {
          elementOrSelector: '#my-cal-inline-freecall',
          config: {
            layout: 'month_view',
            useSlotsViewOnSmallScreen: 'true',
            theme: 'dark',
          },
          calLink: 'abdellah-ouderhem/freecall',
        });
        window.Cal.ns.freecall('ui', {
          theme: 'dark',
          hideEventTypeDetails: true,
          layout: 'month_view',
        });
      } catch (error) {
        console.error('Error initializing Cal.com:', error);
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://app.cal.com/embed/embed.js';
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => {
        initializeCalendar();
      };

      script.onerror = () => {
        console.error('Failed to load Cal.com embed script');
      };

      document.body.appendChild(script);
    } else {
      initializeCalendar();
    }

    return () => {
      const container = document.getElementById('my-cal-inline-freecall');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '700px',
        overflow: 'hidden',
      }}
      id="my-cal-inline-freecall"
    />
  );
}
