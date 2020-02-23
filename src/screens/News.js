import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container'

const ListItemWrapper = styled.a`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: flex-start;
    margin-bottom: 5px;
    text-decoration: none;
    color: black;
`

const articles = [
    {
        id: '0',
        title: 'Ou poser son sac ?',
        description:
            'Poser son sac cest important, alors on a mit des cabanes à sacs un peu partout !!',
        url: 'https://lesitedufestival.com',
        image: {
            fileName: '51U3gDQRJ2L._SL500_AC_SS350_.jpg',
        },
    },
    {
        id: '1',
        title: 'Il fera beau youpi',
        description:
            'lorem ipsum lorem lorem ipsum ipsum lorem ipsum lorem lorem ipsum v\nlorem ipsum ipsum lorem ipsum ',
        url: 'https://lesitedufestival.com',
        image: {
            fileName: '51U3gDQRJ2L._SL500_AC_SS350_.jpg',
        },
    },
]

const ListItem = ({ id, title, description, url, image }) => (
    <ListItemWrapper href={url}>
        <div
            style={{
                flex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div>{title}</div>
        </div>
        <div style={{ flex: 1 }}>
            <p>image ici</p>
        </div>
    </ListItemWrapper>
)

const News = () => {
    return (
        <Container>
            <Title backgroundColor="primary">Actualités</Title>
            {articles.map(({ id, ...props }) => (
                <ListItem key={id} {...props} />
            ))}
        </Container>
    )
}

export default News
