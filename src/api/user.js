import axios from 'axios'


export const getUserQuantity = (queue_id) => {
    return axios.get(`http://localhost:5000/user-quantity/${queue_id}`)
        .then(response => {
            return response.data['count(id)'];
        })
        .catch(error => {
            return console.error(error);
        });
}

export const sendUserData = (data) =>{
    return axios.post(`http://localhost:5000/user`, data)
    .then(response => {
        // Maneja la respuesta exitosa
        return response.data; // Puedes mostrar la respuesta en la consola o realizar otras acciones necesarias
    })
    .catch(error => {
        // Maneja el error
        return console.error(error);
    });
}