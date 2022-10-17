import React from 'react';
import { PageContent } from './Dashboard.styled';

export const Dashboard: React.FC = React.memo(() => {
    return <PageContent pageTitle="Dashboard" />;
});
Dashboard.displayName = 'Dashboard';
