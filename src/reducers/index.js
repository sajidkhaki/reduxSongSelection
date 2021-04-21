import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Love you zindagi', duration: '4:50' },
        { title: 'Alen walker', duration: '9:50' },
        { title: 'In in in', duration: '6:50' },
        { title: 'Cheap thrills', duration: '2:50' },
        { title: 'Sada Babay', duration: '6:50' },
        { title: 'You Should Be Sad' , duration: '1:50' },
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    else if(action.type === 'DELETE_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

// combining reducers to make theem available to provider

export default combineReducers({
    song: songsReducer,
    selectedSong: selectedSongReducer
})