import React, { Component } from 'react'
import Text from '../components/Text'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container'
import Cta from '../components/Cta'

const BuyTicketsBanner = styled.div`
    display: flex;
    background: #a703b2;
    height: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-size: 1.5em;
`

const Ticket = () => {
    return (
        <Container>
            <Title backgroundColor="primary">BILLETERIE</Title>
            <BuyTicketsBanner>
                <p>NATION SOUND</p>
                <p>CA VA ETRE LE FEU</p>
            </BuyTicketsBanner>
            <p>Du 6 au 10 Mars 2020</p>
            <p>
                Viens t'éclater à NationSound le premier festival qui pète sa
                mère
            </p>
            <p>En plus c'est pas cher. </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Cta href="https://lesitedufestival.fr">Achete ton billet</Cta>
            </div>
        </Container>
    )
}

export default Ticket
