export interface OktaLocalStorage {
    oktaToken: string;
    name: string;
    email: string;
    idToken: string;
}

export const getUserInfo = (): OktaLocalStorage => {
    const { accessToken, idToken }: any = JSON.parse(localStorage.getItem('okta-token-storage') || '{}');
    return {
        oktaToken: accessToken?.accessToken || '',
        name: idToken?.claims?.name || '',
        email: idToken?.claims?.email || '',
        idToken: idToken?.idToken || ''
    };
};
