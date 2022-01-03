import React from 'react'
import { Container, GlobalStyle } from '../styles/Home.styled'
import HeroContainer from '../components/HeroContainer'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import LetsTalk from '../components/LetsTalk'

function Home() {
    return (
        <Container>
            <GlobalStyle/>
            <Navbar />
            <HeroContainer />
            <Work/>
            <Projects />
            <AboutMe />
            <LetsTalk />
        </Container>
    )
}

export default Home
