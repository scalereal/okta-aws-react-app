import { defaultTheme, SearchBoxTheme } from '@medly-components/theme';
import colors from './colors';

const SearchBox: SearchBoxTheme = {
    ...defaultTheme.searchBox,
    padding: { S: '0 0 0 1.6rem', M: '0 0.3rem 0 2rem' },
    borderRadius: {
        S: {
            default: '0.4rem',
            active: '0.4rem'
        },
        M: {
            default: '0.4rem',
            active: '0.4rem'
        }
    },
    bgColor: {
        default: colors.grey[50],
        hovered: colors.grey[50],
        active: colors.white
    },
    borderColor: {
        default: colors.grey[300],
        hovered: colors.grey[600],
        active: colors.blue[500]
    },
    placeholderTextColor: {
        default: colors.grey[500],
        active: colors.grey[300]
    },
    closeIcon: {
        ...defaultTheme.searchBox.closeIcon,
        borderRadius: '0.4rem',
        color: {
            default: colors.grey[800],
            hovered: colors.grey[800],
            pressed: colors.grey[800]
        },
        bgColor: {
            hovered: colors.grey[50],
            pressed: colors.grey[50]
        }
    },
    searchIcon: {
        ...defaultTheme.searchBox.searchIcon,
        borderRadius: '0.4rem',
        color: {
            default: colors.grey[600],
            active: colors.blue[500],
            hovered: colors.blue[500],
            pressed: colors.blue[500]
        },
        bgColor: {
            hovered: colors.blue[50],
            pressed: colors.blue[50]
        }
    },
    boxShadow: {
        active: '0.0 0.2rem 0.8rem rgba(76, 152, 227, 0.2)',
        hovered: '0 0.2rem 0.8rem rgba(96, 120, 144, 0.2)'
    },
    options: {
        boxShadow: '0 0.6rem 0.8rem rgba(76, 152, 227, 0.2)'
    }
};

export default SearchBox;
