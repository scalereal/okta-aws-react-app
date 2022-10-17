import { render } from '@test-utils';
import React from 'react';
import { TimestampCell } from './TimestampCell.component';

describe('TimestampCell', () => {
    it('should render same day as UTC when time exceeds time difference', () => {
        const { container } = render(<TimestampCell data={'2019-12-13T09:14:16.558+0000'} />);
        expect(container).toMatchSnapshot();
    });

    it('should render previous day of UTC when time has not exceeded time difference', () => {
        const { container } = render(<TimestampCell data={'2019-12-13T01:14:16.558+0000'} />);
        expect(container).toMatchSnapshot();
    });

    it('should render same day when timezone is already in NY', () => {
        const { container } = render(<TimestampCell data={'2019-12-13T01:14:16.558-05:00'} />);
        expect(container).toMatchSnapshot();
    });

    it('should render empty string when date is invalid', () => {
        const { container } = render(<TimestampCell data={''} />);
        expect(container).toMatchSnapshot();
    });
});
