import { Container as DefaultContainer } from '@components/common/SharedStyle';
import { Table } from '@medly-components/core';
import { styled } from '@utils';

export const Container = styled(DefaultContainer)`
    padding: 0;
    & > * {
        margin-bottom: ${({ theme }) => theme.spacing.M1};
    }
    ${Table.Style} {
        & > tbody {
            & > tr:not(:last-child) {
                position: initial;
            }
        }
        th {
            button > span {
                font-weight: 600;
            }
        }
        td {
            padding: 0.8rem 1.6rem;
        }
    }
`;
