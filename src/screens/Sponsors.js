import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container'
import Text from '../components/Text'
import Image from '../components/Image'
import { connect } from 'react-redux'

const ListItemWrapper = styled.a`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: flex-start;
    margin-bottom: 5px;
    text-decoration: none;
    color: black;
`

const ListItem = ({ id, name, description, url, image }) => {
    const filename = image && image.fileName
    const imageSrc = image && require(`../assets/images/sponsors/${filename}`)
    return (
        <ListItemWrapper href={url}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flex: 1,
                    height: '50px',
                    overflow: 'hidden',
                }}
            >
                <Image
                    src={
                        imageSrc
                            ? imageSrc
                            : require('../assets/images/none.png')
                    }
                    type="small"
                ></Image>
            </div>
            <Text
                style={{
                    flex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Text>{name}</Text>
                <Text fontSize="s" fontColor="fourth">
                    {description}
                </Text>
            </Text>
        </ListItemWrapper>
    )
}

const Sponsors = ({ sponsors }) => {
    return (
        <Container>
            <Title>Nos partenaires</Title>
            {sponsors &&
                sponsors.map(({ id, ...props }) => (
                    <ListItem key={id} {...props} />
                ))}
        </Container>
    )
}

const mapStateToProps = state => {
    const sponsors = state && state.data && state.data.sponsors
    return {
        sponsors: sponsors,
    }
}

export default connect(mapStateToProps)(Sponsors)
