import React from 'react';
export const PageContentContext = React.createContext(
    {} as {
        pageContentRef: React.MutableRefObject<HTMLElement | null>;
    }
);
