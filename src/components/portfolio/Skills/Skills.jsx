import SectionTitle from "../SectionTitle";
import SkillsCard from "./SkillsCard";
import { skillsData } from "constants/constants";
import { Grid, Typography } from "@mui/material";

const Skills = () => {
  return (
    <div id='skills'>
      <SectionTitle title="SKILLS" />

      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        justify="center"
      >
        {skillsData.map((data, index) => {
          return (
            <Grid key={index} item xs={12} sm={12} md={4} lg={4} xl={4}>
              <SkillsCard key={data.id} data={data}></SkillsCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Skills;
