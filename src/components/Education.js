import React from "react";
import styled from "styled-components";
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
            year={"09/2019 - 06/2023"}
            title={"University of California, Los Angeles (UCLA)"}
            subTitle={"B.S. Computer Science - School of Engineering"}
            text={
              "Relevant Coursework: Object Oriented Programming, Data Structures & Algorithms, Computer Organization, Programming Languages, Operating Systems, Data Science, Using Data to Learn about Society "
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
