import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'
import Filter from '../components/Filter'
import { connect } from 'react-redux'

const ListItemWrapper = styled(Link)`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: space-around;
    margin-bottom: 5px;
`

const ListItem = ({ date, artist, type, place, id }) => {
    date = new Date(Date.parse(date))
    const mm = date.getDate()
    const dd = date.getMonth()
    const yyyy = date.getFullYear()

    const hours = date.getHours()
    const minutes = date.getMinutes()

    return (
        <ListItemWrapper to={`event/${id}`}>
            <Text
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Text>{`${dd}/${mm}/${yyyy}`}</Text>
                <Text>{`${hours}:${minutes}`}</Text>
            </Text>
            <Text
                style={{
                    flex: 1,
                    background: 'lightGrey',
                    padding: '0 5px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: '',
                }}
            >
                <Text>{artist.name}</Text>
                <Text>{type}</Text>
            </Text>
            <Text style={{ flex: 1 }}>{place.name}</Text>
        </ListItemWrapper>
    )
}

class EventsList extends Component {
    state = { filter: { by: 'date', compare: (a, b) => a - b } }

    _setFilter = ({ filter }) => {
        // console.log(filter)
    }

    render() {
        return (
            <>
                <Text style={{ display: 'flex' }}>
                    <Filter by="date" onToggle={this._setFilter}>
                        Date
                    </Filter>
                    <Filter by="genre" onToggle={this._setFilter}>
                        Genre
                    </Filter>
                    <Filter by="place" onToggle={this._setFilter}>
                        Lieu
                    </Filter>
                </Text>
                {this.props.data &&
                    this.props.data.map(({ id, ...props }) => (
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
                <EventsList data={this.props.events}></EventsList>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const events = state && state.data && state.data.events
    return {
        events: events,
    }
}

export default connect(mapStateToProps)(Events)
