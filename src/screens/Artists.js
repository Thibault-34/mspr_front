import React, { Component } from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'
import Search from '../components/Search'
import Image from '../components/Image'
import { connect } from 'react-redux'

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: space-around;
    margin-bottom: 5px;
`

const ListItem = ({ name, style, image }) => {
    const filename = image && image.fileName
    const imageSrc = require(`../assets/images/artists/${filename}`)
    return (
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
                    flex: 1,
                    padding: '0 5px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: '',
                }}
            >
                <div>{style}</div>
            </div>
            <div
                style={{
                    flex: 1,
                    height: '50px',
                    overflow: 'hidden',
                }}
            >
                <Image src={imageSrc} type="small"></Image>
            </div>
        </ListItemWrapper>
    )
}

class Artists extends Component {
    render() {
        return (
            <Container>
                <Title backgroundColor="primary">Artistes</Title>
                <Search placeholder="rechercher..." backgroundColor="third" />
                {this.props.artists &&
                    this.props.artists.map(({ id, ...props }) => (
                        <ListItem key={id} {...props} />
                    ))}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const artists = state && state.data && state.data.artists
    return {
        artists: artists,
    }
}

export default connect(mapStateToProps)(Artists)
