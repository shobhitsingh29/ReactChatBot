import config from '../config';

export default function call({
    method = 'get',
    url,
    endpoint,
    payload,
    query,
    type = 'application/json'
}) {
    const { API: { protocols, domain } } = config;
    const _url = `${protocols.HTTP}${domain.BOOKS_CONNECT_LOCAL}/${endpoint}`;
    let fetchData = {
        method: method,
        body: JSON.stringify(payload),
        headers: {'Content-Type':'application/json','Accept': 'application/json'}
    };
    return fetch(_url, fetchData).then(function(response) {
        return response.json();
    });
}
