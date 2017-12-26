import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTAPI from 'youtube-api-search';
const API_KEY = 'AIzaSyCpK_wK0Jrlj5voi8u9JLd0gGhQLKhwbp8';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
        };
        this.searchTerm('surfBoards');
    }
    searchTerm(term) {
        YTAPI({key : API_KEY, term : term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });

        });
    }

    slow = _.debounce(term => this.searchTerm(term), 300);

    render() {
        return <div>
            <SearchBar onSearch = {this.slow}/>
            <VideoDetail
                video = {this.state.selectedVideo}/>
            <VideoList videos = {this.state.videos}
                       onSelectVideo = {selectedVideo => this.setState({selectedVideo}) }
            />
        </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
