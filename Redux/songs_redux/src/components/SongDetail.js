import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    return (
        <div>
            {song &&
                <><h1>SongDetail</h1><p><b>{song.song}</b> by <b>{song.artist}</b></p></>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);