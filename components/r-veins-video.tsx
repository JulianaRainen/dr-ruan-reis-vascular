'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export function RVeinsVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;

    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    video.defaultMuted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      void video.play().catch(() => undefined);
    }
  }

  return (
    <div className="video-frame scroll-reveal is-visible" data-reveal>
      <video ref={videoRef} autoPlay muted loop playsInline poster="/RuanReis.jpg">
        <source src="/Protocolo%20RVeins.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="video-sound-toggle"
        aria-pressed={!isMuted}
        aria-label={isMuted ? 'Ativar som do vídeo R-Veins' : 'Silenciar vídeo R-Veins'}
        onClick={toggleSound}
      >
        {isMuted ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
        <span>{isMuted ? 'Ativar som' : 'Silenciar'}</span>
      </button>
      <span>R-Veins · tecnologia com indicação médica</span>
    </div>
  );
}
