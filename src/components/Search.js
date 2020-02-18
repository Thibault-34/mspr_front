import styled from 'styled-components'
import Text from '../components/Text'
import { BACKGROUND_COLOR } from '../constants/theme'

const Search = styled.input`
    margin-bottom: 10px;
`
Search.defaultProps = {
    fontColor: 'secondary',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 'm',
}

export default Search
