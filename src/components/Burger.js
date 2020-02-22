import React, { useState } from 'react'
import styled from 'styled-components'
import { HamburgerElastic } from 'react-animated-burgers'

const BurgerButton = styled(HamburgerElastic)`
    display: flex;
    background-color: purple;
    height: 40px;
    border-radius: 50px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 1000;
`

const Burger = ({ onToggle }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <BurgerButton
            isActive={isActive}
            toggleButton={() => {
                onToggle()
                setIsActive(!isActive)
            }}
            buttonWidth={22}
            barColor="white"
        />
    )
}

export default Burger
