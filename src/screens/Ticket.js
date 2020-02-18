import React, { Component } from 'react'
import Text from '../components/Text'
import styled from 'styled-components'

const BuyTicketsButton = styled.div`
    display: flex;
    background: purple;
    margin: 0 10px;
    height: 300px;
    justify-content: center;
    align-items: center;
`

const Ticket = () => {
    return (
        <div>
            <BuyTicketsButton>ACHETER UN BILLET</BuyTicketsButton>
        </div>
    )
}

export default Ticket
