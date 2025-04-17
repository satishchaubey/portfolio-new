'use client'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills } from "./constants";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import React from 'react';

interface Skill {
    name: string;
    imageUrl: {
        src: string;
    };
}

interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}

const About: React.FC = () => {
    return (
        <section className='max-container '>
            <h1 className='head-text text-white'>
                Hello, I&apos;m{' '}
                <span className='blue-gradient_text font-semibold drop-shadow'>
                    Satish
                </span>{' '}
                👋
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    With 2 years of experience as a Full Stack Developer, I specialize in crafting intuitive, high-performance web applications with a strong focus on front-end technologies like React.js, Next.js, and Material-UI. While I’m proficient in backend technologies including Node.js and MongoDB, my core strength lies in building scalable, responsive, and user-friendly interfaces that elevate user experiences. My ability to bridge the gap between front-end finesse and backend logic ensures seamless, end-to-end solutions aligned with your organization’s goals.
                </p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>

                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill: Skill) => (
                        <div className='block-container w-20 h-20' key={skill.name}>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <Image
                                    src={skill.imageUrl.src}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    className="object-contain rounded-4xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text text-white'>Work Experience.</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        I&apos;ve worked with all sorts of companies, leveling up my skills and
                        teaming up with smart people. Here&apos;s the rundown:
                    </p>
                </div>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience: Experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{ background: experience.iconBg }}
                                contentStyle={{
                                    background: '#1e293b',
                                    color: '#fff',
                                    borderBottom: `4px solid ${experience.iconBg}`,
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                }}
                                contentArrowStyle={{
                                    borderRight: `8px solid #1e293b`,
                                }}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <Image
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            width={50}
                                            height={50}
                                            className="object-contain rounded-4xl"
                                        />
                                    </div>
                                }
                            >
                                <div>
                                    <h3 className='text-white text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p className='text-indigo-300 font-medium text-base' style={{ margin: 0 }}>
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point: string, index: number) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-indigo-200 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className='border-slate-200' />
        </section>
    );
};

export default About;