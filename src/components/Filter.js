import styled from 'styled-components'
import Text from '../components/Text'
import { BACKGROUND_COLOR } from '../constants/theme'

const Filter = styled(Text)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${BACKGROUND_COLOR};
    padding: 5px;
    width: 33%;
    margin: 0 5px;
    margin-bottom: 10px;
`
Filter.defaultProps = {
    fontColor: 'secondary',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 'm',
}

export default Filter
