import React, { useEffect, useState } from "react";
import backCardPic from "../assets/bg-card-back.png";
import frontCardPic from "../assets/bg-card-front.png";
import cardLogo from "../assets/card-logo.svg";
import bgMobile from "../assets/bg-main-mobile.png";
import bgDesktop from "../assets/bg-main-desktop.png";
const Card = ({ userData }) => {
  const [isDisplayMobile, setIsDisplayMobile] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    const handleMobileDisplay = () => {
      width > 1024 ? setIsDisplayMobile(false) : setIsDisplayMobile(true);
    };
    window.addEventListener("resize", handleResize);
    handleMobileDisplay();
    return () => {
      // console.log(isDisplayMobile);
      window.removeEventListener("resize", handleResize);
      handleMobileDisplay();
    };
  }, [width]);

  return (
    <section
      className={`relative h-[30vh] w-full bg-cover lg:h-[100vh] lg:w-[33vw]`}
      style={{
        backgroundImage: `url(${isDisplayMobile ? bgMobile : bgDesktop})`,
      }}
    >
      <div className="card relative mx-auto h-[25%] max-w-[400px] lg:h-full">
        <div className="back-card absolute inset-y-7 right-3 z-10 h-fit lg:left-[60%] lg:top-[50%] lg:w-[350px]">
          <img
            src={backCardPic}
            alt="Back side of card"
            className=" w-[275px] lg:w-[350px]"
          />
          <div className="cvv-display absolute right-8 top-[62px] z-40 text-white lg:right-9 lg:top-[85px]">
            {userData.cvc ? userData.cvc : "123"}
          </div>
        </div>
        <div className="front-card absolute inset-y-28 left-5 z-20 h-fit lg:left-[45%] lg:top-[20%] lg:w-[350px]">
          <img
            src={frontCardPic}
            alt="Front side of card"
            className="w-[275px] lg:w-[350px]"
          />
          <div className="card-logo absolute left-5 top-5 z-30 w-14">
            <img src={cardLogo} alt="Card logo" />
          </div>
          <p className="card-number absolute left-6 top-20 text-xl text-white lg:top-28">
            {userData.cardNumber ? userData.cardNumber : "0000 0000 0000 0000"}
          </p>
          <p className="card-holder-name absolute left-6 top-[115px] z-30 text-xs text-white lg:top-36">
            {userData.cardName ? userData.cardName : "JANE APPLESEED"}
          </p>
          <p className="MM-YY absolute right-8 top-[115px] text-xs text-white lg:top-36">
            {userData.dateMM ? `${userData.dateMM}/` : "MM/"}
          </p>
          <p className="MM-YY absolute right-4 top-[115px] text-xs text-white lg:top-36">
            {userData.dateYY ? userData.dateYY : "YY"}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Card;
