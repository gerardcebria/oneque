import axios from 'axios'

export const getAllqueues = () => {
    return axios.get(`http://localhost:5000/queue/`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error(error);
        });
}

export const getQueueById = (queue_id) => {
    return axios.get(`http://localhost:5000/queue/` + queue_id)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return console.error(error);
        });
}