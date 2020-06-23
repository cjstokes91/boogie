const BASE_URL = '/api/boogies';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(boogies) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(boogies)
    }).then(res => res.json());
}

export function update(boogies) {
    return fetch(`${BASE_URL}/${boogies._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(boogies)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}
// const BASE_URL = '/api/boogies';

// export function getAll() {
//     return fetch(BASE_URL)
//         .then(res => res.json());
// };

// export function create(boogies) {
//     return fetch(BASE_URL, {
//         method: 'POST',
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify(boogies)
//     }).then(res => res.json());
// };

// export function update(boogies) {
//     return fetch(`${BASE_URL}/${boogies._id}`, {
//         method: 'PUT',
//         header: { 'content-type': 'application/json' },
//         body: JSON.stringify(boogies)
//     }).then(res => res.json());
// };

// export function deleteOne(id) {
//     return fetch(`${BASE_URL}/${id}`, {
//         method: 'DELETE'
//     }).then(res => res.json());
// };