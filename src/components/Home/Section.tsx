import React from "react";
import SectionCard from "./SectionCard";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { FaCheck } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";

export default function Section() {
  return (
    <div className="flex flex-col md:w-[1024px] w-full h-fit gap-3">
      <div className="flex items-baseline justify-center bg-[#FF7724] text-white text-base p-2 w-fit rounded-xl">
        <CiTrophy />
        Best Choice
      </div>

      <SectionCard
        image={"/section/section.png"}
        imagetext={"Builder 1"}
        heading={"WixPro 72-Inch Responsive Website Builder"}
        description={
          "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        }
        highlight={
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        }
        ratingNum={9.8}
        ratingStar={5}
        ratingText={"Exceptional"}
      />
      {/* sectioncard2 */}
      <div className="flex items-baseline justify-center bg-[#FF7724] text-white text-base p-2 w-fit rounded-xl">
        <IoDiamondOutline />
        Best Value
      </div>

      <SectionCard
        image={"/section/section.png"}
        imagetext={"Builder"}
        heading={"SiteCraft 68-Inch Ultimate Web Design Studio"}
        description={
          "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        }
        highlight={
          "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        }
        ratingNum={9.5}
        ratingStar={5}
        ratingText={"Excellent"}
      />
      {/* section3 */}

      <SectionCard
        image={"/section/section.png"}
        imagetext={"Builder"}
        heading={"WixPro 72-Inch Responsive Website Builder"}
        description={
          "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        }
        highlight={
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        }
        ratingNum={9.3}
        ratingStar={5}
        ratingText={"Exceptional"}
      />
      {/* section4 */}

      <SectionCard
        image={"/section/section.png"}
        imagetext={"Builder"}
        heading={"CDK Resposive Builder"}
        highlight={
          <div className="flex flex-col mb-3">
            <div className="flex flex-col bg-[#FFF4ED] p-3 ml-3 rounded-xl gap-2">
              <div className="flex gap-3 items-baseline">
                {/* 1st line of this compennt */}
                <div className="bg-white text-[#1B88F4] p-2 text-base font-normal rounded-xl">
                  9.9
                </div>
                <div className="text-[#4B5665] text-base font-normal">
                  Building Responsive
                </div>
              </div>
              {/* second */}
              <div className="flex gap-3 items-baseline">
                <div className="bg-white text-[#1B88F4] p-2 text-base font-normal rounded-xl">
                  8.9
                </div>
                <div className="text-[#4B5665] text-base font-normal">Cool</div>
              </div>
              {/* third */}
              <div className="flex gap-3 items-baseline">
                <div className="bg-white text-[#1B88F4] p-2 text-base font-normal rounded-xl">
                  8.9
                </div>
                <div className="text-[#4B5665] text-base font-normal">Docs</div>
              </div>
            </div>
            {/* // lower section */}
            <h1 className="text-[#2C384A] text-base font-normal mt-3">
              Why we love it
            </h1>
            {/* objective part */}
            <div className="flex flex-col mt-2 gap-2">
              {/* point 1 */}
              <div className="flex gap-2 text-[#4B5665] text-[15px] font-normal items-baseline">
                <div className="rounded-full p-2 px-3 bg-[#EBF5FF] text-[#0855A1]">
                  <FaCheck />
                </div>
                <div>Documentation</div>
              </div>
              {/* point2 */}
              <div className="flex gap-2 text-[#4B5665] text-[15px] font-normal items-baseline">
                <div className="rounded-full p-2 px-3 bg-[#EBF5FF] text-[#0855A1]">
                  <FaCheck />
                </div>
                <div>Easy Use</div>
              </div>
              {/* point3 */}
              <div className="flex gap-2 text-[#4B5665] text-[15px] font-normal items-baseline">
                <div className="rounded-full p-2 px-3 bg-[#EBF5FF] text-[#0855A1]">
                  <FaCheck />
                </div>
                <div>Out of box</div>
              </div>
            </div>
          </div>
        }
        description={
          "An extensive library of widgets and apps, and detailed step-by-step guides"
        }
        ratingNum={9.1}
        ratingStar={4}
        ratingText={"Very Good"}
      />
      <h1 className="mt-12 text-grayText2 font-normal text-4xl">
        Related deals you might like for
      </h1>
    </div>
  );
}
