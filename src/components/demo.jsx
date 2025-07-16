import React from 'react';
import { motion } from 'framer-motion';

import clarity from '../assets/images/feature/clarity.png';
import LearnbyDoing from '../assets/images/feature/learnbydoing.png';
import GetMentored from '../assets/images/feature/getmentored.png';
import Achieve from '../assets/images/feature/achieve.png';

const sections = [
    {
        title: 'Start with Clarity',
        subtitle: 'Step into a better learning path.',
        description:
            'Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you’re a beginner or upskilling, we have a path tailored to your growth.',
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
        subtitle: 'You’re not learning alone.',
        description:
            'Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.',
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

const JourneySection = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-left mb-12">
                  <h2 className="text-lg font-medium" style={{ color: '#414141' }}>Your SkillShikshya Journey</h2>

                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                       

                        <span style={{ color: '#1DA077' }}>Step </span>{' '}
                        <span className="text-black">In.</span>{' '}




                        <span style={{ color: '#1DA077' }}>Skill </span>{' '}
                        <span className="text-black">Up.</span>{' '}

                        <span style={{ color: '#1DA077' }}>Skill </span>{' '}
                        <span className="text-black">Out.</span>{' '}
                      
                      
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((sec, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-visible shadow-xl flex items-center"
                            style={{ backgroundColor: sec.bgColor }}
                        >
                            {/* Floating Image with Framer Motion */}
                            <div
                                className={`absolute top-[60%] transform -translate-y-1/2 ${sec.imageSide === 'left' ? '-left-24' : '-right-24'
                                    } z-10`}
                            >
                                <motion.img
                                    src={sec.image}
                                    alt={sec.title}
                                    className="w-72 h-82 mt-8 object-contain"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                    }}
                                />
                            </div>

                            {/* Text section */}
                            <div
                                className={`w-full py-12 px-8 ${sec.imageSide === 'left' ? 'pl-42 text-right' : 'pr-36 text-left'
                                    } text-white`}
                            >
                                <h3 className="text-3xl font-bold mb-2">{sec.title}</h3>
                                <p className="text-lg font-semibold mb-6">{sec.subtitle}</p>
                                <p className="text-base leading-relaxed">{sec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JourneySection;
