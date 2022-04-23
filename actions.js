export const GET_USER = 'GET_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export function GetUserAction(payload) {return {type: GET_USER, payload}};
export function DeleteUser(payload) {return {type: DELETE_USER, payload}};