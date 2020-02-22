import React from 'react'

const Event = ({ match }) => {
    const { id } = match.params
    return <div>Event {id}</div>
}

export default Event
