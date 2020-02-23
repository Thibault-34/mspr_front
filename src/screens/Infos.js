import React, { Component } from 'react'
import Text from '../components/Text'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container'

const Infos = () => {
    return (
        <Container>
            <Title>Informations Générales</Title>
            <Text fontSize="l">Lorem Ipsum</Text>
            <Text
                textAlign="justify"
                fontSize="s"
                style={{
                    margin: '5px auto',
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut urna fringilla, eleifend erat non, rutrum velit. In metus
                nunc, elementum eu vestibulum ac, mattis cursus orci. Proin
                ipsum metus, sodales sed pharetra vel, interdum a purus. Aliquam
                nisl sapien, pretium non turpis id, feugiat condimentum augue.
            </Text>
            <Text
                fontSize="s"
                textAlign="justify"
                style={{
                    margin: '5px auto',
                }}
            >
                Nam maximus placerat nisi et placerat. Nulla vestibulum ante a
                orci rhoncus consequat. Ut tristique ullamcorper nunc, malesuada
                volutpat turpis cursus pulvinar. Duis dictum ultrices nunc, eget
                condimentum tellus scelerisque eget. In pellentesque, est vel
                euismod cursus, metus libero dapibus neque, ut tincidunt dui
                nisl at orci. Quisque leo urna, placerat et lacus vitae, porta
                suscipit nulla.
            </Text>
        </Container>
    )
}

export default Infos
