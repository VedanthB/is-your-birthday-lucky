import React, { useState } from "react";
import happy from "./happy.svg";
import unhappy from "./sad.svg";

import ParticlesBg from "particles-bg";

let dateInput = "";
let luckyNo = 0;
//var stores img div
const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="100%" height="200px" />
);

export default function App() {
  //state to display privacy notice
  const [displayAlert, setDisplayAlert] = useState("flex");
  //state for result text and image
  const [displayResult, setDisplayResult] = useState(["", ""]);

  function checkBtnHandler(e) {
    //to stop refreshing page on submit form
    e.preventDefault();
    //to convert the date into small strings
    const dateArray = dateInput.split("-");
    let sum = 0;
    //to access each string
    dateArray.map((string) => {
      //to access each number in string and add into sum
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
      return sum;
    });
    //check if sum divisible by lucky no.
    if (sum % Number(luckyNo) === 0) {
      setDisplayResult(["Hurray!!You are a lucky person!", happyImgDiv]);
    } else {
      setDisplayResult([
        "Oops!!Your birthday is not a lucky number!",
        unhappyImgDiv,
      ]);
    }
  }

  return (
    <>
      <div className="App">
        {/* header section */}
        <div
          className="parallax"
          style={{
            minHeight: "100vh",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="titleOfPage">
            <h1>Is Your Birthday Lucky?</h1>
            <a href="#mainSection">👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻</a>
          </div>
        </div>

        {/* body part of the page */}
        <section id="mainSection" className="section">
          {/* alert-box for privacy notice */}
          <div id="alertBox" style={{ display: `${displayAlert}` }}>
            <div className="notice">
              <strong>Privacy Notice!</strong> We are not storing your data.
            </div>

            <div
              onClick={() => {
                setDisplayAlert("none");
              }}
              style={{
                paddingLeft: "1rem",
                cursor: "pointer",
                fontSize: "0.5rem",
              }}
            >
              <span role="img" aria-labelledby="crossIcon">
                &#10060;
              </span>
            </div>
          </div>

          {/* form section for inputs */}
          <h2>Enter Your Birth-Date and lucky number to continue...</h2>
          <form onSubmit={checkBtnHandler}>
            <label className="label" htmlFor="datePicker">
              Select your Birth date:
            </label>
            <input
              id="datePicker"
              onChange={(e) => {
                dateInput = e.target.value;
              }}
              type="date"
              required
            />
            <label className="label" htmlFor="luckyNo">
              Enter your Lucky Number:
            </label>
            <input
              id="luckyNo"
              min="1"
              step="1"
              required
              onChange={(e) => {
                luckyNo = e.target.value;
              }}
              type="number"
            />
            <button type="submit">check</button>
          </form>

          {/* output result section */}
          <div className="output">
            <div className="label">{displayResult[0]}</div>
            {displayResult[1]}
          </div>

          {/* footer section */}
          <footer>
            <ul>
              <li className="footerLink">
                <a href="https://github.com/VedanthB">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li className="footerLink">
                <a href="https://twitter.com/vedanth56353395">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="footerLink">
                <a href="https://www.linkedin.com/in/vedanth-bora-a7553818b/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="footerLink">
                <a href="https://vedanthbora.netlify.app">
                  <i className="fas fa-briefcase"></i>
                </a>
              </li>
            </ul>

            <div className="legacyText">
              © 2020 | vedanthB |{" "}
              <a
                className="privacy-policy"
                href="#alertBox"
                onClick={() => {
                  setDisplayAlert("flex");
                }}
                style={{ cursor: "pointer", color: "Black" }}
              >
                Privacy Policy
              </a>
            </div>
          </footer>
        </section>
        <ParticlesBg
          type="fountain"
          bg={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            height: "1800px",
          }}
        />
      </div>
    </>
  );
}
