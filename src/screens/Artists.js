import React, { Component } from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'
import Search from '../components/Search'

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: space-around;
    margin-bottom: 5px;
`

const artists = [
    {
        id: 0,
        name: 'Beatles',
        style: 'rock',
        imageUrl: 'https://icdjbv',
    },
    {
        id: 2,
        name: 'Aer',
        style: 'Rap',
        imageUrl: 'https://icdjbv',
    },
    {
        id: 3,
        name: 'Mozart',
        style: 'Classic',
        imageUrl: 'https://icdjbv',
    },
]

const ListItem = ({ name, style, imageUrl }) => (
    <ListItemWrapper>
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div>{name}</div>
        </div>
        <div
            style={{
                flex: 2,
                background: 'red',
                padding: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: '',
            }}
        >
            <div>{style}</div>
        </div>
        <div style={{ flex: 1 }}>
            {imageUrl}
            <img></img>
        </div>
    </ListItemWrapper>
)

class Artist extends Component {
    render() {
        return (
            <Container>
                <Title backgroundColor="primary">Artistes</Title>
                <Search placeholder="rechercher..." backgroundColor="third" />
                {artists.map(({ id, ...props }) => (
                    <ListItem key={id} {...props} />
                ))}
            </Container>
        )
    }
}

export default Artist
