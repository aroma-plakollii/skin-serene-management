export const API = 'http://localhost:5000/api';

export const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': `${sessionStorage.getItem('token')}`
};