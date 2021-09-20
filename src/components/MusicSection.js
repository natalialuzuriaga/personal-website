import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";

function MusicSection() {
  return (
    <InnerLayout>
      <MusicSectionStyle>
        <Title title={"Music"} span={"Music"} />
        <div className="music">
          <h3>Coming Soon!</h3>
        </div>
      </MusicSectionStyle>
    </InnerLayout>
  );
}

const MusicSectionStyle = styled.div`
  .music {
    margin-top: 3.5rem;
  }
`;

export default MusicSection;
