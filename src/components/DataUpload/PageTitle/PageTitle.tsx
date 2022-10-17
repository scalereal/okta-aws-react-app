import { Container } from '@components/common/SharedStyle';
import { Text } from '@medly-components/core';
import { primaryTheme } from '@theme';
import { FC, memo } from 'react';
import { Props } from './types';

export const PageTitle: FC<Props> = memo(({ showHelperText }) => {
    return (
        <Container px={0} py={0} flexDirection="column">
            <Text textVariant="h2" id="page-title">
                Data upload
            </Text>
            {showHelperText && (
                <Text textVariant="button2" textColor={primaryTheme.colors.grey[600]}>
                    All the fields are mandatory
                </Text>
            )}
        </Container>
    );
});

PageTitle.displayName = 'ManualUploadPageTitle';
