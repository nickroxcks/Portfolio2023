import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import styled from "styled-components";
import { projectData } from "constants/constants";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../SectionTitle";

const Projects = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const portfolioColor = theme.palette.background.portfolio;
  return (
    <div id="projects">
      <SectionTitle title={"PROJECTS"} />
      <Box
        width="100%"
        padding="2rem 6%"
        gap="0.5rem"

      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          justify="center"
        >
          {projectData.map((data, index) => {
            return (
              <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
                <ProjectCard key={data.id} data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
