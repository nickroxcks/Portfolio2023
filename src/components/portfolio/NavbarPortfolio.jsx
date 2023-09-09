import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import {

  Menu,
  Close,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setDarkMode } from "state";
import FlexBetween from "components/FlexBetween";
const NavbarPortfolio = (props) => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch(); //for redux
  //useMediaQuery mui hook, lets us determine if we are below or higher min width defined
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  //const neutralLight = theme.palette.neutral.light;
  //const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;

  let curLocation = 'home'
  const moveWindow = (newLocation) => {
    curLocation = newLocation;
    setIsMobileMenuToggled(!isMobileMenuToggled)

  }
  //const primaryLight = theme.palette.primary.light;
  //const alt = theme.palette.background.alt;
  //const pink = theme.palette.primary.pink;
  dispatch(setDarkMode()); //only dark mode is available for portfolio


  /*
  useEffect(()=> {
    if(!isNonMobileScreens && !isMobileMenuToggled){
      document.getElementById(curLocation).scrollIntoView();
    }

  },
  [isMobileMenuToggled])

  */
  /*
  - FlexBetween we defined is a mui Box. Therefore we can pass the css properties here
  - This works because this is a mui box. Other components you need to use sx prop
  - clamp is a css function that determines a min, prefered, and max value for a font
  - can use sx prop to pass pseudo css
  */
  return (
    
    <FlexBetween padding="1rem 6%" sx={{ backgroundColor: "transparent", }} >
      <FlexBetween>
        <Typography
          sx={{
            fontSize: "30px",
            color: "rgba(255, 255, 255, 0.75)",
            fontWeight: "bold",
          }}
        >
          Nick&nbsp;
        </Typography>
        <Typography

          sx={{
            fontSize: "30px",
            color: "rgba(255, 255, 255, 0.75)",
            fontWeight: "bold",
          }}
        >
          Serrano
        </Typography>
      </FlexBetween>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Button
            sx={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.75)",
              fontWeight: "bold",
            }}
            href="#hero"
          >
            HOME
          </Button>
          <Button
            sx={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.75)",
              fontWeight: "bold",
            }}
            href="#projects"
          >
            PROJECTS
          </Button>
          <Button
            sx={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.75)",
              fontWeight: "bold",
            }}
            href='#skills'
          >
            SKILLS
          </Button>
          <Button
            sx={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.75)",
              fontWeight: "bold",
            }}
            href='#timeline'
          >
            TIMELINE
          </Button>
          <Button
          href="#contact"
            sx={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.75)",
              fontWeight: "bold",
            }}
          >
            CONTACT
          </Button>
          <IconButton href="https://github.com/nickroxcks">
            <GitHub
            
              sx={{ fontSize: "30px", color: "rgba(255, 255, 255, 0.75)" }}
            />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/nicholas-serrano/">
            <LinkedIn
              sx={{ fontSize: "30px", color: "rgba(255, 255, 255, 0.75)" }}
            ></LinkedIn>
          </IconButton>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <Button
              sx={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.75)",
                fontWeight: "bold",
                href: '#home'
              }}
            >
              HOME
            </Button>
            <Button
              sx={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.75)",
                fontWeight: "bold",
                href: '#projects'
              }}
            >
              PROJECTS
            </Button>
            <Button
              sx={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.75)",
                fontWeight: "bold",
                href: '#skills'
              }}
            >
              SKILLS
            </Button>
            <Button
              sx={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.75)",
                fontWeight: "bold",
                href: '#timeline'
              }}
            >
              TIMELINE
            </Button>
            <Button
              sx={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.75)",
                fontWeight: "bold",
                href: '#contact'
              }}
            >
              CONTACT
            </Button>
            <IconButton href="https://github.com/nickroxcks">
              <GitHub
                sx={{ fontSize: "30px", color: "rgba(255, 255, 255, 0.75)" }}
              />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/nicholas-serrano/">
              <LinkedIn
                sx={{ fontSize: "30px", color: "rgba(255, 255, 255, 0.75)" }}
              ></LinkedIn>
            </IconButton>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
    
  );
};

export default NavbarPortfolio;
