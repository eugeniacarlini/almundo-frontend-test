const INITIAL_STATE = {
    hotels:[],
    hotel:null,
    isFetching: false,
    error: null,
    successMsg:null
  }
  export  const hotelReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_HOTELS_REQUEST':
            return {
              ...currentState,
              hotels:[],
              hotel:null,
              isFetching: true,
              error: null,
              successMsg:null
            }
  case 'FETCH_HOTELS_SUCCESS':
            return {
              ...currentState,
              hotels:action.hotels,
              hotel:null,
              isFetching: false,
              error: null,
              successMsg:action.message
            }
  case 'FETCH_HOTELS_FAILED':
            return {
              ...currentState,
              hotels:[],
              hotel:null,
              isFetching: false,
              error: action.error,
              successMsg:null
            }
  default:
         return currentState;
  }
  }