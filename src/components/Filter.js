import React from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import { BACKGROUND_COLOR } from '../constants/theme'

const FilterText = styled(Text)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${BACKGROUND_COLOR};
    padding: 5px;
    width: 33%;
    margin: 0 5px;
    margin-bottom: 10px;
`

const Filter = ({ children }) => {
    return <FilterText backgroundColor="secondary">{children}</FilterText>
}

FilterText.defaultProps = {
    fontColor: 'secondary',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 'm',
}

export default Filter
