import React from 'react'
import styled from 'styled-components'
import { LeftContent, RightContent, WorkTitle, AboutContent, Button, Skill, Icon, Skills } from '../styles/Home.styled'
import book from '../assets/book.svg'
import briefcase from '../assets/briefcase.svg'
import certificate from '../assets/certificate.svg'
import graduation from '../assets/graduation.svg'

function AboutMe() {
    return (
        <Container id="aboutme">
            <LeftContent>
                <Skills>
                    <Skill>
                        <Icon src={graduation}/>
                        Systems Engineering student
                    </Skill>
                    <Skill>
                        <Icon src={briefcase}/>
                        Part-time fullstack developer
                    </Skill>
                    <Skill>
                        <Icon src={book}/>
                        Self taught React.js & Node.js
                    </Skill>
                    <Skill>
                        <Icon src={certificate}/>
                        UI Design & Responsive Web Design bootcamps by Scrimba
                    </Skill>
                </Skills>
            </LeftContent>
            <RightContent>
                <WorkTitle>
                    About me
                </WorkTitle>
                <AboutContent>
                    I'm an Engineering student, passionate about coding 
                    and designing digital solutions.<br></br>
                    Creative, hard-working and always trying my best.<br></br>
                    I'm also a piano player, art enthusiast and a big F1 fan.
                </AboutContent>
                <Button href="#">LinkedIn</Button>
            </RightContent>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #F9F3EF;
    height: 100vh;
    width: auto;
    padding: 0px 250px;
    @media (max-width: 1366px){
        padding: 0 150px;
    }
`

export default AboutMe
