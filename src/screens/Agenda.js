import React, { Component } from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: space-around;
    margin-bottom: 5px;
`

const events = [
    {
        id: 0,
        date: '12/12/2020',
        hour: '12:00',
        artist: 'aer',
        description: 'aer c cool',
        imageUrl: 'https://icdjbv',
    },
    {
        id: 1,
        date: '12/12/2020',
        hour: '12:00',
        artist: 'aer',
        description: 'aer c cool',
        imageUrl: 'https://icdjbv',
    },
]

const ListItem = ({ date, hour, artist, description, imageUrl }) => (
    <ListItemWrapper>
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div>{date}</div>
            <div>{hour}</div>
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
            <div>{artist}</div>
            <div>{description}</div>
        </div>
        <div style={{ flex: 1 }}>
            {imageUrl}
            <img></img>
        </div>
    </ListItemWrapper>
)
// je suis teubé
class Agenda extends Component {
    render() {
        return (
            <Container>
                <Title backgroundColor="primary">Programme</Title>
                {events.map(({ id, ...props }) => (
                    <ListItem key={id} {...props} />
                ))}
            </Container>
        )
    }
}

export default Agenda
