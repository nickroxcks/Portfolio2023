import { Box, Typography, useTheme } from "@mui/material"
import styled from "styled-components";

const Divider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background: #da4ea2;
  margin-bottom: 20px;
`;

const SectionTitle = (props) => {

  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
    return(
        <Box mt={2}>
        <Typography
          variant="h4"
          color= "rgba(255, 255, 255, 0.75)"
          fontWeight="700"
          fontSize="35px"
          marginBottom={"5px"}
        >
          {props.title}
        </Typography>
        <Divider />
      </Box>
    )
}

export default SectionTitle