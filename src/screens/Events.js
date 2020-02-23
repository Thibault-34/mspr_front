import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'
import Filter from '../components/Filter'

const ListItemWrapper = styled(Link)`
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
        genre: 'rock',
        imageUrl: 'https://icdjbv',
        place: 'Montpellier Bar',
    },
    {
        id: 1,
        date: '12/12/2020',
        hour: '12:00',
        artist: 'aer',
        description: 'aer c cool',
        genre: 'techno',
        imageUrl: 'https://icdjbv',
        place: 'Montpellier Arena',
    },
]

const ListItem = ({ date, hour, artist, genre, place, id }) => (
    <ListItemWrapper to={`event/${id}`}>
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
                flex: 1,
                background: 'red',
                padding: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: '',
            }}
        >
            <div>{artist}</div>
            <div>{genre}</div>
        </div>
        <div style={{ flex: 1 }}>{place}</div>
    </ListItemWrapper>
)

class EventsList extends Component {
    state = { filter: { by: 'date', compare: (a, b) => a - b } }

    _setFilter = ({ filter }) => {
        console.log(filter)
    }

    render() {
        return (
            <>
                <div style={{ display: 'flex' }}>
                    <Filter by="date" onToggle={this._setFilter}>
                        Date
                    </Filter>
                    <Filter by="genre" onToggle={this._setFilter}>
                        Genre
                    </Filter>
                    <Filter by="place" onToggle={this._setFilter}>
                        Lieu
                    </Filter>
                </div>
                {events.map(({ id, ...props }) => (
                    <ListItem key={id} id={id} {...props} />
                ))}
            </>
        )
    }
}

// je suis teubé
class Events extends Component {
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
                ></div>
                <EventsList />
            </Container>
        )
    }
}

export default Events
