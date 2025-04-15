"use client";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false); // Chiude il menu quando un link viene cliccato
    };

    return (

        <div className=" relative mx-auto">
            <nav className="flex fixed items-center w-full h-24 bg-black fixed top-0 left-0 z-20">
                {/* Logo: cambia tra "Cesare Ferraro" e "CF" */}
                <p className="logo-font text-[48px] whitespace-nowrap text-bianco border-b-2 px-5">
                    <span className="md:hidden">C<span className="text-yellow-custom">F</span></span>
                    <span className="hidden md:block">CESARE <span className="text-yellow-custom">FERRARO</span></span>
                </p>
                <ul className="hidden md:flex justify-between gap-x-24  ml-72 text-bianco main-font text-[36px]">

                    <Link href='/'
                        className="hover:text-yellow-300">Home
                    </Link>

                    <Link href='/ChiSono'
                        className="hover:text-yellow-300">Chi sono
                    </Link>

                    <Link href='/Mindset'
                        className="hover:text-yellow-300">Mindset
                    </Link>

                    <Link href='/Business'
                        className="hover:text-yellow-300">Per il business
                    </Link>

                    <Link href='/blog'
                        className="hover:text-yellow-300">Blog
                    </Link>

                    <Link href='/Contatti'
                        className="hover:text-yellow-300">Contatti
                    </Link>


                </ul>

                {/* Hamburger Menu per Mobile */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden  hover:text-yellow-300 ml-auto flex items-center w-10 h-14  text-white">
                    <i className="fa-solid fa-bars fa-2x"></i>
                </button>

                {/* Dropdown Menu per Mobile */}
                {isOpen && (
                    <div className=" md:hidden absolute top-24 left-0 w-full h-[100vh] bg-black text-bianco flex flex-col items-center py-7 main-font text-6xl">
                        <Link href="/" onClick={handleLinkClick} className="hover:text-yellow-300 py-6">Home</Link>
                        <Link href="/ChiSono" onClick={handleLinkClick} className="hover:text-yellow-300 py-6">Chi sono</Link>
                        <Link href="/Mindset" onClick={handleLinkClick} className="hover:text-yellow-300 py-6">Mindset</Link>
                        <Link href="/Business" onClick={handleLinkClick} className="hover:text-yellow-300 py-6">Per il business</Link>
                        <Link href="/blog" onClick={handleLinkClick} className="hover:text-yellow-300 py-6">Blog</Link>
                        <Link href="/Contatti" onClick={handleLinkClick} className="hover:text-yellow-300 py-6">Contatti</Link>
                    </div>
                )}

            </nav>



        </div>


    )
}