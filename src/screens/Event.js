import React from 'react'
import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'
import Image from '../components/Image'

const event = {
    id: 0,
    name: 'Concert de Beatles',
    date: '12/12/2020',
    hour: '12:00',
    artist: 'Beatles',
    description:
        'enean accumsan semper porttitor. Vivamus egestas nibh nec justo bibendum, at rutrum dolor pellentesque. Vivamus sagittis dictum varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel volutpat nisi. Sed tempus blandit eros sed placerat.',
    genre: 'Concert',
    filename: 'shakaponk-1433149159.jpg',
    place: 'Scene Sud',
}

const Event = ({ match, data }) => {
    const { id } = match.params
    const {
        date,
        hour,
        artist,
        genre,
        place,
        name,
        description,
        filename,
    } = event
    const imageSrc = require(`../assets/images/artists/${filename}`)
    return (
        <div>
            <div>Event {id}</div>
            <Container>
                <Title>{name}</Title>
                <Image src={imageSrc} type="large"></Image>
                <div>
                    <Text>{genre}</Text>
                    <Text>{place}</Text>
                </div>
                <Text>{description}</Text>
            </Container>
        </div>
    )
}

export default Event
