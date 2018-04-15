export const fetchHotels = (name, stars) => {
    let apiUrl = "/api/";
    
    if (!!name || !!stars) {
        apiUrl += !!name ? `?name=${name}` : '';
        apiUrl += !!name && !!stars ? `&stars=${stars}` : '';
        apiUrl += !name && !!stars ? `?stars=${stars}` : '';
    }
    
    return (dispatch) => {
        dispatch(fetchHotelsRequest());
        return fetch(apiUrl)
        .then(response => {
            if(response.ok){
                response.json().then(data => {
                    dispatch(fetchHotelsSuccess(data.hotels, data.message));
                })
            }
            else{
                response.json().then(error => {
                    dispatch(fetchHotelsFailed(error));
                })
            }
        });
    }
}

export const fetchHotelsRequest = () => {
    return {
        type:'FETCH_HOTELS_REQUEST'
    }
}

export const fetchHotelsSuccess = (hotels, message) => {
    return {
        type: 'FETCH_HOTELS_SUCCESS',
        hotels: hotels,
        message: message,
        receivedAt: Date.now
    }
}

export const fetchHotelsFailed = (error) => {
    return {
        type:'FETCH_HOTELS_FAILED',
        error
    }
}