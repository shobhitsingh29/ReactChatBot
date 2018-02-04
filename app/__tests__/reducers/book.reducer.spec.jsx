import React from 'react';
import * as reducers from '../../reducers/book.js';
import * as types from '../../api/constant';
const initialState = {
    books: [],
    book: {},
    isSuccess: false
};
describe('all books reducer', () => {
    it('reducer should return the initial state', () => {
        expect(reducers.booksReducer(undefined, {})).toEqual(initialState);
    });

    it('reducer should return all the books', () => {
        initialState.books = [{
            title: "2 states done",
            imageUrl: "2_states.jpg",
            author: "Illiam Cruze",
            id: "2"
        }, {
            title: "2 states done",
            imageUrl: "2_states.jpg",
            author: "Illiam Cruze",
            id: "2"
        }];
        const action = {type: types.GET_BOOKS, books: initialState.books};

        expect(reducers.booksReducer(initialState, action)).toEqual(initialState);
    });

    it('reducer should return detail of a particular book', () => {
        initialState.book = {
            title: "2 states done",
            imageUrl: "2_states.jpg",
            author: "Illiam Cruze",
            id: "2"
        };
        const action = {type: types.GET_BOOK_BY_ID, book: initialState.book};
        expect(reducers.booksReducer(initialState, action)).toEqual(initialState);
    });

    it('reducer should return value of isSuccess flag: true', () => {
        initialState.isSuccess = true;
        const action = {type: types.CHECK_SUCCESS, check: initialState.isSuccess};
        expect(reducers.booksReducer(initialState, action)).toEqual(initialState);
    });

    it('reducer should return value of isSuccess flag: false', () => {
        initialState.isSuccess = false;
        const action = {type: types.CHECK_SUCCESS, check: initialState.isSuccess};
        expect(reducers.booksReducer(initialState, action)).toEqual(initialState);
    });
});
