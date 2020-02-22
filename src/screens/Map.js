import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class SimpleExample extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 43.614226,
            lng: 3.876563,
            zoom: 13,
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map
                center={position}
                zoom={this.state.zoom}
                style={{ height: '100vh', zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <span>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </span>
                    </Popup>
                </Marker>
            </Map>
        )
    }
}
