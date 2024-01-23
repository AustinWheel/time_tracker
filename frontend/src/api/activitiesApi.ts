import { get, post, del } from './api';

const getActivities = (token) => get('activities/', token);
const createActivity = (payload, token) => post('activities/', payload, token);
const updateActivity = (payload, token) => post('activities/activity/', payload, token);
const deleteActivity = (payload, token) => del('activities/activity/', payload, token);

export {
    getActivities,
    createActivity,
    updateActivity,
    deleteActivity,
};
