import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import SmallTitle from "./SmallTitle";

import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

function Education() {
    const school = <SchoolIcon />;

  return (
    <EducationStyle>
        <div className="small-title-education">
          <SmallTitle icon={school} title={"Education"} />
        </div>
        <div className="education-content">
          <ResumeItem
            year={"Sept 2019 - June 2023"}
            title={"University of California, Los Angeles (UCLA)"}
            subTitle={"B.S. Computer Science - School of Engineering"}
            text={
              "Coursework: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
    </EducationStyle>
  );
}

const EducationStyle = styled.section`

  .small-title-education {
    padding-bottom: 1rem;
  }
  .education-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Education;
