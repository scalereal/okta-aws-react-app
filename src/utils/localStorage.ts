export const loadState = (key?: string, onFailure?: () => void) => {
    try {
        const serializedState = localStorage.getItem(key || 'state');
        if (serializedState === null) {
            throw new Error('Cannot find any state');
        }

        return JSON.parse(serializedState);
    } catch (err) {
        onFailure && onFailure();
        return undefined;
    }
};

export const saveState = (state: Record<string, unknown>) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        return false;
    }

    return true;
};
