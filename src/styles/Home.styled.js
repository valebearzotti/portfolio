import styled, {createGlobalStyle, keyframes} from 'styled-components'
import './styles.css'

export const GlobalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', 'sans-serif';
    }
    html {
        scroll-behavior: smooth;
    }
`

export const NavItem = styled.a`
    margin-top: auto;
    margin-bottom: auto;
    &:nth-child(1){
        color: #FF7F41;
        font-size: 20px;
        font-weight: bold;
        margin-right: auto;
        padding-left: 0;
    }
    text-decoration: none;
    color: #F9F3EF;
    padding-left: 50px;
    cursor: pointer;
    &::selection { /* Code for Firefox */
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
`

export const Container = styled.div`

`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 100;
    margin-top: 160px;
    @media (max-width: 1366px){
        margin-top: 80px;
    }
`

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    z-index: 100;
    margin-top: 160px;
    @media (max-width: 1366px){
        margin-top: 80px;
    }
`

const appear = keyframes`
    from{
        opacity: 0;
        transform: translateY(20px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`

export const MainTitle = styled.h1`
    margin-right: auto;
    margin-bottom: 0;
    margin-top: 50px;
    opacity: 0;
    animation: 2s ${appear} forwards .5s;
    animation-iteration-count: 1;
    &:nth-child(2){
        margin-top: 0;
        z-index: 100;
    }
    color: #F9F3EF;
    font-size: 56px;
    font-weight: bold;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
`

export const Subtitle = styled.h2`
    margin-right: auto;
    color: #F9F3EF;
    font-size: 28px;
    font-weight: 400;
    opacity: 0;
    animation: 2s ${appear} forwards 1s;
    animation-iteration-count: 1;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
    @media (max-width: 1366px){
        font-size: 24px;
    }
`


export const BehindBlock = styled.span`
    position: relative;
    &::after{
        content: '';
        position: absolute;
        right: -2%;
        top: 55%;
        background-color: #54B0BF;
        min-width: 250px;
        border-radius: 2px;
        padding: 12px;
        z-index: -1;
        transition: all .2s ease-in-out;
    }
    &:hover{
        &::after{
            padding: 50px 12px 9px 32px;
            top: 10%;
        }
    }
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
`

const translate = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
  
`

export const Scroll = styled.img`
    margin-right: auto;
    margin-top: 30px;
    cursor: default;
    opacity: 0;
    animation: 2s ${appear} forwards 1.5s, 3s ${translate} infinite 4s;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
`

export const Illustration = styled.img`
    margin-left: auto;
    width: auto;
    height: 540px;
    margin-top: 140px;
    @media (max-width: 1366px){
        height: 340px;
    }
`

export const Bubbles = styled.img`
    position: absolute;
    left: 30px;
    margin-top: 30px;
    @media (max-width: 1366px){
        height: 15%;
    }
`

export const Dots = styled.img`
    position: absolute;
    right: 30px;
    margin-top: -110px;
`

export const WorkTitle = styled.h1`
    margin-right: auto;
    margin-bottom: 0;
    margin-top: 50px;
    &:nth-child(2){
        margin-top: 0;
        z-index: 100;
    }
    color: #FF7F41;
    font-size: 80px;
    font-weight: bold;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
    @media (max-width: 1366px){
        font-size: 72px;
    }
`

export const WorkContent = styled.h6`
    font-family: 'Open Sans', 'sans-serif';
    font-size: 28px;
    font-weight: 400;
    color: #13294B;
    margin: 0;
    width: 430px;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
    @media (max-width: 1366px){
        font-size: 24px;
    }
`

export const ProjectsContent = styled.h6`
    font-family: 'Open Sans', 'sans-serif';
    font-size: 28px;
    font-weight: 400;
    color: #F9F3EF;
    margin: 0;
    width: 430px;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
    @media (max-width: 1366px){
        font-size: 24px;
    }
`

export const AboutContent = styled.h6`
    font-family: 'Open Sans', 'sans-serif';
    font-size: 28px;
    font-weight: 400;
    color: #13294B;
    margin: 0;
    width: 650px;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
    @media (max-width: 1366px){
        font-size: 24px;
        width: 430px;
    }
`

export const Button = styled.a`
    text-decoration: none;
    color: #54B0BF;
    font-weight: 800;
    font-size: 20px;
    margin-top: 30px;
`

export const Laptop = styled.img`
    margin-left: auto;
    width: 780px;
    height: auto;
    @media (max-width: 1366px){
        width: 580px;
    }
`

export const Skill = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #54B0BF;
    display: flex;
    margin-bottom: 50px;
    max-width: 470px;
`

export const Icon = styled.img`
    width: 50px;
    height: auto;
    padding-right: 30px;
`

export const Skills = styled.div`
    margin-top: 100px;
`

export const TalkTitle = styled.h1`
    color: #13294B;
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
`

export const CenterContent = styled.div`
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1366px){
        margin-top: 60px;
    }
`

export const TalkContent = styled.div`
    font-family: 'Open Sans', 'sans-serif';
    font-size: 28px;
    font-weight: 400;
    color: #F9F3EF;
    margin: 20px auto 0;
    width: 650px;
    &::selection {
        background: none;
    }
    &::-moz-selection{
        background: none;
    }
    cursor: default;
    @media (max-width: 1366px){
        font-size: 24px;
        width: fit-content;
    }
`

export const TalkButton = styled.a`
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    color: #F9F3EF;
    background-color: #FF7F41;
    font-weight: 700;
    font-size: 20px;
    margin-top: 50px;
    padding: 12px 50px;
    border-radius: 5px;
    cursor: pointer;
`

export const LeftMountains = styled.img`
    margin-right: auto;
    width: 170px;
    height: auto;
    margin-top: auto;
    @media (max-width: 1366px){
        width: 90px;
    }
`

export const RightMountains = styled.img`
    margin-left: auto;
    width: 160px;
    height: auto;
    margin-top: auto;
    @media (max-width: 1366px){
        width: 80px;
    }
`

export const MidMountains = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 540px;
    height: auto;
    margin-top: auto;
    @media (max-width: 1366px){
        width: 340px;
    }
`

export const Mountains = styled.div`
    display: flex;
    margin-top: auto;
`