import axios from 'axios';
import { localStorageGetToken } from '../helper';
import { apiUrl } from './../environment';

export const dashboardApi = axios.create({
    baseURL: apiUrl(),
    headers: {
        Authorization: `Bearer ${localStorageGetToken()}`
    }
});