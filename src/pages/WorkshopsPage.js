import React, {useState} from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import WorkshopCard from "../components/WorkshopCard";
import Button from "../components/Button";

import workshops from "../data/Workshops";

const allButtons = ['All', ...new Set(workshops.map(item => item.category))]

function WorkshopsPage() {
    const [menuItem, setMenuItems] = useState(workshops);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All') {
            setMenuItems(workshops)
            return;
        }

        const filterData = workshops.filter(item => item.category === button);
        setMenuItems(filterData);
    }

    return (
        <MainLayout>
            <Title title={'Workshops'} span={'workshops'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <WorkshopCard workshopItem={menuItem}/>
                <br/>
                <ComingSoonStyle>
                <h4><em>Workshops Details Page Coming Soon!</em></h4>
                </ComingSoonStyle>
            </InnerLayout>
        </MainLayout>
    )
}

const ComingSoonStyle = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;
`;

export default WorkshopsPage;