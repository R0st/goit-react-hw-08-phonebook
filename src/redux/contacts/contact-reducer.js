import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    filterContact,
} from './contact-actions';

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) =>
        [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,

})

const error = createReducer(null, {
    [fetchContactRequest]: () => null,
    [fetchContactError]: (_, { payload }) => payload.response.data,
    [addContactRequest]: () => null,
    [addContactError]: (_, { payload }) => payload.response.data,
    [deleteContactRequest]: () => null,
    [deleteContactError]: (_, { payload }) => payload.response.data,
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
})