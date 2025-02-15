import * as React from "react";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import "./Contact.css";
import Contactbutton from "../../utils/Contactbutton";
const Contact = () => {



    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
  const gridStyle = {
     
      width: "11rem",
     
  };

  const mainGrid = { 
    marginTop : "1rem",
   
    
};

  

  return (
    <>
      <div className="paddings paddings">
        <div className="contact-wrapper">
          <div className="contact-text">
            <div className="orange"> Contact Us </div>
            <div className="primary-contact-text">
              Ready to invest? <br />
            </div>
            <div className="secondary-contact-text">
              {" "}
              Feel free to reach out to us to any of the medium here, we will
              reach out to you quickly.
            </div>

               <div className="grid-container">
                <Grid   style={mainGrid} container spacing={3}>
                  <Grid  className="grid" style={gridStyle} item xs={12} md={6}>
                     <Contactbutton
                     svg = {<svg 

            
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="#4066ff"
                        class="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                      </svg>}
                     main='Call'
                     dispatch = '+91 7050910817'
                     custom = 'Contact '/>
                  </Grid>
                  <Grid   className="grid"  style={gridStyle} item xs={12} md={6}>
                  <Contactbutton
                  svg = {<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4066ff" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                </svg>}
                 main='Message'
                 dispatch = '+91 7050910817'
                 custom = 'Message '/>
                
                  </Grid>
                  <Grid   className="grid"   style={gridStyle}item xs={12} md={6}>
                  <Contactbutton
                  svg = {<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4066ff" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                </svg>}
                 main='Email'
                 dispatch = 'satyamraj1643@gmail.com'
                 custom = 'Email '/>
                  </Grid>
                  <Grid  className="grid"  style={gridStyle} item xs={12} md={6}>
                  <Contactbutton
                  svg = {<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4066ff" class="bi bi-chat" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                </svg>}
                     main='Chat'
                     dispatch = '+91 7050910817'
                     custom = 'Chat '/>
                  </Grid>
                </Grid>
                </div>
              
          </div>
          <div className="contact-image-container">
            <img className="contact-image" src="./contact.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
