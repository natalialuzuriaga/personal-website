import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import CardDeck from "react-bootstrap/CardDeck";

import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import WorkshopCard from "../components/WorkshopCard";
import Button from "../components/Button";

import workshops from "../data/Workshops";

const allButtons = ["All", ...new Set(workshops.map((item) => item.category))];

function WorkshopsPage() {
  const [menuItem, setMenuItems] = useState(workshops);
  const [button, setButtons] = useState(allButtons);
  const workshopsLink = "https://drive.google.com/drive/folders/10_F2K3xu-Z5E-WximfTWCIU7nXR77Klv?usp=share_link"

  const filter = (button) => {
    if (button === "All") {
      console.log(menuItem)
      setMenuItems(workshops);
      return;
    }

    const filterData = workshops.filter((item) => item.category === button);
    setMenuItems(filterData);
  };

  return (
    <MainLayout>
      <Title title={"Workshops"} span={"workshops"} />
      <InnerLayout>
        <ComingSoonStyle>
          <div>
          <PrimaryButton link={workshopsLink} title={"Workshops"}/>
          </div>
        </ComingSoonStyle>
      </InnerLayout>
    </MainLayout>
  );
}

const ComingSoonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 2.4rem auto;
`;

export default WorkshopsPage;
