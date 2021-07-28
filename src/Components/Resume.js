import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layout';
import SmallTitle from './SmallTitle';
import Title from './Title';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const education = <SchoolIcon />
    return (
            <ResumeStyled>
                <Title title={'Resume'} span={'Resume'} />
                <InnerLayout>
                    {/* <SmallTitle icon={briefcase}  title={'Working Experience'}/>
                    <div className="resume-content">
                        <ResumeItem
                        year={'2019 - Present'}
                        title={'Computer Science'}
                        subtitle={'Marg\'ilon Raqamli Texnologiyalar Markazi'}
                        text={"Hi there! Sign up to receive my latest and greatest articles! I promise to never abuse your inbox or sell your info. That's just rude. Never Miss a Great Post. Hi there! Sign up to receive my latest and greatest articles! I promise to never abuse your inbox or sell your info. That's just rude. Never Miss a Great Post."}
                        />
                        <ResumeItem
                        year={'2019 - Present'}
                        title={'Computer Science'}
                        subtitle={'Marg\'ilon Raqamli Texnologiyalar Markazi'}
                        text={"Hi there! Sign up to receive my latest and greatest articles! I promise to never abuse your inbox or sell your info. That's just rude. Never Miss a Great Post. Hi there! Sign up to receive my latest and greatest articles! I promise to never abuse your inbox or sell your info. That's just rude. Never Miss a Great Post."}
                        />
                        <ResumeItem
                        year={'2019 - Present'}
                        title={'Computer Science'}
                        subtitle={'Marg\'ilon Raqamli Texnologiyalar Markazi'}
                        text={"Hi there! Sign up to receive my latest and greatest articles! I promise to never abuse your inbox or sell your info. That's just rude. Never Miss a Great Post. Hi there! Sign up to receive my latest and greatest articles! I promise to never abuse your inbox or sell your info. That's just rude. Never Miss a Great Post."}
                        />
                    </div> */}
                    <SmallTitle icon={education}  title={'Education Experience'} className="edu"/>

                    <div className="resume-content">
                        <ResumeItem
                        year={'2007 - 2011'}
                        title={'School №24, Margilan, Uzbekistan'}
                        subtitle={'Marg\'ilon Raqamli Texnologiyalar Markazi'}
                        text={"The reason I went to school a year earlier than my peers is because my mind is stronger than my peers. In fact I had to go 2 years ago. However, the laws did not allow it"}
                        />
                        <ResumeItem
                        year={'2011 - 2016'}
                        title={'PSSS    №2 , Margilan, Uzbekistan'}
                        subtitle={'Public Specialized Secondary School'}
                        text={"High school classes were missing me. After graduating from elementary school, I decided to study in a stronger school. This decision was supported by my parents and I was transferred to the State Specialized School. And I graduated from school here with a privileged certificate. Then all my marks are 5 marks."}
                        />
                        <ResumeItem
                        year={'2016 - 2019'}
                        title={'MBK, Margilan, Uzbekistan'}
                        subtitle={'Margilan Banking Collage'}
                        text={"I graduated from a banking college with honors in accounting and auditing. I did an internship at the Toshloq district branch of Agrobank JSCB"}
                        />
                        <ResumeItem
                        year={'2020 - Present'}
                        title={'RTM, Margilan, Uzbekistan'}
                        subtitle={'Center for Digital Technologies'}
                        text={"Launched in 2020, the Margilan Center for Digital Technologies continues to deliver a large number of young professionals. I am proud to be one of them. I learned computer literacy and front-end programming perfectly at this center."}
                        />
                        <ResumeItem
                        year={'2019'}
                        title={'Business course'}
                        subtitle={'"Smart Business School"'}
                        text={"I have been interested in business since I was young. There are enough regions in the world that are suffering financially. Including in my country. I think the best way to help them is to provide them with a good job. Then they will not go to distant lands to work to feed their families. Too many children are growing up without parental affection. We need to put an end to this"}
                        />
                        <ResumeItem
                        year={'2019'}
                        title={'Russian Language'}
                        subtitle={'"Supper Junior", 6 month. "LINEX" 3 month'}
                        text={"It has not been long since we were separated from the Russians as an independent republic. I mean, Russian is no stranger to us, so learning wasn’t that hard. For now, I don't mind if the documentation is in Russian"}
                        />
                        <ResumeItem
                        year={'2021'}
                        title={'English Language'}
                        subtitle={'"Dream Education" 4 month'}
                        text={"It’s hard to imagine a programmer without English. For now, I don’t mind if the documents are in English"}
                        />
                        <ResumeItem
                        year={'2021'}
                        title={'Programming courses'}
                        subtitle={'Basically, on YouTube'}
                        text={"There are plenty of resources available today to learn programming. The basis of my computer skills is the YouTube network. The people I can call my mentors are: Akmal Kadyrov, Samar Badriddinov, Javohir Group, Ulugbek Samigdjanov, AliTech, Farhod Dadajonov, Saidbek Arislonov, Saud Abdulwahed, Botir Ziyatov and others. Since there are so many foreign IT teachers, I didn’t list them "}
                        />
                    </div>

                </InnerLayout>
            </ResumeStyled>
    )
}
const ResumeStyled = styled.div`
    .resume-content, .education-content{
        border-left: 1px solid var(--border-color);
        padding-left: 1rem;
        margin-top: 1rem;
        .edu{
        padding: 5rem 0;
        margin: 5rem 0;
    }
    }


`;
export default Resume
