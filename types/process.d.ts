declare const process: {
    env: {
        NPM_TOKEN: string;
    };
};

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}
