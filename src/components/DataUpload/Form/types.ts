import { FormEvent } from 'react';

export type Props = {
    uploadHandler: (event: FormEvent) => void;
    isLoading: boolean;
};
