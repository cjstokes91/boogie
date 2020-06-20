const BASE_URL = '/api/boogies'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(board) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(board)
    }).then(res => res.json())
}

export function update(board) {
    return fetch(`${BASE_URL}/${board._id}`, {
        method: 'PUT',
        header: { 'content-type': 'application/json' },
        body: JSON.stringify(board)
    }).then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json())
}