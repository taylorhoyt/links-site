import Image from "next/image";
import Link from "next/link";
import React from 'react';
import links from './links.json';
import githubIcon from '/public/github.svg';

const LinkButton = ({label, link}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
        <button className="w-full border-2 border-white rounded-lg shadow-md bg-theme-stone-blue text-white p-2 hover:bg-white hover:text-black">
            {label}
        </button>
    </a>
);

export default function Home() {
    return (
        <main className="h-screen overflow-y-hidden">
            <div className="flex max-h-screen flex-col gap-6 items-center font-roboto mx-auto mt-12 w-2/3 overflow-y-hidden">
                <div className="flex text-center text-white text-4xl">
                    <h1>{links.header}</h1>
                </div>
                <div className="h-1 w-full bg-white"></div>
                <div className="flex flex-col bg-theme-navy border-2 border-white rounded-lg p-5 overflow-y-auto">
                    <div className="flex flex-col items-center gap-3 text-white text-xl">
                        {links.data.map((linkInfo, index) =>
                            <LinkButton key={index} {...linkInfo} />
                        )}
                    </div>
                </div>
                <div className="h-1 w-full bg-white"></div>
                <div>
                    <Link href="https://github.com/taylorhoyt/links-site" target="_blank">
                        <Image src={githubIcon}
                               alt="github"
                               className="m-auto w-1/2"
                        />
                    </Link>
                </div>
            </div>
        </main>
    );
}
