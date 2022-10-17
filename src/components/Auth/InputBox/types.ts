import { ChangeEvent } from 'react';

export type Props = {
    type: string;
    name?: string;
    value: string;
    label: string;
    errorText?: string;
    fullWidth?: boolean;
    placeholderText: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
