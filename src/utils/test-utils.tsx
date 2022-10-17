import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { primaryTheme } from '@theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './styled';

export const mockAxios = new MockAdapter(axios);

const WithThemeProvider: React.FunctionComponent = props => (
    <ThemeProvider theme={primaryTheme}>
        <>{props.children}</>
    </ThemeProvider>
);

const WithRouter: React.FunctionComponent = props => (
    <MemoryRouter>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
);

const customRender = (ui: React.ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithThemeProvider, ...options });

export const renderWithRouter = (ui: React.ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
