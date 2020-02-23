import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FONT_COLOR, FONT_SIZE, FONT_FAMILY } from '../constants/theme'

const Text = styled.div`
    color: ${FONT_COLOR};
    font-size: ${props => FONT_SIZE(props)}px;
    font-family: ${FONT_FAMILY};
    text-transform: ${({ textTransform }) => textTransform};
    text-align: ${({ textAlign }) => textAlign};
    font-weight: ${({ fontWeight }) => fontWeight};
`

Text.propTypes = {
    fontSize: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    fontColor: PropTypes.oneOf(['primary', 'secondary', 'third', 'fourth']),
}

Text.defaultProps = {
    fontSize: 'm',
    fontColor: 'primary',
    fontFamily: 'primary',
    textTransform: 'none',
    textAlign: 'auto',
    fontWeight: 'bold',
}

export default Text
