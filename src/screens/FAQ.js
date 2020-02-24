import React from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import Title from '../components/Title'
import Container from '../components/Container'
import { connect } from 'react-redux'

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    justify-content: space-around;
    margin-bottom: 5px;
`

const ListItem = ({ id, categoryFaq, question, answer }) => {
    return (
        <ListItemWrapper>
            <Text
                style={{
                    padding: '10px',
                    flex: 1,
                    display: 'flex',
                }}
            >
                <Text fontSize="l">{question}</Text>
            </Text>
            <Text
                style={{
                    flex: 1,
                    padding: '10px',
                    display: 'flex',
                }}
            >
                <Text fontColor="fourth">{answer}</Text>
            </Text>
        </ListItemWrapper>
    )
}

const FAQ = ({ faqs }) => {
    return (
        <Container>
            <Title>FAQ</Title>
            {faqs &&
                faqs.map(({ id, ...props }) => (
                    <ListItem key={id} id={id} {...props} />
                ))}
        </Container>
    )
}

// requete redux
const mapStateToProps = state => {
    return {
        faqs: state && state.data && state.data.faqs,
    }
}

export default connect(mapStateToProps)(FAQ)
