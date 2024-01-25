import { get, post, del } from './api';

const getUser = (token) => get('users/profile/', token);
const updateUser = (payload, token) => post('users/profile/', payload, token);

export {
    getUser,
    updateUser,
};