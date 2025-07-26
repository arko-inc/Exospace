'use client';
import { MoveRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { HeroStoryItem, HeroStoryProps } from '@/types/HeroStory';

export default function HeroStory({ stories: propStories }: HeroStoryProps) {
  const [stories, setStories] = useState<HeroStoryItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loaderRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to handle ref assignment
  const setLoaderRef = (index: number) => (el: HTMLDivElement | null) => {
    loaderRefs.current[index] = el;
  };

  // Load stories from JSON if not provided via props
  useEffect(() => {
    const loadStories = async () => {
      if (propStories) {
        setStories(propStories);
        return;
      }

      try {
        const response = await fetch('/management/hero/images.json');
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error('Failed to load hero stories:', error);
      }
    };

    loadStories();
  }, [propStories]);

  // Handle story progression
  useEffect(() => {
    if (stories.length === 0 || isPaused) return;

    const currentStory = stories[currentIndex];
    
    // Reset all loaders
    loaderRefs.current.forEach((loader, index) => {
      if (!loader) return;
      loader.style.transition = 'none';
      loader.style.width = index < currentIndex ? '100%' : '0%';
    });

    // Animate current loader
    setTimeout(() => {
      const currentLoader = loaderRefs.current[currentIndex];
      if (currentLoader) {
        currentLoader.style.transition = `width ${currentStory.duration}ms linear`;
        currentLoader.style.width = '100%';
      }
    }, 50);

    // Set timeout for next story
    timeoutRef.current = setTimeout(() => {
      nextStory();
    }, currentStory.duration);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, stories, isPaused]);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const pause = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Pause loader animation
    const currentLoader = loaderRefs.current[currentIndex];
    if (currentLoader) {
      const computedStyle = getComputedStyle(currentLoader);
      const currentWidth = parseFloat(computedStyle.width);
      currentLoader.style.transition = 'none';
      currentLoader.style.width = `${currentWidth}%`;
    }
  };

  const resume = () => {
    setIsPaused(false);
  };

  if (stories.length === 0) {
    return (
      <div className="w-full bg-black h-full">
      </div>
    );
  }

  const currentStory = stories[currentIndex];

  return (
    <div 
      className="relative w-full h-[38rem] mt-4 bg-black overflow-hidden"
    >
      
      {/* Loader indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex gap-1 px-4 z-10">
        {stories.map((_, index) => (
          <div 
            key={index}
            className="h-1 bg-gray-500 bg-opacity-50 flex-grow rounded-full overflow-hidden"
          >
            <div 
              ref={setLoaderRef(index)}
              className="h-full bg-white loader-bar"
              style={{ width: index < currentIndex ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div>

      {/* Story image */}
      <img
        src={currentStory.image}
        alt={currentStory.header}
        className="w-full h-full object-cover"
      />

      {/* Text overlay */}
      <div className="absolute bottom-20 left-0 p-6 text-white max-w-xl">
        <h2 className="text-[4rem] md:text-[5rem] font-thin mb-2 drop-shadow-lg">
          {currentStory.header}
        </h2>
        <p className="text-lg md:text-xl drop-shadow-lg font-thin">
          {currentStory.paragraph}
        </p>
      </div>

      {/* Link button */}
      <a
        href={currentStory.link}
        className="absolute bottom-24 right-28 bg-white text-black px-4 py-2 font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
      >
        Learn more <MoveRight />
      </a>

      {/* Navigation controls */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 cursor-pointer"
        onClick={prevStory}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 cursor-pointer"
        onClick={nextStory}
      />
    </div>
  );
}