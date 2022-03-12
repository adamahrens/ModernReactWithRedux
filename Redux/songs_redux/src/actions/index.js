// Action Creators
import { v4 as uuidv4 } from 'uuid';

// For Named
/*
export const selectSong = (songId) => {
    return {
        type: "SELECT_SONG",
        payload: songId
    }
}

export const addSong = (artist, song) => {
    return {
        type: "ADD_SONG",
        payload: {
            id: uuidv4(),
            artist,
            song
        }
    }
}
*/

const selectSong = (song) => {
    return {
        type: "SELECT_SONG",
        payload: song
    }
}

const addSong = (artist, song) => {
    return {
        type: "ADD_SONG",
        payload: {
            id: uuidv4(),
            artist,
            song
        }
    }
}

export default { selectSong, addSong }