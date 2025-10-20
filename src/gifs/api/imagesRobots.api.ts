//Instancia especializada para llegar a la api

import axios from 'axios'

export const imagesRobots = axios.create({
    baseURL: 'https://repaso-node.onrender.com'
})