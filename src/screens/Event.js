import React from 'react'
import { connect } from 'react-redux'
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
    const type = data?.type
    const place = data?.place?.name
    const description = data?.artist?.description
    const name = data?.name
    const filename = data?.artist?.image?.fileName

    const imageSrc = filename && require(`../assets/images/artists/${filename}`)
    return (
        <div>
            <Container>
                <Title>{name}</Title>
                <Image src={imageSrc} type="large"></Image>
                <div>
                    <Text>{type}</Text>
                    <Text>{place}</Text>
                </div>
                <Text>{description}</Text>
            </Container>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const events = state && state.data && state.data.events
    const event =
        events && events.find(({ id }) => id === props.match.params.id)
    return {
        data: event,
    }
}

export default connect(mapStateToProps)(Event)
