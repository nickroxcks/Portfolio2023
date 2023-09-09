import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import { useMediaQuery } from "@mui/material";

const Title = styled.h1`
  font-size: 60px;
  margin-top: 2px;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-family: Lato;
  @media only screen and (max-width: 1000px) {
    text-align: center;
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

const Button = styled.button`
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
          "flexDirection": "column",
          "justifyContent": "center",
          "alignItems": "center",
        }}
      >
        <TopDesc>HI THERE, WELCOME TO MY SITE</TopDesc>
        <Title>
          I'm Nick
          <br /> A Full Stack
          <p
            style={{
              color: "#da4ea2",
              margin: 0,
              opacity: 0.75,
              "backgroundClip": "text",
            }}
          >
            {" "}
            Software Engineer
          </p>
        </Title>
        <Desc>The only way to make great work is to love what you do</Desc>
        <Button>Learn More</Button>
      </div>
    </motion.div>
  );
};

export default Hero;
