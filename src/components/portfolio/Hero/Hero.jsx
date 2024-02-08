import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import { useMediaQuery, Button } from "@mui/material";

const Title = styled.h1`
  font-size: 60px;
  margin-top: 2px;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-family: Lato;
  @media only screen and (max-width: 1000px) {
    text-align: center;
    font-size: 45px;
  }
`;
const TopDesc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin-bottom: 0px;
  @media only screen and (max-width: 1000px) {
    padding: 10px;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin: 0;
  margin-bottom: 2px;
  @media only screen and (max-width: 1000px) {
    padding: 20px;
    text-align: center;
  }
`;

/*
background: linear-gradient(
    to right,
    #d41aa4,
    #c9209e,
    #be2498,
    #b32892,
    #a92a8c,
    #a12887,
    #992782,
    #91257d,
    #891f78,
    #811973,
    #7a136e,
    #720c69
  );

*/
const Button2 = styled.button`
background: linear-gradient(to right, #d41aa4, #c9209e, #be2498, #b32892, #a92a8c, #a12887, #992782, #91257d, #891f78, #811973, #7a136e, #720c69);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 20px;
  position: relative;
  opacity: 0.9;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05)
  }

  @keyframes light {
    0% {
          background-position:-600px; 
    }
    100% { 
          background-position:0px; 
    }
  }
          
  @-webkit-keyframes light {
    0% {
          background-position:-600px; 
    }
    100% { 
          background-position:0px; 
    }
  }
`;

const Hero = () => {
  //max-width: 768px
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      id="hero"
    >
      <div
        style={{
          textAlign: "center",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TopDesc>HI THERE, WELCOME TO THE COMPETITION OF</TopDesc>
        <Title>
          NICHOLAS
          <br />
           VS
          <br /> AMANDA
          <p
            style={{
              color: "#da4ea2",
              margin: 0,
              opacity: 0.75,
              backgroundClip: "text",
            }}
          >
            {" "}
            This competition is owned by Nick Serrano
          </p>
        </Title>
        <Desc>The FCA provides that any person who knowingly submits, or causes to submit, 
          <br/>to false claims of owership is liable for federal persecution </Desc>
        <a href="#contact"><Button2>Contact Me</Button2></a>
      </div>
    </motion.div>
  );
};

export default Hero;
