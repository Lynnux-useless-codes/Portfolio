import { useRef } from 'react';

export default function timetravler() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRedirect = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      window.location.href = iframe.src;
    }
  };

  return (
    <div className="relative">
      <iframe
        ref={iframeRef}
        className='fulliframe nohello'
        scrolling="yes"
        title="noHello"
        src="/iframes/timer.html"
        allowFullScreen
      ></iframe>
      <button onClick={handleRedirect} className="fullscreen-button">Full Screen</button>
    </div>
  );
}
