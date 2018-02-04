import React from 'react';
import { getBooks } from '../../utility/selectors';
import { createSelector } from 'reselect';

describe('Testing selector', () => {
    it('testing selector with correct data', () => {
        const getFilteredBooks = {
                "library": {
                    "books": [{
                        "id": "1",
                        "title": "The Princess Diary"
                    }, {
                        "id": "2",
                        "title": "Pride And Prejudice"
                    }, {
                        "id": "2",
                        "title": "Brave World"
                    }, {
                        "id": "2",
                        "title": "2 States"
                    }]
                }
        };
        const getFilteringParam = {
            "match":
                {"params":
                    {"book":"pr"}
                }
        };
        const expectedOutput = [{
            "id": "1",
            "title": "The Princess Diary"
        }, {
            "id": "2",
            "title": "Pride And Prejudice"
        }];
        expect(getBooks(getFilteredBooks, getFilteringParam)).toEqual(expectedOutput);
    })

    it('testing selector with when no match found', () => {
        const getFilteredBooks = {
            "library": {
                "books": [{
                    "id": "1",
                    "title": "The Princess Diary"
                }, {
                    "id": "2",
                    "title": "Pride And Prejudice"
                }, {
                    "id": "2",
                    "title": "Brave World"
                }, {
                    "id": "2",
                    "title": "2 States"
                }]
            }
        };
        const getFilteringParam = {
            "match":
            {"params":
            {"book":"ch"}
            }
        };
        const expectedOutput = [];
        expect(getBooks(getFilteredBooks, getFilteringParam)).toEqual(expectedOutput);
    })

    it('testing selector with when no match found', () => {
        const getFilteredBooks = {
            "library": {
                "books": [{
                    "id": "1",
                    "title": "The Princess Diary"
                }, {
                    "id": "2",
                    "title": "Pride And Prejudice"
                }, {
                    "id": "2",
                    "title": "Brave World"
                }, {
                    "id": "2",
                    "title": "2 States"
                }]
            }
        };
        const getFilteringParam = {
            "match":
            {"params":
            {"book":""}
            }
        };
        const expectedOutput = [{
            "id": "1",
            "title": "The Princess Diary"
        }, {
            "id": "2",
            "title": "Pride And Prejudice"
        }, {
            "id": "2",
            "title": "Brave World"
        }, {
            "id": "2",
            "title": "2 States"
        }];
        expect(getBooks(getFilteredBooks, getFilteringParam)).toEqual(expectedOutput);
    })
});
