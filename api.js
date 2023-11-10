import axios from 'axios'

const freeStrokeAPI = axios.create({ baseURL : 'https://freestroke-api.onrender.com/api'})

export const getLocationByID = (location_id) => {
    return freeStrokeAPI.get(`/locations/${location_id}`)
    .then ((res) => {
        return res.data.location
    })
}

export const getLocations = () => {
    return freeStrokeAPI.get(`/locations?limit=500`).then ((res) => {
        return res.data
    })
}