import theme from 'styled-theming'

const COLORS = {
    dark: '#000',
    grey: '#D6D6D6',
    darkPurple: '#A703B2',
    lightPurple: '#C717F1',
    yellow: '#FFCF37',
    white: '#fff',
    red: 'red',
}

const FONT_FAMILY = theme.variants('mode', 'fontFamily', {
    primary: { default: 'Helvetica' },
})

const FONT_COLOR = theme.variants('mode', 'fontColor', {
    primary: { default: COLORS.dark },
    secondary: { default: COLORS.white },
    third: { default: COLORS.grey },
})

const FONT_SIZE = theme.variants('mode', 'fontSize', {
    s: { default: 13 },
    m: { default: 14 },
    l: { default: 16 },
    xl: { default: 25 },
})

const BACKGROUND_COLOR = theme.variants('mode', 'backgroundColor', {
    primary: { default: COLORS.darkPurple },
    secondary: { default: COLORS.lightPurple },
    third: { default: COLORS.grey },
    fourth: { default: COLORS.yellow },
    fifth: { default: COLORS.red },
})

export { FONT_COLOR, FONT_SIZE, FONT_FAMILY, BACKGROUND_COLOR }
