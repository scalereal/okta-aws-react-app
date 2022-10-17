import { render } from '@test-utils';
import React from 'react';
import Header from './Header.component';

describe('Header', () => {
    it('should render properly', () => {
        const { container } = render(
            <Header>
                <Header.LeftSide>Left SIde</Header.LeftSide>
                <Header.RightSide>Right SIde</Header.RightSide>
            </Header>
        );
        expect(container).toMatchSnapshot();
    });
});
