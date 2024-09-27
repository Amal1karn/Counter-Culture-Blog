"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Marquee from "../components/Marquee";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeTexts = [
    "Discover the hidden gems of Kathmandu",
    "Celebrate local art and culture",
    "Join us in the street revolt",
    "Experience the vibrant urban life",
  ];

  return (
    <div>
      <div className="relative overflow-hidden">
        {/* Parallax Background Section */}
        <motion.div
          className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            translateY: scrollY * 0.4,
          }}
          transition={{ duration: 0.5 }} // Faster transition
        >
          <div className="flex flex-col items-center justify-center h-full text-center text-lime-500 bg-black bg-opacity-80">
            <motion.h1
              initial={{ opacity: 0, y: 50 }} // Animate from the bottom
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 40,
              }} // Different duration and delay
              className="text-9xl font-bold px-6 py-4 bg-opacity-60 rounded-lg uppercase opacity-75"
            >
              Counter Culture
            </motion.h1>

            {/* Hero Section with CTA */}
            <section className="flex items-center justify-center bg-black bg-opacity-65 p-10 rounded-3xl">
              <div className="max-w-3xl mx-auto text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl font-semibold mb-6"
                >
                  Discover the stories of Dharan's streets
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg mb-8"
                >
                  Dive into our collection of street stories, local art, and
                  vibrant culture. Join us and explore!
                </motion.p>
                <motion.a
                  href="/blog"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                  className="bg-lime-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg"
                >
                  Explore the Blog
                </motion.a>
              </div>
            </section>

            {/* Marquee Component */}
          </div>
        </motion.div>
      </div>

      <div>
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold mb-6"
            >
              Featured Blog Posts
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {/* Example Post */}
              {[1, 2, 3].map((post) => (
                <div
                  key={post}
                  className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    Post Title {post}
                  </h3>
                  <p className="text-lg">
                    A brief description of the blog post. This is where you
                    summarize the content of the post to entice readers.
                  </p>
                  <a href="#" className="text-blue-500 mt-4 inline-block">
                    Read more
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <Marquee texts={marqueeTexts} />
    </div>
  );
}
