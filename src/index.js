import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import YTAPI from 'youtube-api-search';
const API_KEY = 'AIzaSyCpK_wK0Jrlj5voi8u9JLd0gGhQLKhwbp8';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos : []};
        YTAPI({key : API_KEY, term : 'surfBoards'}, (videos) => {
           this.setState({videos});
        });
    }
    render() {
        return <div>
            <SearchBar />
            <VideoList videos = {this.state.videos}/>
        </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
