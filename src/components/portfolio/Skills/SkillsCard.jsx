import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../motion";

const SkillsCard = (props) => {

    ////background-image: linear-gradient(to right bottom, #9b14af, #ea007d, #ff4c45, #fa9405, #d1d01b);
  return (
    <motion.div
    variants={zoomIn(0.2, 0.5)}
    initial="hidden"
    whileInView="show"
  >
    <Card
      sx={[
        {
          "&:hover": {
            textShadow: "0px 0px 10px rgb(255,255,255)",
            boxShadow: "0px 0px 10px rgb(255,255,255)",
            transform: "scale(1.05)",
          },
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          background: 'linear-gradient(to left top, #0c0218, #13061f, #190a26, #1e0d2d, #250e33, #2f113f, #3a144b, #461757, #581f6e, #6a2785, #7d309e, #9039b7)',
          //background: props.data.color,
          position: "relative"
        },
      ]}
    >
      <Typography variant="h3" align="center" mb={1} sx={{ fontSize: "20px", color: "rgba(255, 255, 255)",  fontWeight: "bold"  }}>{props.data.title}</Typography>
      {props.data.skillsList.map((skill, index) => (
        <Typography key={index} variant="h5" align="center" mb={1} sx={{ fontSize: "15px", color: "rgba(255, 255, 255)",  fontWeight: "bold"  }}>{skill}</Typography>
      ))}
    </Card>
    </motion.div>
  );
};

export default SkillsCard;
