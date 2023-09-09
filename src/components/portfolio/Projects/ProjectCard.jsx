import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../motion";

export default function ProjectCard(props) {
  const theme = useTheme();

  const pink = theme.palette.primary.pink;
  const testColor = theme.palette.background.alt;
  return (
    <motion.div
      variants={zoomIn(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
    >
      <Card
        sx={[
          {
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            position: "relative",
            background: 'linear-gradient(to left top, #0c0218, #13061f, #190a26, #1e0d2d, #250e33, #2f113f, #3a144b, #461757, #581f6e, #6a2785, #7d309e, #9039b7)'
            //background: 'url("./img/bg.jpeg")'
            //backgroundColor: "#0f1624",

          },
        ]}
        
      >
        <CardActionArea>
          <CardMedia component="img" image={props.data.src} alt="VDPS" />
        </CardActionArea>
        <CardContent 
        //sx={{height: '300px'}}
        >
          <Typography
            textAlign="center"
            gutterBottom
            variant="h3"
            component="div"
          >
            {props.data.title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {props.data.description}
          </Typography>
        </CardContent>
        <Box sx={{ textAlign: "center" }}>
          {props.data.stack.map((skill, index) => {
            return(
            <IconButton key={index} aria-label="delete" sx={{ background: testColor, marginRight: 3 }}>
              {skill}
            </IconButton>)
          })}
          
        </Box>
        <CardActions disableSpacing={true} sx={{ justifyContent: "center" }}>
          <Button
            disabled={!props.data.liveDemoLink}
            href={props.data.liveDemoLink}
            size="small"
            sx={{color: pink}}
          >
            Demo
          </Button>
          <Button
            disabled={!props.data.codeLink}
            href={props.data.codeLink}
            size="small"
            sx={{color: pink}}
          >
            Code
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
