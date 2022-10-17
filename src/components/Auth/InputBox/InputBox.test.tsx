import { fireEvent, render, screen } from '@utils/test-utils';
import React from 'react';
import { InputBox } from './InputBox';
import { Props } from './types';

const mockOnChange = jest.fn(),
    renderer = (props?: Partial<Props>) =>
        render(
            <InputBox
                type="text"
                name="input"
                onChange={mockOnChange}
                placeholderText="input box"
                value="some value"
                label="input label"
                {...props}
            />
        );

describe('InputBox', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should render properly with full width', () => {
        const { container } = renderer({ fullWidth: true });
        expect(container).toMatchSnapshot();
    });

    it('should call mockOnChange', () => {
        renderer();
        fireEvent.change(screen.getByPlaceholderText('input box'), {
            target: { value: 'new value' }
        });
        expect(mockOnChange).toBeCalledTimes(1);
    });

    it('should show error message on validator returning true', () => {
        renderer({ errorText: 'Field validation error' });
        expect(screen.getByText('Field validation error')).toBeInTheDocument();
    });
});
