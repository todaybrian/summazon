import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./Container";

export default function Footer() {
    return (
        <>
            <div aria-hidden="true" className="absolute bottom-0 inset-0 h-max w-full mt-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>

            <div className="relative">
                <Container>
                    <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                        Copyright © {new Date().getFullYear()}. Made
                        for the{" "}    
                        <a
                            href="https://lablab.ai/event/google-vertex-ai-hackathon"
                            target="_blank"
                            rel="noopener">
                            Google Cloud Vertex AI Hackathon.
                        </a>
                    </div>
                </Container>
            </div>

        </>
    );
}
