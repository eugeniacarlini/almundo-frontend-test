const apiUrl = "/api/";

//Async action
export const fetchHotels = () => {
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

//Sync action
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