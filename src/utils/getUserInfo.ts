export interface OktaLocalStorage {
    oktaToken: string;
    name: string;
    email: string;
    idToken: string;
}

export const getUserInfo = (): OktaLocalStorage => {
    const oktaStorage: any = JSON.parse(localStorage.getItem('okta-token-storage') || '{}'),
        idTokenClaims = oktaStorage?.idToken?.claims;
    return {
        oktaToken: oktaStorage?.accessToken?.accessToken || '',
        name: idTokenClaims?.name || '',
        email: idTokenClaims?.email || '',
        idToken: oktaStorage?.idToken?.idToken || ''
    };
};
