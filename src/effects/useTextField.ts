import { FormEvent, useCallback, useEffect, useState } from 'react';

type Result = [
    {
        value: string;
        onChange: (e: FormEvent<HTMLInputElement>) => void;
        isInvalid: boolean;
        onBlur: (e: any) => void;
    },
    React.Dispatch<React.SetStateAction<string>>
];

export const useTextField = (initialState = ''): Result => {
    const [value, setValue] = useState(initialState),
        [isInvalid, setIsInvalid] = useState(false),
        onChange = useCallback((event: FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            setValue(target.value);
            setIsInvalid(!target.value ? true : false);
        }, []),
        onBlur = useCallback(() => !value && setIsInvalid(true), [value]);

    useEffect(() => setValue(initialState), [initialState]);

    return [{ value, onChange, isInvalid, onBlur }, setValue];
};
