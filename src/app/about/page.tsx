"use client";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
      <div className="relative isolate pt-14">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="py-24 sm:py-32 lg:pb-40 relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                About Exospace
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We are pioneers of the cosmos, dedicated to pushing the boundaries of space 
                exploration. Our mission is to build a future for humanity among the stars.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default AboutPage;