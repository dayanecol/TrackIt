import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import React from "react";
import styled from "styled-components";

export default function ProgressBar({percentage}) {
  return (
    <StyleProgressBar>
        <Example>
            <CircularProgressbar
                value={percentage}
                text={`Hoje`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                })}
            />
        </Example>
    </StyleProgressBar>  
    
  );
}

function Example(props) {
  return (
    <div style={{ marginBottom: "50px", marginLeft:"20px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "91px"}}>
          {props.children}
        </div>
        <div style={{ width: "18px" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

const StyleProgressBar = styled.div`
    /*
    * react-circular-progressbar styles
    * All of the styles in this file are configurable!
    */

    .CircularProgressbar {
    /*
    * This fixes an issue where the CircularProgressbar svg has
    * 0 width inside a "display: flex" container, and thus not visible.
    */
    width: 100%;
    /*
    * This fixes a centering issue with CircularProgressbarWithChildren:
    * https://github.com/kevinsqi/react-circular-progressbar/issues/94
    */
    vertical-align: middle;
    }

    .CircularProgressbar .CircularProgressbar-path {
    stroke: #52b6ff;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
    }

    .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;
    /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
    stroke-linecap: round;
    }

    .CircularProgressbar .CircularProgressbar-text {
    fill: #52b6ff;
    font-size: 18px;
    dominant-baseline: middle;
    text-anchor: middle;
    }

    .CircularProgressbar .CircularProgressbar-background {
    fill: #d6d6d6;
    }

    /*
    * Sample background styles. Use these with e.g.:
    *
    *   <CircularProgressbar
    *     className="CircularProgressbar-inverted"
    *     background
    *     percentage={50}
    *   />
    */
    .CircularProgressbar.CircularProgressbar-inverted
    .CircularProgressbar-background {
    fill: #52b6ff;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
    fill: #fff;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: #fff;
    }

    .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
    stroke: transparent;
    }


`;
