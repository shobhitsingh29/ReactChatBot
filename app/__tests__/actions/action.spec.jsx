import React from 'react';
import * as actions from '../../actions';
import * as types from '../../api/constant';

describe('actions', () => {
    it('should create an action to get all the books', () => {
        const expectedAction = {
            type: 'GET_BOOKS_ASYNC'
        }
        expect(actions.getBooksAsync()).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to edit a particular book by id', () => {
        const id = 1;
        const data = {"name":"Gunjan Jain"}
        const expectedAction = {
            type: types.EDIT_BOOK_ASYNC,
            id: id,
            formData : data
        }
        expect(actions.editBookByIdAsync(id, data)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to get a particular book by id', () => {
        const id = 1;
        const expectedAction = {
            type: types.GET_BOOK_BY_ID_ASYNC,
            id: id
        };
        expect(actions.getBookByIdAsync(id)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to get the succes from the edit api', () => {
        const check = true
        const expectedAction = {
            type: types.CHECK_SUCCESS,
            check: check
        }
        expect(actions.isSuccess(true)).toEqual(expectedAction)
    })
})