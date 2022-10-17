import { ConcentricCircleLoader } from '@medly-components/loaders';
import React from 'react';
import { Container } from './Fallback.styled';

export const Fallback: React.FC = React.memo(() => (
    <Container>
        <ConcentricCircleLoader />
    </Container>
));

Fallback.displayName = 'Fallback';
