import React from "react";

const Complete = ({
  setCardName,
  setCardNumber,
  setCvc,
  setDateMM,
  setDateYY,
  setCompleteState,
  completeState,
}) => {
  function handleContinue(e) {
    e.preventDefault();
    setCardName("");
    setCardNumber("");
    setCvc("");
    setDateMM("");
    setDateYY("");
    setCompleteState(false);
    // console.log(completeState);
  }
  return (
    <div className="complete-logo m-6 mx-auto mt-24 flex max-w-[400px] flex-col items-center justify-center gap-8">
      <img src="src/assets/icon-complete.svg" alt="" className=" w-24 " />
      <h1 className=" text-2xl">THANK YOU!</h1>
      <p className=" text-gray-400">We've added your card details</p>
      <button
        type="submit"
        className="mt-4 h-12 w-[100%] self-center rounded-md bg-[#21092f] text-white"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Complete;
