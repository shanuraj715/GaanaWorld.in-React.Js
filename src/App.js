import React, { Component } from 'react'
import './App.css';
import { FooterPlayer, Player } from './components/Index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import conf from './conf'
import {
  Home,
  Latest,
  Song,
  CategoryList,
  Err404,
  Albums,
  ShowAlbum,
  SingerList,
  Singer,
  Search,
  ShortLinkRedirector
} from './Pages/Index'

import ContactUs from './Pages/Static/ContactUs/ContactUs'
import AboutUs from './Pages/Static/AboutUs/AboutUs'
import PrivacyPolicy from './Pages/Static/PrivacyPolicy/PrivacyPolicy'
import CreateAccount from './Pages/Static/CreateAccount/CreateAccount'
import CopyrightPolicy from './Pages/Static/CopyrightPolicy/CopyrightPolicy'
import { Toaster } from 'react-hot-toast';


export class App extends Component {


  state = {
    isPlaying: false,
    fullScreenPlayer: false,
    sid: null,
    isLogged: false,
    userId: null,
    username: null
  }

  componentDidMount() {
    // set watermark
    document.body.setAttribute('data-before', conf.APP_NAME)
  }

  render() {
    return (
      <React.Fragment>
        
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Home islogged={this.state.isLogged} />} />

            {/* <Route path="/latest-uploads" exact render={props => <Latest {...props} islogged={ this.state.isLogged } />} /> */}

            <Route path="/latest-uploads/" render={props => <Latest {...props} islogged={this.state.isLogged} />} />

            <Route path="/song/:id/:title" exact render={props => <Song {...props} updateSid={this.updateSid} islogged={this.state.isLogged} />} />

            <Route path="/s/:string" exact render={() => <ShortLinkRedirector />} />

            <Route path="/category/:id" exact render={props => <CategoryList {...props} islogged={this.state.isLogged} />} />

            <Route path="/albums/:id" exact render={() => <Albums islogged={this.state.isLogged} />} />

            <Route path="/singer/:title" exact render={() => <Singer islogged={this.state.isLogged} />} />

            <Route path="/search/:title" render={props => <Search islogged={this.state.isLogged} {...props} />} />

            <Route path="/show-album/:id/:title" exact render={() => <ShowAlbum islogged={this.state.isLogged} />} />

            <Route path="/contact-us" exact render={() => <ContactUs islogged={this.state.isLogged} />} />

            <Route path="/singer-list" exact render={() => <SingerList islogged={this.state.isLogged} />} />

            <Route path="/create-account" exact render={() => <CreateAccount islogged={this.state.isLogged} />} />

            <Route path="/about-us" exact render={() => <AboutUs islogged={this.state.isLogged} />} />

            <Route path="/privacy-policy" exact render={() => <PrivacyPolicy islogged={this.state.isLogged} />} />

            <Route path="/copyright-policy" exact render={() => <CopyrightPolicy islogged={this.state.isLogged} />} />

            <Route path="*" render={() => <Err404 />} />
          </Switch>
        </BrowserRouter>

        {this.state.isPlaying ?
          <BrowserRouter>
            {this.state.fullScreenPlayer ? <Player /> : <FooterPlayer
              song_id={this.state.sid}
              toggleFullScreen={this.toggleFullScreenPlayer}
              isLogged={this.state.isLogged}
              userid={this.state.userId}
              username={this.state.username}
            />}
          </BrowserRouter>
          : null
        }
        <Toaster />
      </React.Fragment>
    )
  }

  updateSid = (sid) => {
    this.setState({ sid: sid, isPlaying: true })
  }

}

export default App