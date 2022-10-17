import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getUserInfo, OktaLocalStorage } from './getUserInfo';

export interface AxiosReturn {
    response?: AxiosResponse<any>;
    error?: AxiosResponse<any>;
}

export async function fetch(config: AxiosRequestConfig, noAuthorization?: boolean): Promise<AxiosReturn> {
    try {
        const { oktaToken }: OktaLocalStorage = getUserInfo();
        const request = {
            ...config,
            headers: {
                ...(config.headers ? config.headers : {}),
                ...(!noAuthorization && !config.url?.includes('aws') ? { Authorization: `Bearer ${oktaToken}` } : {})
            }
        };
        const response = await axios(request);
        return { response: { ...(response || { config, status: 500, data: '', headers: '', statusText: '' }) } };
    } catch (error: any) {
        if (error.response?.status === 401) localStorage.removeItem('okta-token-storage');
        return { error: { ...(error.response || { status: 500, data: error, variant: 'error' }) } };
    }
}
