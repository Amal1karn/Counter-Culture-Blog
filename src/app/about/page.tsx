"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutPage = () => {
  // Use scroll hook
  const { scrollY } = useScroll();

  // Transform scroll position into opacity and y values
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [20, 0]);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-60 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="text-center text-black p-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg">
            We are dedicated to uncovering the hidden stories and vibrant
            culture of Kathmandu. Our goal is to provide an authentic and
            engaging platform that celebrates the essence of street life and
            urban artistry.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 style={{ opacity, y }} className="text-3xl font-bold mb-6">
            Our Mission
          </motion.h2>
          <motion.p
            style={{ opacity, y }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            We are dedicated to uncovering the hidden stories and vibrant
            culture of Kathmandu. Our goal is to provide an authentic and
            engaging platform that celebrates the essence of street life and
            urban artistry.
          </motion.p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Members */}
            {["team-member1.jpg", "team-member2.jpg", "team-member3.jpg"].map(
              (image, index) => (
                <motion.div
                  key={index}
                  style={{ opacity, y }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg"
                >
                  <img
                    src={`/images/${image}`}
                    alt={`Team Member ${index + 1}`}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{`Team Member ${
                    index + 1
                  }`}</h3>
                  <p className="text-gray-700">
                    Description for Team Member {index + 1}.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Readers Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonials */}
            {[
              "Counter Culture has opened my eyes to the vibrant street life in Kathmandu. The stories and visuals are captivating and inspiring.",
              "I love the authenticity and depth of the content. It feels like I'm walking through the streets of Kathmandu myself.",
              "An excellent platform for exploring the rich culture and stories of Kathmandu. Highly recommend for anyone interested in urban culture.",
            ].map((text, index) => (
              <motion.div
                key={index}
                style={{ opacity, y }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="text-lg mb-4">{text}</p>
                <p className="font-semibold">{`Reader ${index + 1}`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <p className="text-lg mb-4">
          Want to stay updated? Follow us on social media or subscribe to our
          newsletter!
        </p>
        <a href="/subscribe" className="text-lime-500 underline">
          Subscribe Now
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
