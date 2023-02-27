async function find() {
    return fetch('https://back-portfolio-2023-ul6q.vercel.app/api/proyectos')
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