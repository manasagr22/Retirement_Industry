import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Home1 from "./Home1";
import PrevArrow from '@mui/icons-material/ArrowBackIosOutlined';
import Home2 from "./Home2";
import Home3 from "./Home3";
import img1 from "../images/img.jpeg"
import img2 from "../images/img2.png"
import img3 from "../images/img3.jpg"

export default function Home(props) {
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        let ele1 = document.getElementById(pageNo)
        ele1.className = "slick-active";
    }, [pageNo]);

    function nextSlide() {
        let ele = document.getElementById(pageNo)
        ele.className = "";
        if (pageNo < 3) {
            let contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo + 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setPageNo(pageNo + 1)
        }
        else {
            var contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo + 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setTimeout(() => {
                contain.style.transition = "";
                contain.style.transform = `translate3d(-${window.innerWidth}px, 0px, 0px)`;
            }, 500)

            setPageNo(1)
        }
    }

    function prevSlide() {
        let ele = document.getElementById(pageNo)
        ele.className = "";
        if (pageNo > 1) {
            let contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo - 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setPageNo(pageNo - 1)
        }
        else {
            let contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo - 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setTimeout(() => {
                contain.style.transition = "";
                contain.style.transform = `translate3d(-${3*window.innerWidth}px, 0px, 0px)`;
            }, 500)

            setPageNo(3)
        }
    }

    // setTimeout(() => {
    //     nextSlide();
    // }, 3000)


    return (
        <div className="home">
            <button className="prevButton" onClick={prevSlide}></button>
            <div className="absolute" id="contain" style={{ opacity: "1", transform: `translate3d(-${window.innerWidth}px, 0px, 0px)`, width: 5*window.innerWidth }}>
                <div className="slick-slide" aria-hidden="true">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[600px] text-5xl font-bold">Retirement Industry</h1><p class="max-w-[600px] text-lg font-normal">Our teams can design, build, ship, scale your vision in the most efficient way &amp; on international standards</p><button class="max-w-[250px] bg-white text-black text-2xl font-semibold p-3 rounded-lg" style={{ width: "100%", margin: "auto" }}>Estimate Projects</button></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img3} alt="home3" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="false">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[600px] text-5xl font-bold">Move to the next level</h1><p class="max-w-[600px] text-lg font-normal">Our teams can design, build, ship, scale your vision in the most efficient way &amp; on international standards</p><button class="max-w-[250px] bg-white text-black text-2xl font-semibold p-3 rounded-lg" style={{ width: "100%", margin: "auto" }}>Estimate Projects</button></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img1} alt="home1" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="true">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[600px] text-5xl font-bold">Financial Advisors</h1><p class="max-w-[600px] text-lg font-normal">Our teams can design, build, ship, scale your vision in the most efficient way &amp; on international standards</p><button class="max-w-[250px] bg-white text-black text-2xl font-semibold p-3 rounded-lg" style={{ width: "100%", margin: "auto" }}>Estimate Projects</button></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img2} alt="home2" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="true">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[600px] text-5xl font-bold">Retirement Industry</h1><p class="max-w-[600px] text-lg font-normal">Our teams can design, build, ship, scale your vision in the most efficient way &amp; on international standards</p><button class="max-w-[250px] bg-white text-black text-2xl font-semibold p-3 rounded-lg" style={{ width: "100%", margin: "auto" }}>Estimate Projects</button></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img3} alt="home3" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="true">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[600px] text-5xl font-bold">Move to the next level</h1><p class="max-w-[600px] text-lg font-normal">Our teams can design, build, ship, scale your vision in the most efficient way &amp; on international standards</p><button class="max-w-[250px] bg-white text-black text-2xl font-semibold p-3 rounded-lg" style={{ width: "100%", margin: "auto" }}>Estimate Projects</button></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img1} alt="home1" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="nextButton" onClick={nextSlide}></button>
            <ul className="slick-dots">
                <li className="slick-active" id="1"></li>
                <li className="" id="2"></li>
                <li className="" id="3"></li>
            </ul>
        </div>
    )
}
