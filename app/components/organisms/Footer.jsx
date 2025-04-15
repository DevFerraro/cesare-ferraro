'use client';


import Newsletter from "../molecules/Newsletter"
import Social from "../molecules/Social"

export default function Footer () {

    return (

        <div className="mx-auto w-full  ">
            <footer className="relative bg-[rgba(0,0,0,0.8)]    flex items-center flex-col sm:flex-row  gap-10 p-2 ">

                <div className="flex flex-col sm:flex-row py-2 ">

                    <ul className="text-bianco flex sm:justify-between gap-x-24 sm:ml-72 text-[20px] main-font">
                        <li>
                            <a href="#privacypolicy" className="hover:text-yellow-300">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="" className="hover:text-yellow-300">Cookie Policy</a>
                        </li>

                        <li>
                            <a href="" className="hover:text-yellow-300">Gestione dei cookie</a>
                        </li>

                    </ul>
                </div>

                <Newsletter></Newsletter>

                <Social></Social>


            </footer>

        </div>

    )
}