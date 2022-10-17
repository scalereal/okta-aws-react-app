import { styled } from '@utils';

export const Form = styled('form')`
    gap: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ButtonWrapper = styled('div')`
    text-align: center;
    @media only screen and (min-width: 1440px) {
        margin-top: 2rem;
        button {
            padding: 1.4rem 6.4rem;
        }
    }
`;
