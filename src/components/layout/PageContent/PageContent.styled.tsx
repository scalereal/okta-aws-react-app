import { Text } from '@medly-components/core';
import { centerAligned } from '@medly-components/utils';
import { css, styled } from '@utils';
import { AnyStyledComponent } from 'styled-components';
import { HeaderStaticProps, Props } from './types';

export const PageContent = styled('main')<Props>`
    overflow: auto;
    ${({ isAdminLandingScreen, theme }) =>
        isAdminLandingScreen
            ? `background-color: ${theme.colors.white}`
            : `
    border-radius: 0.8rem;
    background-color: ${theme.colors.grey[50]}`}
`;

export const Slash = styled('span')`
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    margin: 0 0.8rem;
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weights.Regular};
    color: ${({ theme }) => theme.colors.grey[600]};
`;

export const PageHeaderContentWrapper = styled('div')`
    padding: 4rem;
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.8rem;
    border-radius: 0.8rem;
`;

export const BreadCrumbText = styled(Text)`
    display: inline;
`;

export const ChildrenContentWrapper = styled('div')<Props>`
    ${({ withoutPadding }) =>
        !withoutPadding &&
        css`
            padding: 1rem 4rem;
        `}
    ${({ withoutBgColor }) => !withoutBgColor && css`background-color: white};`}
    border-radius: 0.8rem;
`;

export const HeaderLeftSide = styled('div')`
    & > * {
        margin-right: ${({ theme }) => theme.spacing.S1};
    }
    ${centerAligned()}
`;

export const HeaderRightSide = styled('div')`
    & > * {
        margin-left: ${({ theme }) => theme.spacing.S1};
    }
    ${centerAligned()}
`;

// @ts-ignore
export const Header: AnyStyledComponent & HeaderStaticProps = styled('div')`
    display: flex;
    justify-content: space-between;
    margin: ${({ theme }) => theme.spacing.M1} 0;
    align-items: flex-start;

    & > * {
        display: flex;
        align-items: flex-start;
    }
`;

Header.LeftSide = HeaderLeftSide;
Header.RightSide = HeaderRightSide;

export const Footer = styled('div')`
    min-height: 100px;
    ${centerAligned('flex')}
`;

export const Breadcrumb = styled('div')`
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
`;
