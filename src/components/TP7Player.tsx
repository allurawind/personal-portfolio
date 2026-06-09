'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const AUDIO_SRC = '/assets/avenax-somebody-amplift-remix.mp3';

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default function TP7Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const updateTime = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateTime);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateTime);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [updateTime]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      void audio.play();
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full px-1">
      <div className="tp7-player-scale border border-divider p-[6px] flex flex-col gap-[6px]">
        <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />

        <div className="flex items-center gap-[9px]">
          <div
            className={`relative shrink-0 w-9 h-9 rounded-full border border-primary flex items-center justify-center ${
              isPlaying ? 'animate-spin-disc' : ''
            }`}
          >
            <div className="w-[21px] h-[21px] rounded-full border border-primary/60" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[5px] bg-primary" />
            <div className="absolute w-[4px] h-[4px] rounded-full bg-primary" />
          </div>

          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="font-mono text-[8px] uppercase text-white leading-tight truncate">
              Somebody (Amplift Remix)
            </span>
            <span className="font-mono text-[8px] uppercase text-secondary leading-tight">
              Avenax
            </span>
          </div>
        </div>

        <div
          ref={progressRef}
          role="slider"
          aria-label="Playback progress"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          tabIndex={0}
          className="h-[2px] bg-divider cursor-pointer relative"
          onClick={seek}
          onKeyDown={(e) => {
            const audio = audioRef.current;
            if (!audio) return;
            if (e.key === 'ArrowRight') audio.currentTime = Math.min(duration, currentTime + 5);
            if (e.key === 'ArrowLeft') audio.currentTime = Math.max(0, currentTime - 5);
          }}
        >
          <div className="h-full bg-primary transition-none" style={{ width: `${progress}%` }} />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={togglePlay}
            className={`font-mono text-[9px] px-1.5 py-0.5 transition-colors border ${
              isPlaying
                ? 'text-primary border-primary'
                : 'text-secondary border-transparent hover:text-primary'
            }`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <span className="font-mono text-[8px] text-secondary tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
