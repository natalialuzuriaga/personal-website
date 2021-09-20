import React, {useState} from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import Menu from "../components/Menu";
import Button from "../components/Button";

import projects from "../data/Projects";

const allButtons = ['All', ...new Set(projects.map(item => item.category))]

function ProjectsPage() {
    const [menuItem, setMenuItems] = useState(projects);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All') {
            setMenuItems(projects)
            return;
        }

        const filterData = projects.filter(item => item.category === button);
        setMenuItems(filterData);

    }

    return (
        <MainLayout>
            <Title title={'Projects'} span={'projects'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem}/>
                <br/>
                <ComingSoonStyle>
                <h4><em>Project Details Page Coming Soon!</em></h4>
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

export default ProjectsPage;