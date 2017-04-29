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
    EDIT_USER_FAILURE,

} from '../config/constant'

const initialState = {

    loading : false,
    deleting: false,
    deleted: false,
    editing: false,
    edited: false,
    users : [],
    error : null
}

export const reducerThunk =(state = initialState,action) =>{

    switch (action.type){
        case FETCH_USER_STARTED : {
            return {
                ...state,
                loading:true
            }
        }
        case FETCH_USER_SUCCESS :{
            const users = state.users.concat(action.data);
            return{ ...state, users, loading:false}
        }

        case FETCH_USER_FAILURE : {
            return {
                ...state,
                error:action.err
            }
        }

        case DELETE_USER_STARTED : {
            return {
                ...state,
                deleting: true
            }
        }

        case DELETE_USER_SUCCESS : {
            const userData = action.data;
            console.log("---------------------user.reducer DELETE_USER_SUCCESS",userData)
            return {
                ...state,
                users:userData,
                deleting: false,
                deleted:true
            }
        }

        case DELETE_USER_FAILURE : {
            return {
                ...state,
                error:action.err
            }
        }

        case EDIT_USER_STARTED : {
            return {
                ...state,
                editing: true
            }
        }

        case EDIT_USER_SUCCESS :{
            const updateUserData = action.data;
            console.log("---------------------user.reducer EDIT_USER_SUCCESS",updateUserData)
            return {
                ...state,
                users:updateUserData,
                editing: false,
                edited:true
            }
        }

        default: return state
    }
}