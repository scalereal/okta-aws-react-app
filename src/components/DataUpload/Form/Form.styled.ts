import { Container } from '@components/common/SharedStyle';
import { css, styled } from '@utils';

export const StyledFileInputWrapper = styled(Container)`
    margin-top: 1rem;
    > div {
        margin: 0;
        > label {
            ${({ theme }) =>
                css`
                    color: ${theme.colors.blue[500]};
                    ${theme.font.variants.button1};
                    font-weight: 500;
                `}
            text-align: left;
            padding: 0;
        }
    }
`;
