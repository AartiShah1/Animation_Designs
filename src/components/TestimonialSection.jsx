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
import image_19 from "../assets/images/Testimonial/image_19.png";

const TestimonialSection = () => {
  const [hoveredBottomRight, setHoveredBottomRight] = useState(false);
  const [hoveredTop, setHoveredTop] = useState(false);
  const [hoveredMiddleSide, setHoveredMiddleSide] = useState(false);
  const [hoveredBottom, setHoveredBottom] = useState(false);
  const [hoveredImage16, setHoveredImage16] = useState(false);
  const [hoveredImage15, setHoveredImage15] = useState(false);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes slideUpFromBottom {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-up-from-bottom {
          animation: slideUpFromBottom 0.3s ease-out forwards;
        }
      `}</style>

      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-white to-green-50 overflow-visible">
        <div
          className="relative py-16 px-4 md:px-10 lg:px-20 overflow-visible max-w-screen-xl mx-auto"
          onMouseEnter={() => {
            setHoveredTop(true);
            setHoveredMiddleSide(true);
            setHoveredBottom(true);
          }}
          onMouseLeave={() => {
            setHoveredTop(false);
            setHoveredMiddleSide(false);
            setHoveredBottom(false);
          }}
        >
          {/* Top Row */}
          <div className="flex justify-center gap-10 md:gap-16 mb-12 overflow-visible">
            {[image_16, like, image_11].map((src, index) => {
              if (index === 0) {
                return (
                  <div
                    key={index}
                    className="relative overflow-visible"
                    onMouseEnter={() => setHoveredImage16(true)}
                    onMouseLeave={() => setHoveredImage16(false)}
                  >
                    <img
                      src={src}
                      alt={`top-${index}`}
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2
                        ${hoveredTop ? "translate-y-[-6rem] float" : ""}`}
                      style={{ transformOrigin: "center" }}
                    />
                    {hoveredImage16 && (
                      <div
                        className="absolute -bottom-[14rem] left-1/2 -translate-x-1/2 z-[9999] shadow-2xl rounded-2xl overflow-hidden border-8 border-white slide-up-from-bottom"
                        style={{ width: "360px", height: "240px" }}
                      >
                        <img
                          src={image_19}
                          alt="hover-preview-large"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <img
                    key={index}
                    src={src}
                    alt={`top-${index}`}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2
                      ${hoveredTop ? "translate-y-[-6rem] float" : ""}`}
                    style={{ transformOrigin: "center" }}
                  />
                );
              }
            })}
          </div>

          {/* Middle Row */}
          <div className="relative mb-16 flex justify-center items-center">
            <img
              src={image_13}
              alt="left"
              className={`absolute left-0 md:-left-10 lg:-left-10 w-16 h-16 md:w-25 md:h-25 rounded-xl object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2
                ${hoveredMiddleSide ? "translate-x-[-5rem] float" : ""}`}
              style={{ transformOrigin: "center" }}
            />
            <img
              src={image_14}
              alt="right"
              className={`absolute right-0 md:-right-10 lg:-right-10 w-16 h-16 md:w-25 md:h-25 rounded-xl object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2
                ${hoveredMiddleSide ? "translate-x-[5rem] float" : ""}`}
              style={{ transformOrigin: "center" }}
            />
            <div className="text-center max-w-md mx-auto px-2">
              <h2 className="text-base sm:text-lg font-medium text-gray-700 mb-2">
                Hear How They Level Up Their Game!
              </h2>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Skill <span className="text-green-600">Masters</span> Unite!{" "}
                <span role="img" aria-label="handshake">
                  🤝
                </span>
              </h1>
              <button className="text-base sm:text-lg font-semibold text-black hover:text-green-600 transition-all">
                View all Testimonials →
              </button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap mt-10 relative px-2 md:px-0">
            {[image_10, image_12, runnerup].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`bottom-${index}`}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2
                  ${hoveredBottom ? "translate-y-[6rem] float" : ""}`}
                style={{ transformOrigin: "center" }}
              />
            ))}

            {/* Updated image_15 block with preview */}
            <div
              className={`relative overflow-visible transition-transform duration-300 ease-in-out hover:-translate-y-2
                ${hoveredBottom ? "translate-y-[6rem] float" : ""}`}
              onMouseEnter={() => setHoveredImage15(true)}
              onMouseLeave={() => setHoveredImage15(false)}
            >
              <img
                src={image_15}
                alt="hover-user"
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
                style={{ transformOrigin: "center" }}
              />
              {hoveredImage15 && (
                <div
                  className="absolute -top-[15rem] left-1/2 -translate-x-1/2 z-[9999] shadow-2xl rounded-2xl overflow-hidden border-8 border-white"
                  style={{ width: "360px", height: "240px" }}
                >
                  <img
                    src={image_111}
                    alt="hover-preview-large"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              )}
            </div>

            <img
              src={image_9}
              alt="user7"
              className={`w-15 h-25 md:w-25 md:h-25 rounded-xl object-cover transition-transform duration-300 ease-in-out hover:-translate-y-2
                ${hoveredBottom ? "translate-y-[6rem] float" : ""}`}
              style={{ transformOrigin: "center" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
