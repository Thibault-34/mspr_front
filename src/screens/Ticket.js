import React, { Component } from 'react'
import Text from '../components/Text'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container'
import Cta from '../components/Cta'

const BuyTicketsBanner = styled.div`
    display: flex;
    background: #a703b2;
    height: 200px;
`

const Ticket = () => {
    return (
        <Container>
            <Title>BILLETERIE</Title>
            <BuyTicketsBanner>
                <Text
                    fontColor="secondary"
                    fontSize="l"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    <p>NATION SOUND</p>
                    <p>CA VA ETRE LE FEU</p>
                </Text>
            </BuyTicketsBanner>
            <Text
                style={{
                    textAlign: 'center',
                    padding: '10px',
                    lineHeight: '20px',
                }}
            >
                Du 6 au 10 Mars 2020
                <br />
                Viens t'éclater à NationSound le premier festival qui déchire.
                <br />
                En plus c'est pas cher.{' '}
            </Text>
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
