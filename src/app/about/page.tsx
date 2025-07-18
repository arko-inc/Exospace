"use client";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";

const AboutPage = () => {
  const timelineData = [
    {
      title: "The Genesis",
      content: (
        <div className="text-gray-400">
          <p>
            In the year 2042, amidst the swirling dust of a world grappling with climate change, 
            a small team of dreamers and scientists founded Exospace. Our mission: to make humanity 
            a multi-planetary species.
          </p>
        </div>
      ),
    },
    {
      title: "First Launch",
      content: (
        <div className="text-gray-400">
          <p>
            After years of relentless work, in 2050, our first unmanned rocket, 'Odyssey-1', 
            successfully reached Mars' orbit. It was a small step for a rocket, but a giant leap 
            for Exospace.
          </p>
        </div>
      ),
    },
    {
      title: "The Martian Colony",
      content: (
        <div className="text-gray-400">
          <p>
            By 2065, the first human colony, 'Aethelgard', was established on Mars. A testament 
            to human resilience and our commitment to exploring the unknown.
          </p>
        </div>
      ),
    },
    {
      title: "Beyond the Horizon",
      content: (
        <div className="text-gray-400">
          <p>
            Our journey doesn't end at Mars. We are now looking towards the stars, with plans to 
            explore the moons of Jupiter and beyond. The universe is vast, and we've only just 
            begun to scratch the surface.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className=" text-center flex flex-col items-center justify-center overflow-hidden rounded-md">
                   <TextHoverEffect text="About EXOSPACE" />
                   <div className="w-[70rem] h-40 relative bottom-[152px]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We are pioneers of the cosmos, dedicated to pushing the boundaries of space 
                exploration. Our mission is to build a future for humanity among the stars.
              </p>
      </div>
      <Timeline data={timelineData} />

    </div>
  );
};

export default AboutPage;