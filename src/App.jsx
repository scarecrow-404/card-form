import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Complete from "./components/Complete";
import Card from "./components/Card";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [dateMM, setDateMM] = useState("");
  const [dateYY, setDateYY] = useState("");
  const [cvc, setCvc] = useState("");
  const [validCardNumber, setValidCardNumber] = useState(true);
  const [validCardName, setValidCardName] = useState(true);
  const [validDateMM, setValidDateMM] = useState(true);
  const [validDateYY, setValidDateYY] = useState(true);
  const [validCvc, setValidCvc] = useState(true);
  const [completeState, setCompleteState] = useState(false);
  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [numberIsEmpty, setNumberIsEmpty] = useState(false);
  const [dateMMIsEmpty, setDateMMIsEmpty] = useState(false);
  const [dateYYIsEmpty, setDateYYIsEmpty] = useState(false);
  const [cvcIsEmpty, setCvcIsEmpty] = useState(false);
  const [isCorrectFormat, setIsCorrectFormat] = useState(true);
  const isEmpty = {
    nameIsEmpty: nameIsEmpty,
    numberIsEmpty: numberIsEmpty,
    dateMMIsEmpty: dateMMIsEmpty,
    dateYYIsEmpty: dateYYIsEmpty,
    cvcIsEmpty: cvcIsEmpty,
  };
  const validate = {
    number: validCardNumber,
    name: validCardName,
    dateMM: validDateMM,
    dateYY: validDateYY,
    cvc: validCvc,
  };

  function handleSubmit(e) {
    e.preventDefault();

    cardName === "" ? setNameIsEmpty(true) : setNameIsEmpty(false);
    cardNumber === "" ? setNumberIsEmpty(true) : setNumberIsEmpty(false);
    dateMM === "" ? setDateMMIsEmpty(true) : setDateMMIsEmpty(false);
    dateYY === "" ? setDateYYIsEmpty(true) : setDateYYIsEmpty(false);
    cvc === "" ? setCvcIsEmpty(true) : setCvcIsEmpty(false);

    let test = cardNumber.match(/^[0-9\s]*$/) && cardNumber.length === 19;
    test ? setIsCorrectFormat(true) : setIsCorrectFormat(false);
    userData.cvc.length === 3 ? setValidCvc(true) : setValidCvc(false);
    userData.cardNumber.length !== 19 && cardNumber.match(/^[0-9\s]*$/)
      ? setValidCardNumber(false)
      : setValidCardNumber(true);
    userData.dateMM.length === 2 ? setValidDateMM(true) : setValidDateMM(false);
    userData.dateYY.length === 2 ? setValidDateYY(true) : setValidDateYY(false);
    userData.cardName.length === 0
      ? setValidCardName(false)
      : setValidCardName(true);
    validateInput(userData);
    console.log(validate);

    if (test && dateMM && dateYY && cvc && cardName) setCompleteState(true);
  }
  function validateInput(userData) {}
  const setValidate = {
    setValidCardNumber: setValidCardNumber,
    setValidCardName: setValidCardName,
    setValidDateMM: setValidDateMM,
    setValidDateYY: setValidDateYY,
    setValidCvc: setValidCvc,
  };
  const userData = {
    cardNumber: cardNumber,
    cardName: cardName,
    dateMM: dateMM,
    dateYY: dateYY,
    cvc: cvc,
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');
      </style>
      <div className=" flex h-fit w-screen flex-col  justify-start gap-[15%] lg:flex-row">
        <Card userData={userData} />
        <div className="h-fit lg:w-[40%] lg:items-center lg:justify-center lg:self-center">
          {!completeState ? (
            <Form
              userData={userData}
              setCardName={setCardName}
              setCardNumber={setCardNumber}
              setCvc={setCvc}
              setDateMM={setDateMM}
              setDateYY={setDateYY}
              validate={validate}
              isEmpty={isEmpty}
              isCorrectFormat={isCorrectFormat}
              onSubmit={handleSubmit}
            />
          ) : (
            <Complete
              setCardName={setCardName}
              setCardNumber={setCardNumber}
              setCvc={setCvc}
              setDateMM={setDateMM}
              setDateYY={setDateYY}
              setCompleteState={setCompleteState}
              completeState={completeState}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
