import { FontFaceTheme } from '@medly-components/theme';

const proximaNova: FontFaceTheme = {
    fontFamily: 'Poppins',
    fontFaces: [
        {
            primarySrc: `url('../fonts/Poppins-Light.ttf') format('truetype')`,
            secondarySrc: '',
            fontWeight: 300,
            fontStyle: 'normal'
        },
        {
            primarySrc: `url('../fonts/Poppins-Regular.ttf') format('truetype')`,
            secondarySrc: '',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        {
            primarySrc: `url('../fonts/Poppins-Medium.ttf') format('truetype')`,
            secondarySrc: '',
            fontWeight: 500,
            fontStyle: 'normal'
        },
        {
            primarySrc: `url('../fonts/Poppins-Strong.ttf') format('truetype')`,
            secondarySrc: '',
            fontWeight: 700,
            fontStyle: 'normal'
        },
        {
            primarySrc: `url('../fonts/Poppins-ExtraStrong.ttf') format('truetype')`,
            secondarySrc: '',
            fontWeight: 800,
            fontStyle: 'normal'
        }
    ]
};

const faces: FontFaceTheme[] = [proximaNova];

export default faces;
