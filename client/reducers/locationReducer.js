import { FETCHING_LOCATION, SET_LOCATION, FETCH_LOCATION_ERROR } from '../actions/location'

const initialState = { name: null, location: null, fetching: false, error: null }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LOCATION:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case SET_LOCATION:
      return {
        ...state,
        location: action.data.location,
        name: action.data.name,
        fetching: false
      }
    case FETCH_LOCATION_ERROR:
      return {
        ...state,
        error: action.data,
        fetching: false
      }
    default:
      return state
  }
}
