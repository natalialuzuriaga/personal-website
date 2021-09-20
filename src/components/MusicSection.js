import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";

function MusicSection() {
  return (
    <MusicSectionStyle>
      <Title title={"Music"} span={"Music"} />
      <InnerLayout>
        <div className="music">
          <h3>Coming Soon!</h3>
        </div>
      </InnerLayout>
    </MusicSectionStyle>
  );
}

const MusicSectionStyle = styled.div``;

export default MusicSection;
