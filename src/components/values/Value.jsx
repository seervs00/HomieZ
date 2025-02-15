import * as React from "react";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";



import Downarrow from "../reusable/Downarrow";

import "./Value.css";
const Value = () => {
  const accordionStyle = {
  
    border: "1px solid grey",
    // boxShadow: "var(--shadow)",
  };

  const accordionStyleHover = {
    // Add your hover styles here
    backgroundColor: "#e0e0e0", // Change the background color on hover
    cursor: "pointer", // Change the cursor to a pointer on hover
  };

  const accordianStyleExpanded = {
    border: "1px solid grey",
    boxShadow: "none",
    height: "10rem",
  };

  return (
    <>
    <div className="paddings innerWidth">
      <div className="value-wrapper">
        <div className="value-image-container">
            <img className="value-image" src="./value.png"/>
        </div>
        <div className="value-text">
          <div className="orange"> Our Value</div>
          <div className="primary-value-text"> Value that we nourish.</div>
          <div className="secondary-value-text">
            {" "}
            We are always ready to address all of our costumer needs. <br /> We
            believe we can make familes more happy by providing them house
            according to their needs.
          </div>
          <div className="accordian">
            <div className="accordiandiv">
              <Accordion  className="accordionStyleHover" style={accordionStyle}>
                <AccordionSummary
                  expandIcon={<Downarrow />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="inner-text">
                    <svg
                      className="logo"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#4066ff"
                      class="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                    </svg>
                    <div className="center-text">
                      <span> Best Interest rates in the market</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                Optimize your financial growth with our Best Interest Rates in the Market! From savings to loans, access competitive rates tailored to your goals.
               
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordiandiv">
              <Accordion style={accordionStyle}>
                <AccordionSummary
                  expandIcon={<Downarrow />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <div className="inner-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      fill="#4066ff"
                      class="bi bi-exclamation-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                    </svg>
                    <div className="center-text">
                      <span> Prevent unstable price</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                Stabilize Your Finances: Choose Confidence Over Uncertainty. Our Platform Prevents Unstable Pricing Options, Providing Consistency and Peace of Mind. 
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordiandiv">
              <Accordion style={ accordionStyle}>
                <AccordionSummary
                  expandIcon={<Downarrow />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <div className="inner-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4066ff"
                      class="bi bi-building-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z" />
                      <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                    </svg>
                    <div className="center-text">
                      <span> Best price in the industry </span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                Unbeatable Excellence: Experience the Pinnacle of Value with Our Best Price in the Industry.  
                
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Value;
