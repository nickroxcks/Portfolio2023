/*
import React, { useCallback, Suspense } from "react";
import styled from "styled-components";
import Navbar from "scenes/navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../motion";
import { Box, useMediaQuery } from "@mui/material";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleData from "constants/particlesjs-config";
import { Opacity } from "@mui/icons-material";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;



  @media only screen and (max-width: 1000px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 6%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1000px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  margin-top: 2px;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 700;
  font-family: Lato;
  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
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
  background-color: #da4ea2;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Rubik,sans-serif;
  font-weight: 700;
  font-size: 20px;
  position: relative;
  opacity:0.75;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1000px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: flex;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  //max-width: 768px
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
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
  
  return (
    <motion.div variants={fadeIn("up", "tween", 0.3, 1)} initial="hidden"
    whileInView="show" id="hero">
    <Section>
    
      <Container>
        
        <Left>
          <TopDesc>HI THERE, WELCOME TO MY SITE</TopDesc>
          <Title>
            I'm Nick
            <br /> A Full Stack
            <p style={{ color: "#da4ea2", margin: 0, opacity:0.75 }}> Software Engineer</p>
          </Title>
          <Desc>
            The only way to make great work is to love what you do
          </Desc>
          <Button>Learn More</Button>
        </Left>

        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
      </Section>
    </motion.div>
  );
};

export default Hero;
*/