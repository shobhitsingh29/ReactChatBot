// Api
const API = {}
// add protocols
API.protocols = {
    HTTP: 'http://',
    HTTPS: 'https://',
    FTP: 'ftp://'
}

// add Domain configurations
API.domain = {
    BOOKS_CONNECT_LOCAL: 'localhost:3000',
    BOOKS_CONNECT_SERVER: ''
}
API.imagePath = '/assets/img/';
// utility
const UTILITY = {}

export default {
    API,
    UTILITY
}