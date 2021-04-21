//Action creator

export const selectedSong = (song) => {         // Named Export

    console.log("action console", song)
    //Returns an action 
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export const deletedSong = (songName) => {         // Named Export

    console.log("action console", songName)
    //Returns an action 
    return {
        type: 'DELETE_SELECTED',
        payload: songName
    }
}