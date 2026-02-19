import { useEffect } from 'react';

export default function CalendarEmbed() {
  useEffect(() => {
    const scriptId = 'cal-embed-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://app.cal.com/embed/embed.js';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        if (window.Cal) {
          window.Cal('init', 'freecall', { origin: 'https://app.cal.com' });
          window.Cal.ns.freecall('inline', {
            elementOrSelector: '#my-cal-inline-freecall',
            config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark' },
            calLink: 'abdellah-ouderhem/freecall',
          });
          window.Cal.ns.freecall('ui', { theme: 'dark', hideEventTypeDetails: true, layout: 'month_view' });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '700px',
        overflow: 'scroll',
      }}
      id="my-cal-inline-freecall"
    />
  );
}
