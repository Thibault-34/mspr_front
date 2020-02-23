import styled from 'styled-components'
import Text from '../components/Text'
import { BACKGROUND_COLOR } from '../constants/theme'

const Title = styled(Text)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${BACKGROUND_COLOR};
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
`
Title.defaultProps = {
    backgroundColor: 'primary',
    fontColor: 'secondary',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 'xl',
}
export default Title
