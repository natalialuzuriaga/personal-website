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
              "• Works on pro-bono software projects that empowers nonprofit organizations to better serve their communities • Spearheads Nova’s first workshops (Data Vis, Web Scraping & Data Analysis in Python, Mental Health Chatbots)"
            }
          />
          <ResumeItem
            year={"June 2021 - Present"}
            title={"Congressional App Challenge Alumni Advisory Board"}
            subTitle={"Director of Workshops"}
            text={
              "• Pioneers the organization’s first workshop series offered to middle and high school students across the nation • Crafts workshops in App Ideation and Web Development to guide participants towards completing their apps"
            }
          />
          <ResumeItem
            year={"Oct 2019 - Present"}
            title={"exploretech.la"}
            subTitle={"Content Team Member"}
            text={
              "• Organized a tech education event with 50+ high school attendees from underserved communities in LA County • Led creation of 3 new workshops (Tech & Society, Data Science, Internet) and 1 panel throughout two events"
            }
          />
          <ResumeItem
            year={"Oct 2020 - Present 2021"}
            title={"Society of Women Engineers - UCLA"}
            subTitle={"Diversity Outreach Director - Advocacy Committee"}
            text={
              "• Led Diversity Showcase where students of different backgrounds share their experiences of pursuing STEM \n• Lobbied for AB 1225: The Dignity for Incarcerated Women Act"
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
