"use client";

import Lottie from "lottie-react";
import animationData from "../json/bodybuilder-animation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow overflow-auto">
        <div className="flex flex-col justify-center items-center h-full sm:p-10 p-2 overflow-auto">
          <div className="text-center space-y-4 sm:flex sm:items-center sm:space-x-4 lg:space-x-32">
            <div className="sm:w-1/2">
              <h1 className=" leading-tight text-gradient text-3xl sm:text-7xl lg:text-7xl font-sans  relative bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300 py-4 lg:mt-0 lg:pt-0">
                SUPERDANKO WEB SHOP
              </h1>
              <p className="font-sans text-xs md:text-xl text-neutral-400  max-w-lg mx-auto">
                Please wait, we&apos;re building up!
              </p>
            </div>
            <div className="sm:w-1/2 mb-4 relative lg:w-96 lg:h-auto">
              <Lottie
                animationData={animationData}
                style={{ marginBottom: "2rem", width: "100%", maxWidth: "400px", height: "auto" }}
                
              />
            </div>
            
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 space-x-4 items-center justify-center mt-4">
              <a
                href="https://www.instagram.com/super_danko/"
                className="group text-gray-600 hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="md:text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/superjunackimaslac"
                className="group text-gray-600 hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faFacebook} className="md:text-2xl" />
              </a>
            </div>
        </div>
      </main>
    </div>
  );
}
