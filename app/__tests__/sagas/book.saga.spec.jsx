import React from 'react';
import {call,put,takeEvery} from "redux-saga/effects";
import * as sagas from '../../sagas';
import * as types from '../../api/constant';
import apiCall from '../../api/apiRequest';
import endPoints from '../../api/endPoints';
import sagaHelper from 'redux-saga-testing';

describe('Testing get all books saga', () => {
    const it = sagaHelper(sagas.getBooksAsync());
    it('should return call', result => {
        expect(result).toEqual(call(apiCall, {
            method: 'get',
            endpoint: endPoints.books
        }));
    });
    it('should return put', result => {
        expect(result).toEqual(put({type: types.GET_BOOKS, books: undefined}));
    });
});

describe('Testing get a book by id saga', () => {
    const obj = {id: '6'};
    const endpoint = `${endPoints.book}/${obj.id}`;
    const it = sagaHelper(sagas.getBookByIdAsync(obj));
    it('should return call', result => {
        expect(result).toEqual(call(apiCall, {
            method: 'get',
            endpoint: endpoint
        }));
    });
    it('should return put', result => {
        expect(result).toEqual(put({type: types.GET_BOOK_BY_ID, book: undefined}));
    });
});

describe('Testing edit a saga', () => {
    const action = {
        id: '6', formData: {
            title: "Chlemist",
            description: "A book"
        }
    };
    const endpoint = `${endPoints.book}/${action.id}`;
    const it = sagaHelper(sagas.editBookByIdAsync(action));
    it('should return call', result => {
        expect(result).toEqual(call(apiCall, {
            method: 'put',
            endpoint: endpoint,
            payload: action.formData
        }));
    });
    it('should return put', result => {
        expect(result).toEqual(put({type: types.EDIT_BOOK, book: undefined}));
    });
    it('should return put', result => {
        expect(result).toEqual(put({type: types.CHECK_SUCCESS, check: true}));
    });
});

describe('Testing get books watcher saga', () => {
    const it = sagaHelper(sagas.watchGetBooks());
    it('should return call', result => {
        expect(result).toEqual(takeEvery(types.GET_BOOKS_ASYNC, sagas.getBooksAsync));
    });
});

describe('Testing bet book by id watcher saga', () => {
    const it = sagaHelper(sagas.watchGetBookById());
    it('should return call', result => {
        expect(result).toEqual(takeEvery(types.GET_BOOK_BY_ID_ASYNC, sagas.getBookByIdAsync));
    });
});

describe('Testing edit a book watcher saga', () => {
    const it = sagaHelper(sagas.watchEditBook());
    it('should return call', result => {
        expect(result).toEqual(takeEvery(types.EDIT_BOOK_ASYNC, sagas.editBookByIdAsync));
    });
});