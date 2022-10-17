import { render } from '@test-utils';
import React from 'react';
import { Fallback } from './Fallback.component';

describe('Fallback', () => {
    it('should render properly', () => {
        const { container } = render(<Fallback />);
        expect(container).toMatchSnapshot();
    });
});
