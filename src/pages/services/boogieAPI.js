const BASE_URL = '/api/boogies';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(boog) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(boog)
    }).then(res => res.json());
}

export function update(boog) {
    return fetch(`${BASE_URL}/${boog._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(boog)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}
