import axios from 'axios'

const freeStrokeAPI = axios.create({ baseURL : 'https://freestroke-api.onrender.com/api'})

export const getLocationByID = (location_id) => {
    return freeStrokeAPI.get(`/locations/${location_id}`)
    .then ((res) => {
        return res.data.location
    })
}

export const getReviewsById = (location_id, page) =>{
    const query = {
        params: {
            p: page
        },
    };

    return freeStrokeAPI.get(`/locations/${location_id}/reviews`, query)
    .then(({data}) =>{
        return data
    })
}

export const deleteReview = (review_id) => {
    return freeStrokeAPI.delete(`/reviews/${review_id}`)
}

export const postReview = (location_id, reviewToBeAdded) => {
    return freeStrokeAPI.post(`/location/${location_id}/reviews`, reviewToBeAdded)
}

export const patchLikes = (value, review_id) => {
    return freeStrokeAPI.patch(`/reviews/${review_id}`, {inc_votes: value})
}

export const getLocations = () => {
    return freeStrokeAPI.get(`/locations?limit=1000`).then ((res) => {
        return res.data
    })
}