import theme from 'styled-theming'

const COLORS = {
    primary: '#000',
    secondary: '#227EE6',
}

const FONT_FAMILY = theme.variants('mode', 'fontFamily', {
    primary: { default: 'Montserrat-Regular' },
})

const FONT_COLOR = theme.variants('mode', 'fontColor', {
    primary: { default: COLORS.primary },
    secondary: { default: COLORS.secondary },
    third: { default: COLORS.skyBlue },
})

const FONT_SIZE = theme.variants('mode', 'fontSize', {
    s: { default: 13 },
    m: { default: 14 },
    l: { default: 16 },
})

export { FONT_COLOR, FONT_SIZE, FONT_FAMILY }
