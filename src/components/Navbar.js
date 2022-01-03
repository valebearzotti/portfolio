import React from 'react'
import styled from 'styled-components'
import { NavItem } from '../styles/Home.styled'

function Navbar() {
    return (
        <Container>
            <NavItem>
                Valentina
            </NavItem>
            <NavItem>
                Work
            </NavItem>
            <NavItem>
                Projects
            </NavItem>
            <NavItem>
                About me
            </NavItem>
            <NavItem>
                Get in touch
            </NavItem>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #13294B;
    color: #F9F3EF;
    padding-left: 250px;
    padding-right: 250px;
    height: 80px;
`

export default Navbar