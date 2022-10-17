import { defaultTheme, FontVariantTheme } from '@medly-components/theme';

const variants: FontVariantTheme = {
    ...defaultTheme.font.variants,
    h1: {
        fontSize: '4.8rem',
        fontWeight: 'Medium',
        lineHeight: '5.6rem',
        letterSpacing: '-0.04rem'
    },
    h2: {
        fontSize: '3.2rem',
        fontWeight: 'Medium',
        lineHeight: '4.0rem',
        letterSpacing: '-0.04rem'
    },
    h3: {
        fontSize: '2.4rem',
        fontWeight: 'Medium',
        lineHeight: '3.2rem',
        letterSpacing: '-0.04rem'
    },
    h4: {
        fontSize: '1.8rem',
        fontWeight: 'Medium',
        lineHeight: '2.4rem',
        letterSpacing: '-0.02rem'
    },
    h5: {
        fontSize: '1.2rem',
        fontWeight: 'Medium',
        lineHeight: '2rem',
        letterSpacing: '0.1rem'
    },
    body1: {
        fontSize: '1.6rem',
        fontWeight: 'Regular',
        lineHeight: '2.4rem',
        letterSpacing: '0rem'
    },
    body2: {
        fontSize: '1.4rem',
        fontWeight: 'Regular',
        lineHeight: '2rem',
        letterSpacing: '0rem'
    },
    body3: {
        fontSize: '1.2rem',
        fontWeight: 'Regular',
        lineHeight: '1.6rem',
        letterSpacing: '0rem'
    },
    button1: {
        fontSize: '1.4rem',
        fontWeight: 'Medium',
        lineHeight: '2rem',
        letterSpacing: '0rem'
    },
    button2: {
        fontSize: '1.2rem',
        fontWeight: 'Medium',
        lineHeight: '1.6rem',
        letterSpacing: '0rem'
    }
};

export default variants;
