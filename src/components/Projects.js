import React from 'react'
import styled from 'styled-components'
import { LeftContent, WorkTitle, ProjectsContent, Illustration, Button, Dots } from '../styles/Home.styled'
import dots from '../assets/dots.svg'
import rectangle from '../assets/rectangle.svg'

function Projects() {
    return (
        <Container id="projects">
            <Dots src={dots}/>
            <LeftContent>
                <WorkTitle>
                    Projects
                </WorkTitle>
                <ProjectsContent>
                    Constantly improving and learning new stuff.
                </ProjectsContent>
                <Button href="#">GitHub</Button>
            </LeftContent>
            <Illustration src={rectangle} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #13294B;
    height: 100vh;
    width: auto;
    padding: 0px 250px;
    @media (max-width: 1366px){
        padding: 0 150px;
    }
`

export default Projects
