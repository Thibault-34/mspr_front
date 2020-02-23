import React from 'react'
import styled from 'styled-components'

const types = {
    small: '100px',
    large: '100%',
}

const Image = styled.img`
    width: ${({ type }) => types[type]};
`

export default Image
