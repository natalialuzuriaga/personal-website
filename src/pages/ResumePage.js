import React from "react";
import { MainLayout } from "../styles/Layouts";
import Title from "../components/Title";

import Education from "../components/Education";
import Involvement from "../components/Involvement";
import Resume from "../components/Resume";

function ResumePage() {
  return (
    <MainLayout>
      <Title title={"Resume"} span={"resume"} />
      <Education />
      <Resume />
      <Involvement />
    </MainLayout>
  );
}

export default ResumePage;
