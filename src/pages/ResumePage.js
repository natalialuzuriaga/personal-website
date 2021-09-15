import React from "react";
import { MainLayout } from "../styles/Layouts";
import SchoolIcon from "@material-ui/icons/School";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Resume from "../components/Resume";
import SmallTitle from "../components/SmallTitle";
import ResumeItem from "../components/ResumeItem";
import Title from "../components/Title";

function ResumePage() {
  const school = <SchoolIcon />;
  const activities = <EmojiObjectsIcon/>

  return (
    <MainLayout>
      <Title title={"Resume"} span={"resume"} />
        <div className="small-title-education">
          <SmallTitle icon={school} title={"Education"} />
            <ResumeItem
              year={"Expected Grad Date June 2023"}
              title={"University of California, Los Angeles (UCLA)"}
              subTitle={"B.S. Computer Science - School of Engineering"}
              text={
                "Coursework: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
        </div>
      <Resume />
      <div className="activities">
          <SmallTitle icon={activities} title={"Involvement"} />
            <ResumeItem
              year={"Oct 2019 - Present"}
              title={"Nova, Tech for Good"}
              subTitle={"Mobile Developer, Executive Board Member, Director of Workshops"}
              text={
                "Education: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
            <ResumeItem
              year={"June 2021 - Present"}
              title={"Congressional App Challenge Alumni Advisory Board"}
              subTitle={"Director of Workshops"}
              text={
                "Education: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
            <ResumeItem
              year={"Oct 2019 - Present"}
              title={"exploretech.la"}
              subTitle={"Content Team Member"}
              text={
                "Education: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
            <ResumeItem
              year={"Oct 2020 - Present"}
              title={"Society of Women Engineers (UCLA) Advocacy Committee"}
              subTitle={"Diversity Outreach Director"}
              text={
                "SWE: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
        </div>
    </MainLayout>
  );
}

export default ResumePage;
