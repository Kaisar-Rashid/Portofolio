import React from "react"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"


const Hero = () => {
  
  return (
    <div className="pb-2 pt-32" id="home">
      <div>
        <Spotlight className="-top-40 -left-40 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue"/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.01] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className="flex justify-center relative my-10 z-10 bottom-20 ">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col  items-center justify-center">
        <h2 className=" uppercase tracking-widest  text-xl text-center text-blue-100 max-w-80">Hello, I'm Kaisar</h2>
        <TextGenerateEffect className=" text-center text-[40px] md:text-5xl lg:text-6xl" words="A Passionate Front-End Developer."/>

        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Creating seamless, responsive websites with modern technologies
        </p>
          <a href="https://www.figma.com/design/Cqwh0rTYmzxignCxvYmvtV/Untitled?node-id=1-18&t=k92aIbfqUcWyQhrK-1"><MagicButton title="Check Out My Resume" icon={<FaLocationArrow />} position="right" /></a>
       </div>
      </div>
    </div>
  )
}

export default Hero