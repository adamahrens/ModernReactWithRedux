import { combineReducers } from 'redux'

const songsReducer = (songs = [], action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...songs, action.payload]
        default:
            return songs
    }
}

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload
    }

    switch (action.type) {
        case 'SELECT_SONG':
            return action.payload
        default:
            return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
})