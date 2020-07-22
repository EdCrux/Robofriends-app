import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

// the first action is setSearchfield similar to this.setState({searchfield})
// the input is text which the user types
// when the user types this function will return an object(thats why the parentesis)
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

// action for fetch data from an API , this allows to work with actions in an asynchronous way
export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}