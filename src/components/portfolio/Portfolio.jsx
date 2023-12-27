import Hero from "./Hero/Hero";
import styled from "styled-components";
import { Box, Typography, useMediaQuery } from "@mui/material";
import NavbarPortfolio from "./NavbarPortfolio";
import { useTheme } from "@emotion/react";
import FlexBetween from "components/FlexBetween";
import Projects from "./Projects/Projects";
import Timeline from "./Timeline/Timeline";
import Skills from "./Skills/Skills";
//import Skills from "./Skills/testSkills";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleData from "constants/particlesjs-config";
import Contact from "./Contact/Contact";
import { useRef } from "react";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Portfolio = () => {
  const theme = useTheme();
  //const portfolioColor = theme.palette.background.portfolio;
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const isNonMobile = useMediaQuery("(min-width:1000px)");

  //rgb(242, 245, 247);
  //sx={{ background: 'url("./img/bg.jpeg")' }}
  //#0f1624  og background color
  //Color of fakebook elements #1A1A1A

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right bottom, #0c0218, #13061f, #190a26, #1e0d2d, #250e33, #2f113f, #3a144b, #461757, #581f6e, #6a2785, #7d309e, #9039b7)",
      }}
    >

        <Particles
          id="tsparticles"
          options={particleData}
          init={particlesInit}
          loaded={particlesLoaded}
          style={{position: 'absolute'}}
        ></Particles>
        <NavbarPortfolio/>

        <Hero/>


      <Box
        width="100%"
        padding="1rem 6%"
        gap="0.5rem"
        //position={"absolute"}  will get rid of animation
        //sx={{ background: 'linear-gradient(to right bottom, #9b14af, #ea007d, #ff4c45, #fa9405, #d1d01b)' }}
      >
        <Projects />
        <Timeline />
        <Skills />

        <Contact id="contact" />
      </Box>
      {/*
        <FlexBetween backgroundColor={portfolioColor}>
        <Typography>Test</Typography>
        </FlexBetween>

        */}
    </Box>
  );
};

export default Portfolio;