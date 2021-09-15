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
            <InnerLayout>
                    <div className="small-title">
                        <SmallTitle icon={briefcase} title={"Work Experience"}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                            year={'June 2021 - Aug 2021'}
                            title={'Software Engineering Intern'}
                            subTitle={'BlackLine - UI Platform Engineering Team'}
                            text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '}
                        />
                        <ResumeItem
                            year={'March 2021 - Present'}
                            title={'Junior Data Analyst'}
                            subTitle={'UCLA Transportation Department - Data Lab'}
                            text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '}
                        />
                        <ResumeItem
                            year={'Sept 2018 - Sept 2019'}
                            title={'System Analyst Intern'}
                            subTitle={'Prudential Financial - Managed Service Department'}
                            text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '}
                        />
                    </div>
                    <div className="small-title">
                    </div>
            </InnerLayout>
        </ResumeStyle>
    )
}

const ResumeStyle = styled.section`
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;