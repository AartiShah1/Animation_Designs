import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import clarity from '../assets/images/feature/clarity.png';
import clarity_image_hover from '../assets/images/feature/clarity_image_hover.png';
import LearnbyDoing from '../assets/images/feature/learnbydoing.png';
import LearnbyDoing_hover from '../assets/images/feature/LearnbyDoing_hover.png';
import GetMentored from '../assets/images/feature/getmentored.png';
import Achieve from '../assets/images/feature/achieve.png';

const sections = [
  {
    title: 'Start with Clarity',
    subtitle: 'Step into a better learning path.',
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bgColor: '#F45B5B',
    image: clarity,
    imageSide: 'left',
  },
  {
    title: 'Learn by Doing',
    subtitle: 'Practical skills, real projects.',
    description:
      'Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.',
    bgColor: '#5492A0',
    image: LearnbyDoing,
    imageSide: 'right',
  },
  {
    title: 'Get Mentored & Supported',
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bgColor: '#6C64A8',
    image: GetMentored,
    imageSide: 'left',
  },
  {
    title: 'Achieve & Showcase',
    subtitle: 'Build your portfolio, get job-ready.',
    description:
      'Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.',
    bgColor: '#A88964',
    image: Achieve,
    imageSide: 'right',
  },
];

const clarityUnlockedContent = {
  subtitle: 'Clarity unlocked—stickers, sips, and skills all in one go!',
  bgColor: '#F45B5B',
  image: clarity_image_hover,
};

const doingUnlockedContent = {
  subtitle: 'Doing unlocked—hands-on projects, mastery in motion!',
  bgColor: '#5492A0',
  image: LearnbyDoing_hover,
};

const easing = [0.42, 0, 0.58, 1];

const clarityCardVariants = {
  initial: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: easing },
  },
  slideLeft: {
    x: '-90%',
    opacity: 0,
    transition: { duration: 2, ease: easing },
  },
};

const clarityUnlockedVariants = {
  hiddenFromRight: {
    x: '90%',
    opacity: 0,
    transition: { duration: 2, ease: easing },
  },
  visibleFromRight: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: easing },
  },
};

const doingCardVariants = {
  initial: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: easing },
  },
  floatUp: {
    y: '-50%',
    opacity: 0,
    transition: { duration: 2, ease: easing },
  },
};

const doingUnlockedVariants = {
  hiddenFromBottom: {
    y: '50%',
    opacity: 0,
    transition: { duration: 2, ease: easing },
  },
  visibleFromBottom: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: easing },
  },
};

const JourneySection = () => {
  const [isClarityHovered, setIsClarityHovered] = useState(false);
  const [isDoingHovered, setIsDoingHovered] = useState(false);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-lg font-medium text-[#414141]">
            Your SkillShikshya Journey
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            <span className="text-[#1DA077]">Step </span>
            <span className="text-black">In.</span>{' '}
            <span className="text-[#1DA077]">Skill </span>
            <span className="text-black">Up.</span>{' '}
            <span className="text-[#1DA077]">Skill </span>
            <span className="text-black">Out.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative" style={{ minHeight: '300px' }}>
          {sections.map((sec, index) => {
            if (sec.title === 'Start with Clarity') {
              return (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-visible shadow-xl flex items-center"
                  style={{ backgroundColor: sec.bgColor, height: '300px' }}
                  onMouseEnter={() => setIsClarityHovered(true)}
                  onMouseLeave={() => setIsClarityHovered(false)}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl flex items-center overflow-visible"
                    variants={clarityCardVariants}
                    animate={isClarityHovered ? 'slideLeft' : 'initial'}
                    style={{ backgroundColor: sec.bgColor }}
                  >
                    <div className="hidden md:block absolute md:top-[60%] md:transform md:-translate-y-1/2 md:-left-24 md:z-10">
                      <motion.img
                        src={sec.image}
                        alt={sec.title}
                        className="w-72 h-82 mt-8 object-contain"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                      />
                    </div>

                    <div className="w-full py-12 px-4 md:px-8 md:pl-42 text-center md:text-right text-white">
                      <h3 className="text-3xl font-bold mb-2">{sec.title}</h3>
                      <p className="text-lg font-semibold mb-6">{sec.subtitle}</p>
                      <p className="text-base leading-relaxed">{sec.description}</p>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {isClarityHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl flex items-center overflow-visible"
                        style={{ backgroundColor: clarityUnlockedContent.bgColor, height: '300px' }}
                        variants={clarityUnlockedVariants}
                        initial="hiddenFromRight"
                        animate="visibleFromRight"
                        exit="hiddenFromRight"
                      >
                        <div className="hidden md:block absolute md:top-1/2 md:transform md:-translate-y-1/2 md:left-10 md:z-10">
                          <motion.img
                            src={clarityUnlockedContent.image}
                            alt="Clarity Unlocked"
                            className="w-[300px] h-[450px] object-contain"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                          />
                        </div>
                        <div className="w-full py-12 px-4 md:px-8 md:pl-80 text-center md:text-right text-white">
                          <p className="text-xl font-semibold">{clarityUnlockedContent.subtitle}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (sec.title === 'Learn by Doing') {
              return (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-visible shadow-xl flex items-center"
                  style={{ backgroundColor: sec.bgColor, height: '300px' }}
                  onMouseEnter={() => setIsDoingHovered(true)}
                  onMouseLeave={() => setIsDoingHovered(false)}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl flex items-center overflow-visible"
                    variants={doingCardVariants}
                    animate={isDoingHovered ? 'floatUp' : 'initial'}
                    style={{ backgroundColor: sec.bgColor }}
                  >
                    <div className="hidden md:block absolute md:top-[60%] md:transform md:-translate-y-1/2 md:-right-24 md:z-10">
                      <motion.img
                        src={sec.image}
                        alt={sec.title}
                        className="w-72 h-82 mt-8 object-contain"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                      />
                    </div>
                    <div className="w-full py-12 px-4 md:px-8 md:pr-36 text-center md:text-left text-white">
                      <h3 className="text-3xl font-bold mb-2">{sec.title}</h3>
                      <p className="text-lg font-semibold mb-6">{sec.subtitle}</p>
                      <p className="text-base leading-relaxed">{sec.description}</p>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {isDoingHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl flex items-center overflow-visible"
                        style={{ backgroundColor: doingUnlockedContent.bgColor, height: '300px' }}
                        variants={doingUnlockedVariants}
                        initial="hiddenFromBottom"
                        animate="visibleFromBottom"
                        exit="hiddenFromBottom"
                      >
                        <div className="hidden md:block absolute md:top-1/2 md:transform md:-translate-y-1/2 md:left-10 md:z-10">
                          <motion.img
                            src={doingUnlockedContent.image}
                            alt="Doing Unlocked"
                            className="w-[300px] h-[450px] object-contain"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                          />
                        </div>
                        <div className="w-full py-12 px-4 md:px-8 md:pl-80 text-center md:text-left text-white">
                          <p className="text-xl font-semibold">{doingUnlockedContent.subtitle}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="relative rounded-2xl overflow-visible shadow-xl flex items-center"
                style={{ backgroundColor: sec.bgColor, height: '300px' }}
              >
                <div
                  className={`hidden md:block absolute md:top-[60%] md:transform md:-translate-y-1/2 md:z-10 ${
                    sec.imageSide === 'left' ? 'md:-left-24' : 'md:-right-24'
                  }`}
                >
                  <motion.img
                    src={sec.image}
                    alt={sec.title}
                    className="w-72 h-82 mt-8 object-contain"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                  />
                </div>

                <div
                  className={`w-full py-12 px-4 md:px-8 ${
                    sec.imageSide === 'left' ? 'md:pl-42 md:text-right' : 'md:pr-36 md:text-left'
                  } text-center md:text-${sec.imageSide === 'left' ? 'right' : 'left'} text-white`}
                >
                  <h3 className="text-3xl font-bold mb-2">{sec.title}</h3>
                  <p className="text-lg font-semibold mb-6">{sec.subtitle}</p>
                  <p className="text-base leading-relaxed">{sec.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
