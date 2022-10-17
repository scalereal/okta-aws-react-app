export const getNameInitials = (name: string) => {
    let initials = '';
    if (name && name.trim()) {
        const nameSplitArray = name.split(' ');
        initials = nameSplitArray.reduce((acc, item) => acc + item[0], '');
    }
    return initials.toUpperCase();
};
