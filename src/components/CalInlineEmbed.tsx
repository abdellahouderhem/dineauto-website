import { useEffect } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalInlineEmbed() {
  useEffect(() => {
    const scriptId = 'cal-embed-script';

    // Check if script is already loaded
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      // Load Cal.com embed script
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;

      script.onload = () => {
        initializeCal();
      };

      document.head.appendChild(script);
    } else {
      // Script already exists, initialize Cal
      initializeCal();
    }

    function initializeCal() {
      // Wait for Cal to be available on window
      const checkCal = setInterval(() => {
        if (window.Cal) {
          clearInterval(checkCal);

          // Initialize Cal namespace
          window.Cal('init', 'freecall', { origin: 'https://app.cal.com' });

          // Configure inline embed
          window.Cal.ns.freecall('inline', {
            elementOrSelector: '#my-cal-inline-freecall',
            config: {
              layout: 'month_view',
              useSlotsViewOnSmallScreen: true,
              theme: 'dark'
            },
            calLink: 'abdellah-ouderhem/freecall',
          });

          // Set UI preferences
          window.Cal.ns.freecall('ui', {
            theme: 'dark',
            hideEventTypeDetails: true,
            layout: 'month_view'
          });
        }
      }, 100);

      // Cleanup check after 5 seconds
      setTimeout(() => clearInterval(checkCal), 5000);
    }
  }, []);

  return (
    <div
      id="my-cal-inline-freecall"
      style={{
        width: '100%',
        height: '700px',
        overflow: 'auto'
      }}
    />
  );
}
