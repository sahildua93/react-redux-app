/**
 * Created by sahil-dua on 26/4/17.
 */

import {
    fetchUserStarted,
    fetchUSerSuccess,
    fetchUserFailure,
    deleteUserStarted,
    deleteUserSuccess,
    deleteUserFailure,
    editUserStarted,
    editUserSuccess,
    editUserFailure

} from './action'
import fetch from 'isomorphic-fetch'


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserStarted())
        fetch(' http://localhost:3200/User ')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchUSerSuccess(data))
            })
            .catch(error => {
                fetchUserFailure(error)})
    }
}

export const deleteUsers = (userId) => {
    return (dispatch) => {
        dispatch(deleteUserStarted());
        fetch(' http://localhost:3200/User ', {
            method: 'delete',
            headers: {
                "Accept" : 'application/json',
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({_id:userId}),
        })
            .then(response => {
                console.log("response>>>>>>",response)
                return response.json()
            })
            .then(data => {
                console.log('deletesuccess------------------',data)
                dispatch(deleteUserSuccess(data))
            })
            .catch(error => {
                console.log('Catch ', error)
                deleteUserFailure(error)})
    }
}

export const editUsers = (data) => {
    console.log('-------dispatch editUsers--', data)
    return (dispatch) => {
        dispatch(editUserStarted());
        fetch(' http://localhost:3200/UserUpdate ', {
            method: 'put',
            headers: {
                "Accept" : 'application/json',
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                console.log("response>>>>>>",response)
                return response.json()
            })
            .then(data => {
                console.log('Edit success------------------',data)
                dispatch(editUserSuccess(data))
            })
            .catch(error => {
                console.log('Catch ', error)
                editUserFailure(error)})
    }
}