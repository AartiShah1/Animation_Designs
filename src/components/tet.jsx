import React, { useState } from "react";
import image_11 from "../assets/images/Testimonial/image_11.png";
import image_12 from "../assets/images/Testimonial/image_12.png";
import image_13 from "../assets/images/Testimonial/image_13.png";
import image_14 from "../assets/images/Testimonial/image_14.png";
import image_15 from "../assets/images/Testimonial/image_15.png";
import image_16 from "../assets/images/Testimonial/image_16.png";
import like from "../assets/images/Testimonial/like.png";
import runnerup from "../assets/images/Testimonial/runnerup.png";
import image_10 from "../assets/images/Testimonial/image_10.png";
import image_9 from "../assets/images/Testimonial/image_9.png";
import image_111 from "../assets/images/Testimonial/image_111.JPG";

const TestimonialSection = () => {
  const [hoveredBottomRight, setHoveredBottomRight] = useState(false);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-white to-green-50">
      <div className="relative py-16 px-4 md:px-10 lg:px-20 overflow-hidden max-w-screen-xl mx-auto">
        {/* Top Row - 3 images center */}
        <div className="flex justify-center gap-10 md:gap-16 mb-12">
          <img
            src={image_16}
            alt="user1"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />
          <img
            src={like}
            alt="like"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />
          <img
            src={image_11}
            alt="user3"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />
        </div>

        {/* Middle Row - side images and center text */}
        <div className="relative mb-16 flex justify-center items-center">
          {/* Left image */}
          <img
            src={image_13}
            alt="left"
            className="absolute left-0 md:-left-10 lg:-left-10 w-16 h-16 md:w-25 md:h-25 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />

          {/* Right image */}
          <img
            src={image_14}
            alt="right"
            className="absolute right-0 md:-right-10 lg:-right-10 w-16 h-16 md:w-25 md:h-25 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />

          {/* Center Text */}
          <div className="text-center max-w-md mx-auto px-2">
            <h2 className="text-base sm:text-lg font-medium text-gray-700 mb-2">
              Hear How They Level Up Their Game!
            </h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Skill <span className="text-green-600">Masters</span> Unite!{" "}
              <span role="img" aria-label="handshake">🤝</span>
            </h1>
            <button className="text-base sm:text-lg font-semibold text-black hover:text-green-600 transition-all">
              View all Testimonials →
            </button>
          </div>
        </div>

        {/* Bottom Row - 5 images */}
        <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap mt-10 relative px-2 md:px-0">
          <img
            src={image_10}
            alt="user4"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />
          <img
            src={image_12}
            alt="user5"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />
          <img
            src={runnerup}
            alt="user6"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />

          {/* Hoverable image */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredBottomRight(true)}
            onMouseLeave={() => setHoveredBottomRight(false)}
          >
            <img
              src={image_15}
              alt="hover-user"
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
            />
            {hoveredBottomRight && (
              <div className="absolute -top-44 left-1/2 -translate-x-1/2 z-50 shadow-xl rounded-xl overflow-hidden border-4 border-white">
                <img
                  src={image_111}
                  alt="hover-preview"
                  className="w-[240px] h-[160px] object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          <img
            src={image_9}
            alt="user7"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover hover:-translate-y-2 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
