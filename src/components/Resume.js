import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from '../components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ResumeItem from '../components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />

    return (
        <ResumeStyle>
                    <div className="small-title-resume">
                        <SmallTitle icon={briefcase} title={"Work Experience"}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                                year={'06/2022 - 08/2022'}
                                title={'Software Engineering Intern'}
                                subTitle={'Handshake'}
                                text={'• Built a full-stack filter to search for users by language proficiency enabling over 30 premium UK partners to discover and identify candidates that best match their needs for international job roles using React, Ruby on Rails, Redux, and Elasticsearch • Served as the Subject Matter Expert of the existing filter dropdown by linking component to fetch data from backend while proposing alternative UX and tech implementations to accommodate with existing frontend functionality and time constraints • Updated 3 webpages to display correct date and time formats based on user’s location for US and UK product using Moment.js • Wrote Rails callback hooks in target segments model to handle archiving of over 100+ existing objects'}
                            />
                        <ResumeItem
                            year={'06/2021 - 08/2021'}
                            title={'Software Engineering Intern'}
                            subTitle={'BlackLine - UI Platform Engineering Team'}
                            text={'• Developed and restyled 5+ components in BlackLine’s next generation UI component library hosted on Storybook using React, Less/CSS, and Ant Design Library • Wrote unit tests to validate functionality and identify bugs using Jest, Enzyme, and React Testing Library • Worked closely with UI/UX, Product, and QA to meet project requirements and desired functionality'}
                        />
                        <ResumeItem
                            year={'03/2021 - Present'}
                            title={'Junior Data Analyst'}
                            subTitle={'UCLA Transportation Department - Data Lab'}
                            text={'• Created 7+ Tableau dashboards analyzing parking occupancy, Salesforce CRM data, & permit sales used daily by 50+ employees • Performed exploratory data analysis on student micro-mobility trends from 3 years’ worth of ride data provided by Bird, Lyft, and Wheels, allowing transportation planners to understand increased electric scooter usage on campus • Implemented new layout and styling standards in Dashboard UI/UX Guide to improve usability and aesthetics'}
                        />
                        <ResumeItem
                            year={'09/2018 - 09/2019'}
                            title={'System Analyst Intern'}
                            subTitle={'Prudential Financial - Managed Service Department'}
                            text={'• Utilized Tableau to create visualizations and consolidate reports into 50+ dashboards used by senior executives • Examined and extracted service-level agreement data, specific operations information, and application lifetime and development cycles'}
                        />
                    </div>
        </ResumeStyle>
    )
}

const ResumeStyle = styled.section`
    .small-title-resume {
        padding-bottom: 2rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;