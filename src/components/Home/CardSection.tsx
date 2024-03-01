import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="md:w-[1024px] w-full">
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <Card
          image={"/section/section.png"}
          discount={"20%"}
          title={"Webbuilder 1"}
          description={"Computer  Modern clasic with wix support"}
          Discountedprice={"39.96"}
          OriginalPrice={"$49.96"}
        />
        {/* card2 */}
        <Card
          image={"/section/section.png"}
          discount={"20%"}
          title={"Webbuilder 1"}
          description={"Computer  Modern clasic with wix support"}
          Discountedprice={"39.96"}
          OriginalPrice={"$49.96"}
        />
        {/* card3 */}
        <Card
          image={"/section/section.png"}
          discount={"20%"}
          title={"Webbuilder 1"}
          description={"Computer  Modern clasic with wix support"}
          Discountedprice={"39.96"}
          OriginalPrice={"$49.96"}
        />
      </div>
    </div>
  );
};

export default CardSection;
