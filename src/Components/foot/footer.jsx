import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";
const Footer = () => {
    return (
        <>
            <div className="foot w-full mt-11 bg-black/5 " id='contact'>
                <form
                    action="https://formspree.io/f/xpwlzwno"
                    method="POST"
                    className="max-w-lg mx-auto p-6 shadow-xl rounded-xl text-white space-y-5"
                >
                    <h2 className="text-2xl font-bold text-amber-400">Contact Me</h2>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <p className="text-sm text-center">
                            Feel free to hire the genuine one.
                        </p>
                        <p className="text-blue-500 font-semibold text-center">
                            Prathamesh Powar
                        </p>

                        <ul className="flex gap-4 mt-1">
                            <li>
                                <a href="mailto:powarprathamesh579@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <MdAlternateEmail className="text-xl hover:text-red-600 transition" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/pratham__powar/#" target="_blank" rel="noopener noreferrer" >
                                    <FaInstagram className="text-xl hover:text-pink-500 transition" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/PrathameshPowar-dan" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-xl hover:text-gray-400 transition" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/prathamesh-powar-dan/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-xl hover:text-blue-600 transition" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-1">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject of the mail"
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            placeholder="Short note or message"
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <footer className=" text-gray-300 py-6 mt-10">
                <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                    <div className="text-center md:text-left">
                        <p className="font-semibold text-white">Contact Info</p>
                        <p>Email: <a href="mailto:powarprathamesh579@gmail.com" className="text-blue-400 hover:underline">powarprathamesh579@gmail.com</a></p>
                        <p>Phone: <a href="tel:+919876543210" className="hover:underline">+91 9372516998</a></p>
                        <p>Discord: <span className="text-purple-400">dankononji</span></p>
                    </div>

                    <div className="text-center md:text-right text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} Prathamesh Powar.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
