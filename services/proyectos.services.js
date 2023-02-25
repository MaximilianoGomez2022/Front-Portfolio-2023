async function find() {
    return fetch('http://localhost:2023/api/proyectos')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener los proyectos')
            }
        })
}

export {
    find
}