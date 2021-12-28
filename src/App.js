import './App.css';

import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip';
import { FooterPlayer, Player } from './components/Index'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import conf from './conf'
import { Home, Latest, Song } from './Pages/Index'

export class App extends Component {

  state = {
    isPlaying: true,
    fullScreenPlayer: false
  }

  componentDidMount() {
    // set watermark
    document.body.setAttribute('data-before', conf.APP_NAME)
  }

  // player = () => ({playing: this.state.isPlaying, full: this.state.fullScreenPlayer })

  render() {
    return (
      <React.Fragment>
        <ReactTooltip type="info" effect="float" />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/latest-uploads" exact element={<Latest />} />

            <Route path="/song/:id/:title" exact element={<Song />} />
          </Routes>
        </BrowserRouter>

        {/* Player */}
        {this.state.isPlaying ?
          <BrowserRouter>
            {this.state.fullScreenPlayer ? <Player /> : <FooterPlayer />}
          </BrowserRouter>
          : null}
      </React.Fragment>
    )
  }
}

export default App