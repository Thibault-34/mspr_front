import React, { Component } from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'
import Filter from '../components/Filter'

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
        artist: 'Beatles',
        description: 'WOW',
        lieu: 'scene rock',
        imageUrl: 'https://icdjbv',
        type: `Meet'em`,
    },
    {
        id: 1,
        date: '12/12/2020',
        hour: '12:00',
        artist: 'aer',
        description: 'aer c cool',
        lieu: 'scène techno',
        imageUrl: 'https://icdjbv',
        type: `Concert`,
    },
]

const ListItem = ({ date, hour, artist, lieu, imageUrl, type }) => (
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
            <p>{type}</p>
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
            <div>{lieu}</div>
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
                <Title backgroundColor="primary">Programmation</Title>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: '1 1',
                        justifyContent: 'space-around',
                    }}
                >
                    <Filter backgroundColor="secondary">Lieu</Filter>
                    <Filter backgroundColor="secondary">Horaire</Filter>
                    <Filter backgroundColor="secondary">Type</Filter>
                </div>
                {events.map(({ id, ...props }) => (
                    <ListItem key={id} {...props} />
                ))}
            </Container>
        )
    }
}

export default Agenda
