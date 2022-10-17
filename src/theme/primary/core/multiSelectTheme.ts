import { defaultTheme, MultiSelectTheme } from '@medly-components/theme';
import colors from './colors';

const { grey, black, white, red, purple } = colors;

const iconStyles = {
    default: {
        background: grey[300],
        hoverBackground: grey[400],
        color: grey[900],
        hoverColor: black
    },
    active: {
        background: purple[500],
        hoverBackground: purple[400],
        color: white,
        hoverColor: white
    },
    error: {
        background: red[600],
        hoverBackground: red[500],
        color: white,
        hoverColor: white
    },
    disabled: {
        background: grey[100],
        hoverBackground: grey[100],
        color: grey[400],
        hoverColor: grey[400]
    }
};

const chipStyles = {
    borderRadius: '0.4rem',
    default: {
        background: grey[100],
        border: grey[400],
        hoverBorder: grey[600],
        color: grey[900]
    },
    active: {
        background: purple[100],
        border: purple[500],
        hoverBorder: purple[400],
        color: grey[900]
    },
    error: {
        background: red[100],
        border: red[600],
        hoverBorder: red[500],
        color: grey[900]
    },
    disabled: {
        background: 'transparent',
        border: grey[300],
        hoverBorder: grey[300],
        color: grey[800]
    }
};

const multiSelectTheme: MultiSelectTheme = {
    ...defaultTheme.multiSelect,
    options: {
        ...defaultTheme.multiSelect.options,
        textVariant: {
            S: 'body3',
            M: 'body1'
        }
    },
    outlined: {
        icon: iconStyles,
        chip: chipStyles
    },
    filled: {
        icon: {
            ...iconStyles,
            default: {
                ...iconStyles.default,
                background: grey[400],
                hoverBackground: grey[500]
            }
        },
        chip: {
            ...chipStyles,
            default: {
                background: grey[200],
                border: grey[600],
                hoverBorder: grey[800],
                color: grey[900]
            },
            active: {
                ...chipStyles.active,
                background: purple[200],
                border: purple[600],
                hoverBorder: purple[500]
            },
            error: {
                ...chipStyles.error,
                background: red[200]
            }
        }
    }
};

export default multiSelectTheme;
