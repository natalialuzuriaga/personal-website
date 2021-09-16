import React from "react";
import styled from "styled-components";
import SmallTitle from "../components/SmallTitle";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ResumeItem from "../components/ResumeItem";

function Involvement() {
    const activities = <EmojiObjectsIcon/>

  return (
    <InvolvementStyle>
        <div className="small-title-involvement">
        <SmallTitle icon={activities} title={"Involvement"} />
        </div>
        <div className="involvement-content">
          <ResumeItem
            year={"Oct 2019 - Present"}
            title={"Nova, Tech for Good"}
            subTitle={
              "Mobile Developer, Executive Board Member, Director of Workshops"
            }
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
    </InvolvementStyle>
  );
}

const InvolvementStyle = styled.section`
  .small-title-involvement{
    padding-bottom: 2rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .involvement-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Involvement;
