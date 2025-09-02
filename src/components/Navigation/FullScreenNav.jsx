import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";

import { Link } from "react-router-dom";
import { NavbarContext } from "../../context/NavContexts";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="">
            <Link to="/">
              <div className="lg:w-36 w-24">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 150 60"
                >
                  <path
                    fill="white"
                    d="M10 10 H35 C45 10 50 15 50 25 C50 32 46 36 40 38 V39 
           C46 41 52 45 52 53 C52 62 45 70 34 70 H10 Z 
           M65 10 H100 V20 H80 V30 H98 V40 H80 V60 H65 Z
           M115 10 H140 C148 10 150 16 150 22 V48 C150 54 148 60 140 60 H115 Z
           M125 20 V50 H135 C138 50 140 48 140 45 V25 C140 22 138 20 135 20 Z"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer"
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className=" py-36">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Projets
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Agence
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-y-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Blogs
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  To see everything
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
