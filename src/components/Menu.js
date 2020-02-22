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

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
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

const Burger = styled(HamburgerElastic)``

const Menu = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <Wrapper>
            <div
                style={{
                    backgroundColor: 'purple',
                    borderRadius: 50,
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
            >
                <Burger
                    isActive={isActive}
                    toggleButton={() => setIsActive(!isActive)}
                    buttonWidth={22}
                    barColor="white"
                    buttonStyle={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: 40,
                        width: 40,
                        padding: 0,
                    }}
                />
            </div>
            {isActive && (
                <Nav>
                    <MenuLink to="/">Home</MenuLink>
                    <MenuLink to="/map">Map</MenuLink>
                </Nav>
            )}
        </Wrapper>
    )
}

export default Menu
