import axios from 'axios';
import React from 'react'

const api = axios.create({
    baseURL: 'https://swapi.dev/api/'
})
export default api;