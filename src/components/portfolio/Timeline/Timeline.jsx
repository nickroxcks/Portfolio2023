import React from "react";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineElements from "../../../constants/timelineElements";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@emotion/react";
import SectionTitle from "../SectionTitle";
import { Box } from "@mui/material";
import { color } from "framer-motion";
const tempStyles = {
  position: "relative",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "background-position": "bottom",
};
const Timeline = () => {
  let workIconStyles = {
    background: "#A31EB6",
    "borderRadius": "50%",
    "boxShadow": "0 0 0 4px #0f1624",
  };
  let schoolIconStyles = {
    background: "#da4ea2",
    "borderRadius": "50%",
    "boxShadow": "0 0 0 4px #0f1624",
  };
  const theme = useTheme();
  const portfolioColor = theme.palette.background.portfolio;
  return (
    <div id='timeline'>
      <Box>
        <SectionTitle title={"TIMELINE"} />
        <VerticalTimeline animate={true} lineColor="#0f1624">
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                //contentStyle={{ background: "transparent" }}
                contentStyle={{ background:'linear-gradient(to left top, #0c0218, #13061f, #190a26, #1e0d2d, #250e33, #2f113f, #3a144b, #461757, #581f6e, #6a2785, #7d309e, #9039b7)'}}
                iconClassName="bounce-out"
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "white" }}
                >
                  {element.title}
                </h3>
                <h5
                  className="vertical-timeline-element-subtitle"
                  style={{ color: "white" }}
                >
                  {element.location}
                </h5>
                <p id="description" style={{ color: "white" }}>
                  {element.description}
                </p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href={element.buttonSrc}
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Box>
    </div>
  );
};

export default Timeline;
