import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container'
import Image from '../components/Image'
import Text from '../components/Text'

import { connect } from 'react-redux'

const ListItemWrapper = styled.a`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    justify-content: space-around;
    margin-bottom: 5px;
    padding: 10px;
    text-decoration: none;
    background-color: lightgrey;
    border: none;
    color: ;
`

const ListItem = ({ id, title, description, url, image }) => {
    const filename = image && image.fileName
    const imageSrc = require(`../assets/images/articles/${filename}`)
    return (
        <ListItemWrapper href={url}>
            <Text
                style={{
                    flex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>{title}</div>
            </Text>
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
const News = ({ articles }) => {
    return (
        <Container>
            <Title backgroundColor="primary">Actualités</Title>
            {articles &&
                articles.map(({ id, ...props }) => (
                    <ListItem key={id} {...props} />
                ))}
        </Container>
    )
}

const mapStateToProps = state => {
    const articles = state && state.data && state.data.articles
    return {
        articles: articles,
    }
}

export default connect(mapStateToProps)(News)
