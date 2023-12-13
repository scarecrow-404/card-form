import React, { createContext } from "react";
import { useState } from "react";

const Form = ({
  userData,
  setCardName,
  setCardNumber,
  setCvc,
  setDateMM,
  setDateYY,
  validate,
  onSubmit,
  isEmpty,
  isCorrectFormat,
}) => {
  const [info, setInfo] = useState("");
  const [isValidCardNumber, setIsValidCardNumber] = useState(false);
  function cleanCardNumber(e) {
    let cardNumber = e.target.value;
    let temp = cardNumber.replace(/\s/g, "");
    let spaceNumber = temp.replace(/(\S{4})/g, "$1 ");
    setCardNumber(spaceNumber.trim());
  }

  // function isValidCreditCardNumber(cardNumber) {
  //   if (cardNumber.length !== 16) {
  //     return false;
  //   }
  //Luhn algorithm
  //   let sum = 0;
  //   let shouldDouble = false;
  //   for (let i = userData.cardNumber.length - 1; i >= 0; i--) {
  //     let digit = parseInt(cardNumber.charAt(i));

  //     if (shouldDouble) {
  //       digit *= 2;
  //       if (digit > 9) {
  //         digit -= 9;
  //       }
  //     }

  //     sum += digit;
  //     shouldDouble = !shouldDouble;
  //   }

  //   return sum % 10 === 0;
  // }

  return (
    <form
      className="m-5 mx-auto mt-24 flex max-w-[400px] flex-col justify-center gap-1 text-[##21092f]"
      onSubmit={onSubmit}
    >
      <label htmlFor="name">CARDHOLDER NAME</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="e.g.Jane Appleseed"
        className={` h-10 rounded-md border-[1px] p-2 outline-none placeholder:text-[#dedddf]${
          validate.name ? "" : " border-red-500"
        } valid:border-gray- invalid:border-red-500`}
        onChange={(e) => setCardName(e.target.value)}
      />
      <p className=" h-6 text-red-500">
        {isEmpty.nameIsEmpty ? "can't be blank" : ""}
      </p>
      <label htmlFor="cardNumber">CARD NUMBER</label>
      <input
        type="text"
        name="cardNumber"
        id="cardNumber"
        placeholder="e.g.1234 5678 9123 0000"
        value={userData.cardNumber}
        maxLength={19}
        minLength={19}
        className={`h-10 rounded-md border-[1px] p-2 outline-none placeholder:text-[#dedddf] ${
          validate.number ? "" : " border-red-500"
        } ${isCorrectFormat ? "" : " border-red-500"} invalid:border-red-500`}
        onChange={(e) => {
          cleanCardNumber(e);
        }}
      />
      <p className=" h-6 text-red-500">
        {isEmpty.numberIsEmpty ? "can't be blank" : ""}
        {isCorrectFormat ? "" : "wrong format number only"}
      </p>
      <div className="flex flex-col justify-around gap-2">
        <div className="flex gap-6">
          <label htmlFor="dateMM,dateYY">EXP. DATE(MM/YY)</label>
          <label htmlFor="cvc">CVC</label>
        </div>
        <div className="flex gap-2">
          <div className="flex w-[25%]  flex-col ">
            <input
              type="text"
              name="dateMM"
              id="dateMM"
              placeholder="MM"
              value={userData.dateMM}
              maxLength={2}
              minLength={2}
              min={0}
              max={12}
              className={`h-10 rounded-md border-[1px] p-2 outline-none placeholder:text-[#dedddf] ${
                validate.dateMM ? "" : " border-red-500"
              } invalid:border-red-500`}
              onChange={(e) => {
                setDateMM(e.target.value.replace(/\D/g, ""));
              }}
            />
            <p className=" h-6 text-red-500">
              {isEmpty.dateMMIsEmpty ? "can't be blank" : ""}
            </p>
          </div>
          <div className="flex w-[25%]  flex-col ">
            <input
              type="text"
              name="dateYY"
              id="dateYY"
              value={userData.dateYY}
              maxLength={2}
              minLength={2}
              min={0}
              placeholder="YY"
              className={`h-10 rounded-md border-[1px] p-2 outline-none placeholder:text-[#dedddf] ${
                validate.dateYY ? "" : " border-red-500"
              } invalid:border-red-500`}
              onChange={(e) => setDateYY(e.target.value.replace(/\D/g, ""))}
            />
            <p className=" h-6 text-red-500">
              {isEmpty.dateYYIsEmpty ? "can't be blank" : ""}
            </p>
          </div>
          <div className="flex w-[45%]  flex-col ">
            <input
              type="text"
              name="cvc"
              id="cvc"
              value={userData.cvc}
              max={999}
              minLength={3}
              maxLength={3}
              placeholder="e.g. 123"
              className={` h-10 rounded-md border-[1px] p-2 outline-none placeholder:text-[#dedddf]${
                validate.cvc ? "" : " border-red-500"
              } invalid:border-red-500`}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
            />
            <p className=" h-6 text-red-500">
              {isEmpty.cvcIsEmpty ? "can't be blank" : ""}
            </p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className=" mt-4 h-12 w-[100%] self-center rounded-md bg-[#21092f] text-white"
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;
