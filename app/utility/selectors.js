import { createSelector } from 'reselect';

const getFilteredBooks = (state) => state.library.books;
const getFilteringParams = (state, props) => { return props.match.params && props.match.params.book ?
    props.match.params.book : ''};

export const getBooks = createSelector(
    [ getFilteredBooks, getFilteringParams ],
    (books, searchKey) => books.filter((book) => book.title.toLowerCase().search(searchKey) !== -1)
);
