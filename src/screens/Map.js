import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'

class CustomMap extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 43.614226,
            lng: 3.876563,
            zoom: 15,
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
                {this.props.places &&
                    this.props.places.map(
                        ({ id, name, description, localization }) => (
                            <Marker
                                key={id}
                                position={[
                                    localization.latitude,
                                    localization.longitude,
                                ]}
                            >
                                <Popup>
                                    <span>
                                        {name}
                                        <br />
                                        {description}
                                    </span>
                                </Popup>
                            </Marker>
                        )
                    )}
            </Map>
        )
    }
}

const mapStateToProps = state => {
    const places = state && state.data && state.data.places
    return {
        places: places,
    }
}

export default connect(mapStateToProps)(CustomMap)
