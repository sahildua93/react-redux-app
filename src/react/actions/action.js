/**
 * Created by sahil-dua on 26/4/17.
 */


import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    DELETE_USER_STARTED,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    EDIT_USER_STARTED,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE

} from '../config/constant'

export function fetchUserStarted() {
    return({type: FETCH_USER_STARTED})
}

export function fetchUSerSuccess(data) {
    return({type: FETCH_USER_SUCCESS, data})
}

export  function fetchUserFailure(err) {
    return({type: FETCH_USER_FAILURE, err})
}

export function deleteUserStarted() {
    return({type: DELETE_USER_STARTED})
}

export function deleteUserSuccess(data) {
    return({type: DELETE_USER_SUCCESS, data})
}

export  function deleteUserFailure(err) {
    return({type: DELETE_USER_FAILURE, err})
}

export function editUserStarted() {
    return({type: EDIT_USER_STARTED})
}

export function editUserSuccess(data) {
    console.log("inside action creater edit--------------", data)
    return({type: EDIT_USER_SUCCESS, data})
}

export function editUserFailure(err) {
    return({type: EDIT_USER_FAILURE, err})
}