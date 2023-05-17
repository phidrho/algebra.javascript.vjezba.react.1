const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export function fetchNasaData(number = 1) {
    return dispatch => fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(nasaData => dispatch({ type: FETCH_DATA_SUCCESS, payload: nasaData }),
        )
        .catch(error => dispatch({
            type: FETCH_DATA_ERROR,
        }),
    );
}

export function reducer(state = { error: false, nasaData: null }, action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                error: false,
                nasaData: action.payload
            };
        case FETCH_DATA_ERROR:
            return {
                error: true
            }
        default:
            return state;
    }
}

export function getNasaData(state) {
    return state.nasaData;
}

export function getError(state) {
    return state.error;
}
