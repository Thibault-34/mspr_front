import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerElastic } from 'react-animated-burgers'

const MenuLink = styled(Link)`
    color: white;
    font-weight: bold;
    text-decoration: ${({ to }) =>
        to === useLocation().pathname ? 'underline' : 'none'};
`

const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: purple;
    opacity: 0.3;
    position: absolute;
    top: 0;
    z-index: -1;
`

const Burger = styled(HamburgerElastic)`
    display: flex;
    background-color: purple;
    height: 40px;
    border-radius: 50px;
    position: absolute;
    bottom: 10px;
    right: 10px;
`

const Menu = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div
            style={{
                height: '100vh',
                width: '100%',
                position: 'absolute',
                zIndex: 1,
            }}
        >
            <Burger
                isActive={isActive}
                toggleButton={() => setIsActive(!isActive)}
                buttonWidth={22}
                barColor="white"
            />
            {isActive && (
                <Nav>
                    <MenuLink to="/">Home</MenuLink>
                    <MenuLink to="/map">Map</MenuLink>
                </Nav>
            )}
        </div>
    )
}

export default Menu
