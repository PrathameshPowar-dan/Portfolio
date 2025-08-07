
import { VscOpenPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import './projects.css'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % 4);
        }, 3700);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init({
            once: false,
            offset: 100,
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div className='hero w-[99%] m-auto mt-11 rounded-2xl bg-black/35 p-6' id="projects" >
                <p className='w-full pt-6 pb-4 text-3xl font-extrabold font-sans' data-aos="fade-down"
                    data-aos-delay="100">MY PROJECTS</p>
                <section className='w-full flex flex-col flex-wrap md:flex-row rounded-2xl'>
                    <div className="project flex flex-col justify-center items-center gap-2 w-11/12 m-auto mt-2 md:w-[30%] bg-[#1e1e1e]  border border-gray-700 pt-3 pb-3 mb-3  rounded-2xl" data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="1000">
                        <p className='text-amber-400 text-base md:text-2xl font-extrabold font-stretch-125%'>ChatsWhat</p>
                        <p className='text-gray-200 text-xs w-4/5 md:text-sm text-center'>A personal portfolio built with React.js, Tailwind CSS,HTML5.</p>
                        <div className="project-buttons flex justify-center gap-5">
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="">Preview <VscOpenPreview /></a></button>
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="" target="_blank">Code <FaGithub /></a></button>
                        </div>
                    </div>
                    <div className="project flex flex-col justify-center items-center gap-2 w-11/12 m-auto mt-2 md:w-[30%] bg-[#1e1e1e] border border-gray-700 pt-3 pb-3 mb-3 rounded-2xl" data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="1000">
                        <p className='text-amber-400 text-base md:text-2xl font-extrabold font-stretch-125%'>Weather App</p>
                        <p className='text-gray-200 text-xs w-4/5 md:text-sm text-center'>Real-time weather using OpenWeather API.</p>
                        <div className="project-buttons flex justify-center gap-5">
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://dan-weatherapp.netlify.app/" target="_blank">Preview <VscOpenPreview /></a></button>
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://github.com/PrathameshPowar-dan/weather-app" target="_blank">Code <FaGithub /></a></button>
                        </div>
                    </div>
                    <div className="project flex flex-col justify-center items-center gap-2 w-11/12 m-auto mt-2 md:w-[30%] bg-[#1e1e1e]  border border-gray-700 pt-3 pb-3 mb-3 rounded-2xl" data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="1000">
                        <p className='text-amber-400 text-base md:text-2xl font-extrabold font-stretch-125%'>Audio Player</p>
                        <p className='text-gray-200 text-xs w-4/5 md:text-sm text-center'>Audio Player with Play/Pause and Progress Controls using HTML5, CSS & JavaScript</p>
                        <div className="project-buttons flex justify-center gap-5">
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://dan-audio-player.netlify.app/" target="_blank">Preview <VscOpenPreview /></a></button>
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://github.com/PrathameshPowar-dan/audio-player" target="_blank">Code <FaGithub /></a></button>
                        </div>
                    </div>
                    <div className="project flex flex-col justify-center items-center gap-2 w-11/12 m-auto mt-2 md:w-[30%] bg-[#1e1e1e]  border border-gray-700 pt-3 pb-3 mb-3 rounded-2xl" data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="1000">
                        <p className='text-amber-400 text-base md:text-2xl font-extrabold font-stretch-125%'>Social Media</p>
                        <p className='text-gray-200 text-xs w-4/5 md:text-sm text-center'>Instagram like UI with Tailwind CSS, HTML5</p>
                        <div className="project-buttons flex justify-center gap-5">
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://dan-socialmedia.netlify.app/" target="_blank">Preview <VscOpenPreview /></a></button>
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://github.com/PrathameshPowar-dan/social-media" target="_blank">Code <FaGithub /></a></button>
                        </div>
                    </div>
                    <div className="project flex flex-col justify-center items-center gap-2 w-11/12 m-auto mt-2 md:w-[30%]  bg-[#1e1e1e] border border-gray-700 pt-3 pb-3 mb-3 rounded-2xl" data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="1000">
                        <p className='text-amber-400 text-base md:text-2xl font-extrabold font-stretch-125%'>Todolist</p>
                        <p className='text-gray-200 text-xs w-4/5 md:text-sm text-center'>Responsive TodoList with Add, Edit, Delete, and Checkbox Features using React.js</p>
                        <div className="project-buttons flex justify-center gap-5">
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://dan-todolist-app.netlify.app/" target="_blank">Preview <VscOpenPreview /></a></button>
                            <button ><a className='font-sm text-blue-400 flex justify-center items-center gap-0.5' href="https://github.com/PrathameshPowar-dan/Todolist" target="_blank">Code <FaGithub /></a></button>
                        </div>
                    </div>
                    <div className="banner w-full overflow-hidden md:mt-6 mt-0" data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="1000">
                        <div
                            className="slides flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <div className="slide min-w-full h-56 md:h-72 flex justify-center items-center">
                                <img src="/weather.webp" alt="Weather App" loading="lazy" className="h-full object-contain rounded-2xl" />
                            </div>
                            <div className="slide min-w-full h-56 md:h-72 flex justify-center items-center">
                                <img src="/audio.webp" alt="Audio Player" loading="lazy" className="h-full object-contain rounded-2xl" />
                            </div>
                            <div className="slide min-w-full h-56 md:h-72 flex justify-center items-center">
                                <img src="/insta.webp" alt="Social Media UI" loading="lazy" className="h-full object-contain rounded-2xl" />
                            </div>
                            <div className="slide min-w-full h-56 md:h-72 flex justify-center items-center">
                                <img src="/todo.webp" alt="Todo List" loading="lazy" className="h-full object-contain rounded-2xl" />
                            </div>
                        </div>

                        <div className="dots flex justify-center gap-3 mt-0.5 md:mt-2">
                            {[0, 1, 2, 3].map(i => (
                                <div
                                    key={i}
                                    className={`dot rounded-full cursor-pointer transition-colors ${currentSlide === i ? 'bg-white' : 'bg-gray-400'
                                        }`}
                                    onClick={() => setCurrentSlide(i)}
                                ></div>
                            ))}
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Projects
