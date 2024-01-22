import { get, post } from './api';

const getActivities = (token) => get('activities/', token);
const createActivity = (payload, token) => post('activities/', payload, token);

export {
    getActivities,
    createActivity,
};
