import { centerAligned } from '@medly-components/utils';
import { primaryTheme } from '@theme';
import styled from 'styled-components';

export const Container = styled('main')`
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
    ${centerAligned()};
    background: url('/images/circles.png') left bottom 25% no-repeat, url('/images/loginBgImage-min.png') center/cover no-repeat;
`;

export const FormWrapper = styled('div')`
    display: flex;
    flex-basis: 30%;
    height: 90%;
    margin-left: 50%;
    align-items: center;
    border-radius: 0.6rem;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0.1rem 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    background-color: ${primaryTheme.colors.purple[500]};
    transition: padding 0.3s ease-in-out;
    @media only screen and (max-width: 1279px) {
        padding: 0 7.8rem 2rem;
    }
    @media only screen and (min-width: 1280px) {
        padding: 0 7.8rem 2rem;
    }
    @media only screen and (min-width: 1440px) {
        padding: 0 7.8rem 2rem;
    }
`;

export const Logo = styled('img')`
    @media only screen and (max-width: 1279px) {
        width: 57%;
        margin: 5% 0;
    }
    @media only screen and (min-width: 1280px) {
        width: 62%;
        margin: 8% 0;
    }
    @media only screen and (min-width: 1440px) {
        width: 65%;
        margin: 10% 0;
    }
`;
