import React from 'react'
import styled from 'styled-components'
import { TalkTitle, CenterContent, TalkContent, TalkButton, LeftMountains, MidMountains, RightMountains, Mountains } from '../styles/Home.styled'
import left from '../assets/leftmountains.svg'
import right from '../assets/rightmountains.svg'
import mid from '../assets/centermountains.svg'

function LetsTalk() {
    return (
        <Container id="getintouch">
            <CenterContent>
                <TalkTitle>
                    Let's talk
                </TalkTitle>
                <TalkContent>
                    Want to work together or have any questions?
                </TalkContent>
                <TalkButton>
                    Say hello
                </TalkButton>
            </CenterContent>
            <Mountains>
                <LeftMountains src={left}/>
                <MidMountains src={mid}/>
                <RightMountains src={right}/>
            </Mountains>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #54B0BF;
    height: 100vh;
    width: auto;
    padding: 0px 250px;
    @media (max-width: 1366px){
        padding: 0 150px;
    }
`

export default LetsTalk
