import { primaryTheme } from '@theme';
import { FC, memo } from 'react';
import * as Styled from './SideNavHeader.styled';

export const SideNavHeader: FC = memo(() => {
    return (
        <>
            <Styled.SideNavHeader>
                <Styled.DomainIcon size="S" variant="solid" iconColor={primaryTheme.colors.purple[500]} />
                <Styled.StyledText uppercase={true} textWeight="Medium">
                    OKTA-AWS-React App
                </Styled.StyledText>
            </Styled.SideNavHeader>
            <Styled.Separator />
        </>
    );
});

SideNavHeader.defaultProps = {};
SideNavHeader.displayName = 'SideNavHeader';
