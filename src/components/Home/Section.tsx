import React from "react";
import SectionCard from "./SectionCard";
import { hasUncaughtExceptionCaptureCallback } from "process";

export default function Section() {
  return (
    <div className="flex flex-col md:w-[1024px] w-full h-fit gap-3">
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
        description={
          " An extensive library of widgets and apps, and detailed step-by-step guides"
        }
        highlight={
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        }
        ratingNum={9.3}
        ratingStar={5}
        ratingText={"Exceptional"}
      />
      <h1 className="mt-12 text-grayText2 font-normal text-4xl">
        Related deals you might like for
      </h1>
    </div>
  );
}
