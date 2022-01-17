import React from 'react'
import styled, {keyframes} from 'styled-components'
import leftmountain from '../assets/leftmountain.svg'
import rightmountain from '../assets/rightmountain.svg'
import back from '../assets/back.svg'

function Mountain() {
    return (
        <Container>
            <Back src={back}/>
            <MountOne src={leftmountain}/>
            <MountTwo src={rightmountain}/>
        </Container>
    )
}

const slideleft = keyframes`
    0%{
        transform: translateX(0px);
    }
    50% {
        transform: translateX(-10px);
    }
    100%{
        transform: translateX(0px);
    }
`
const slideright = keyframes`
    0%{
        transform: translateX(0px);
    }
    50% {
        transform: translateX(10px);
    }
    100%{
        transform: translateX(0px);
    }
`
const Container = styled.div`
    display: flex;
    position: relative;
`

const MountOne = styled.img`
    animation: 4s ${slideleft} infinite 2s;
    position: absolute;
    left: 100px;
    top: 29px;
    @media (max-width: 1366px){
        left: 90px;
        top: 21px;
    }
`
const MountTwo = styled.img`
    animation: 4s ${slideright} infinite 2s;
    position: absolute;
    right: 120px;
    top: 100px;
    @media (max-width: 1366px){
        right: 130px;
        top: 92px;
    }
`
const Back = styled.img`
    @media (max-width: 1366px){
        width: 95%;
        height: auto;
    }
`

export default Mountain
