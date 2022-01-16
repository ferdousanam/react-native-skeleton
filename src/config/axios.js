import axios from 'axios';
import {app} from './index';

let APIKit = axios.create({
    baseURL: app.api_base_url,
});

export const CommonAPIKit = axios.create({
    baseURL: app.asset_url + '/common-api',
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token: string) => {
    APIKit.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
    CommonAPIKit.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};

export default APIKit;
