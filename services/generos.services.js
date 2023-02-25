async function find() {
    return fetch('http://localhost:2023/api/generos')
        .then(response => response.json())
}

export {
    find
}