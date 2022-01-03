import React from 'react'
import styled from 'styled-components'
import { Illustration, LeftContent, MainTitle, Subtitle, Scroll, BehindBlock } from '../styles/Home.styled'
import ill from '../assets/illustration.svg'
import scroll from '../assets/scroll.svg'

function HeroContainer() {
    return (
        <Container>
            <LeftContent>
                <MainTitle>
                    Hi there,
                </MainTitle>
                <MainTitle>
                    I'm <BehindBlock>Valentina</BehindBlock>
                </MainTitle>
                <Subtitle>
                    Fullstack developer & UI designer
                </Subtitle>
                <Scroll src={scroll}/>
            </LeftContent>
            <Illustration src={ill}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #13294B;
    height: 100vh;
    width: auto;
    padding: 0px 250px;
`

export default HeroContainer
