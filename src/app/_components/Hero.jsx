"use client";
import React from "react";
import { ContainerScroll } from "./../../../src/components/ui/container-scroll-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 flex flex-col items-center">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Manage your Money with AI-Driven Personal <br />
                <span className="text-blue-800 dark:text-blue-700 text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Finance Advisor
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/dashboard.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Hero;
