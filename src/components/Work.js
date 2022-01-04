import React from 'react'
import styled from 'styled-components'
import { Bubbles, Laptop, LeftContent, WorkTitle, WorkContent, Button } from '../styles/Home.styled'
import bubbles from '../assets/bubbles.svg'
import laptop from '../assets/laptop.svg'

function Work() {
    return (
        <Container id="work">
            <Bubbles src={bubbles}/>
            <LeftContent>
                <WorkTitle>
                    Work
                </WorkTitle>
                <WorkContent>
                    Virtual exhibition of Architecture student's final projects.
                </WorkContent>
                <Button href="#">Visit the page</Button>
            </LeftContent>
            <Laptop src={laptop}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #F9F3EF;
    height: 100vh;
    width: auto;
    padding: 0px 250px;
`

export default Work
