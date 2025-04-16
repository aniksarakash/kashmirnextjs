'use client';

/**
 * VideoBackground Component
 *
 * A reusable component that displays a video background with fallback image.
 * Handles video loading, error states, and provides play/pause controls.
 *
 * @author Anik Sarker Akash
 * @update 2023-07-15 - Improved content positioning by adding flex centering to the content container
 *                     to ensure proper alignment of child elements.
 */

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function VideoBackground({
  videoSrc = '/videos/hero/kashmir-landscape.mp4',
  posterSrc = '/images/hero/hero-bg.jpg',
  overlay = true,
  children,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Set loaded after a small timeout to show content regardless
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if video file exists
    const checkVideoExists = async () => {
      try {
        const response = await fetch(videoSrc, { method: 'HEAD' });
        if (!response.ok) {
          setHasError(true);
        }
      } catch (error) {
        console.error('Error checking video:', error);
        setHasError(true);
      }
    };

    checkVideoExists();
  }, [videoSrc]);

  useEffect(() => {
    if (hasError) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      } else {
        if (isPlaying && videoRef.current) {
          videoRef.current.play().catch(() => {
            // Auto-play blocked, keep video paused
            setIsPlaying(false);
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying, hasError]);

  const handlePlayPause = () => {
    if (hasError) return;

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Handle browser policies that prevent auto-play
          console.log('Play prevented by browser');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoLoaded = () => {
    setIsLoaded(true);

    // Try autoplay on load
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play blocked, keep video paused
        setIsPlaying(false);
      });
    }
  };

  const handleVideoError = () => {
    console.log('Video error occurred');
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Fallback background image or gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        {posterSrc && (
          <Image
            src={posterSrc}
            alt="Background"
            fill
            className="object-cover opacity-70"
            priority
            onError={() => console.log('Poster image failed to load')}
          />
        )}
      </div>

      {/* Video element - only render if no error */}
      {!hasError && (
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster={posterSrc}
          playsInline
          muted
          loop
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Gradient overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-[1]"></div>
      )}

      {/* Play/Pause button - only show if video is working and loaded */}
      {!hasError && isLoaded && (
        <button
          onClick={handlePlayPause}
          className="absolute bottom-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 backdrop-blur-sm transition-all duration-300"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      )}

      {/* Content - Using flex centering for proper alignment of child elements */}
      {/* Added h-full and w-full to ensure the container takes up the full space of its parent */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">{children}</div>
    </div>
  );
}
