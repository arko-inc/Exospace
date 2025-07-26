"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Rocket, Satellite, Telescope } from "lucide-react";
import Image from "next/image";
import HeroStory from "@/components/HeroStory";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white mx-3 ">
        <div>
            <h1 className='text-[6rem] font-thin ml-10'>Todays highlights</h1>
        </div>
      <HeroStory/>

      {/* Introduction Section */}
      <section className="py-24 bg-[#0a0a0a] flex">
        <div className="container px-6 text-left flex-2/3">

            <h2 className="text-4xl md:text-8xl font-thin mb-6">
              Pushing the Boundaries of Human Achievement
            </h2>
          <p className="text-lg md:text-xl max-w-4xl font-light text-gray-400 text-left">
            Exospace is at the forefront of cosmic discovery, developing cutting-edge technologies to explore distant worlds, understand our universe, and secure humanity&apos;s future among the stars. From advanced propulsion systems to interstellar habitats, our work defines the next chapter of exploration.
          </p>
        </div>
        <div className="flex-1/3">
        <div>
            <img src="/images/falcon9.jpg" alt=""/>
        </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Feature 1: Technology */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-gray-900 rounded-full mb-6">
              <Telescope className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Advanced Technologies</h3>
            <p className="text-gray-400">
              Developing next-generation spacecraft, life support systems, and robotics to make interstellar travel a reality.
            </p>
          </div>

          {/* Feature 2: Missions */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-gray-900 rounded-full mb-6">
              <Rocket className="h-12 w-12 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Pioneering Missions</h3>
            <p className="text-gray-400">
              Launching ambitious missions to Mars, Europa, and beyond to search for life and uncover the secrets of the cosmos.
            </p>
          </div>

          {/* Feature 3: Research */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-gray-900 rounded-full mb-6">
              <Satellite className="h-12 w-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Scientific Research</h3>
            <p className="text-gray-400">
              Conducting groundbreaking research in astrophysics, planetary science, and astrobiology to expand our understanding of the universe.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-cover bg-center bg-cta-bg">
        <div className="container mx-auto px-6 text-center bg-black/70 py-16 rounded-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Journey</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            The cosmos is waiting. Discover how you can be a part of the next giant leap for humanity.
          </p>
          <a href="/careers" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg">
            Explore Careers
          </a>
        </div>
      </section>
    </div>
  );
};

export default Page;