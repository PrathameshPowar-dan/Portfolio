import React, { useEffect, useState } from 'react';
import { IoCodeSlashSharp } from "react-icons/io5";
import { CiMobile4 } from "react-icons/ci";
import { FaPaintbrush } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Body = () => {
    const texts = [
        "Explore my works",
        "I will show you, click me",
        "This is Fun",
        "I Love to Develop."
    ];

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(200);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const delayStart = setTimeout(() => {
            setIsStarted(true);
        }, 100);

        return () => clearTimeout(delayStart);
    }, []);

    useEffect(() => {
        if (!isStarted) return;

        const i = loopNum % texts.length;
        const fullText = texts[i];

        const updateText = () => {
            const newText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(newText);

            if (!isDeleting && newText === fullText) {
                setTypingSpeed(800);
                setIsDeleting(true);
            } else if (isDeleting && newText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(600);
            } else {
                setTypingSpeed(isDeleting ? 40 : 70);
            }
        };

        const timer = setTimeout(updateText, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, isStarted]);

    useEffect(() => {
        AOS.init({
            once: false,
            offset: 100,
            duration: 1000,
        });
    }, []);

    return (
        <section id='About' className='flex flex-col items-center w-full'>
            <img
                src="./me.webp"
                alt="my picture"
                className='w-3/5 h-3/5 md:w-56 rounded-full shadow-2xl shadow-white'
                data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200"
            />

            <p className='text-4xl md:text-5xl pt-2.5 pb-2.5 font-extrabold text-white' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                Hi, I'm Prathamesh
            </p>

            {isStarted && (
                <button type='button' className='text-lg md:text-xl text-blue-300 font-mono h-10 pr-2 pt-2 pb-2 pl-2 rounded-4xl bg-white/15'>
                    {text}
                    <span className="border-r-2 border-blue-300 animate-pulse ml-1">&nbsp;</span>
                </button>
            )}

            <p className='text-base pb-2.5 md:text-xl w-11/12 md:w-3/5 flex wrap-normal font-medium text-gray-400 mt-3' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                Creative self-taught developer crafting futuristic web experiences with smooth UI, animations, and React.
            </p>

            <div className="stuff w-full flex justify-center gap-3 mb-2">
                <article className='border flex flex-col items-center gap-1 w-1/3  rounded-2xl bg-gray-900 border-gray-800 pt-2 pb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <IoCodeSlashSharp fill='Cyan' size={28} />
                    <p className='text-base md:text-2xl font-extrabold'>Frontend Developer</p>
                    <p className='text-xs md:text-lg text-center'>React.js, HTML5, CSS, JavaScript, Redux</p>
                </article>
                <article className='border flex flex-col items-center gap-1 w-1/3 rounded-2xl bg-gray-900 border-gray-800 pt-2 pb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <CiMobile4 fill='Cyan' size={28} />
                    <p className='text-base md:text-2xl font-extrabold'>Responsive Design</p>
                    <p className='text-xs md:text-lg text-center'>Mobile-first & Tailwind CSS</p>
                </article>
                <article className='border flex flex-col items-center gap-1 w-1/3 rounded-2xl bg-gray-900 border-gray-800 pt-2 pb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <FaPaintbrush fill='Cyan' size={28} />
                    <p className='text-base md:text-2xl font-extrabold'>UI/UX Design</p>
                    <p className='text-xs md:text-lg text-center'>User-friendly Design & Figma</p>
                </article>
            </div>
        </section>
    );
};

export default Body;
