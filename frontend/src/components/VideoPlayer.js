import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({
  src,
  poster = '',
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  className = '',
  style = {},
}) {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    if (video) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) video.play();
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }

      video.oncanplaythrough = () => setIsReady(true);
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={`object-cover ${className}`}
      style={{
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        ...style,
      }}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      controls={controls}
    />
  );
}
