import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container'
import Text from '../components/Text'

const sponsors = [
    {
        id: 0,
        name: 'Crédit Agricole',
        description: 'Lorem Ipsum',
        url: 'credit-agricole.fr',
        image: {
            fileName: 'credit-agricole.png',
        },
    },
    {
        id: 1,
        name: 'NRJ',
        description:
            'La radio des vrais bonhommes La radio des vrais bonhommes, La radio des vrais bonhommes. La radio des vrais bonhommesLa radio des vrais bonhommesLa radio des vrais bonhommesLa radio des vrais bonhommes, La radio des vrais bonhommes    ',
        url: 'nrj.fr',
        image: {
            fileName: 'nrj.png',
        },
    },
]

const ListItemWrapper = styled.a`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: flex-start;
    margin-bottom: 5px;
    text-decoration: none;
    color: black;
`

const ListItem = ({ id, name, description, url, image }) => (
    <ListItemWrapper href={url}>
        <div style={{ flex: 1 }}>
            <p>image ici</p>
        </div>
        <Text
            style={{
                flex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            <Text>{name}</Text>
            <Text fontSize="s" fontColor="fourth">
                {description}
            </Text>
        </Text>
    </ListItemWrapper>
)

const Sponsors = () => {
    return (
        <Container>
            <Title>Nos partenaires</Title>
            {sponsors.map(({ id, ...props }) => (
                <ListItem key={id} {...props} />
            ))}
        </Container>
    )
}

export default Sponsors
