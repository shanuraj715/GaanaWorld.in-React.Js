import React, { Component } from 'react'
import './App.css';
import { FooterPlayer, Login } from './components/Index'
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
import toast, { Toaster } from 'react-hot-toast';
import Cookie from 'universal-cookie'

const cookies = new Cookie()

export class App extends Component {


  state = {
    isPlaying: false,
    fullScreenPlayer: false,
    sid: null,
    isLogged: false,
    userId: null,
    email: null,
    userName: null,
    loginVisible: false
  }

  componentDidMount() {
    // set watermark
    document.body.setAttribute('data-before', conf.APP_NAME)
    setTimeout(() => {
      this.checkForLogin()
    }, 500)
  }

  commonProps = () => ({
    userName: this.state.userName,
    email: this.state.email,
    userId: this.state.userId,
    isLogged: this.state.isLogged,
    updateOnLogout: bool => {
      this.setState({
        isLogged: false,
        userId: null,
        email: null,
        userName: null
      })
    },
    toggleLoginFormVisibility: () => {
      this.setState({ loginVisible: !this.state.loginVisible })
    }
  })

  checkForLogin = () => {
    fetch(conf.API_URL + 'user/login?check', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'sessid': cookies.get("PHPSESSID")
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error("Error")
      })
      .then(json => {
        if (json.status) {
          this.setState({
            isLogged: true,
            userId: json.data.userId,
            email: json.data.email,
            userName: json.data.name
          }, () => {
            // update data in config.js file
            conf.USERINFO.userName = json.data.name
            conf.USERINFO.userId = json.data.userId
            conf.USERINFO.email = json.data.email

            toast.success("Login successful", {
              position: 'top-right',
            })
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }



  render() {
    return (
      <React.Fragment>
        {console.log(this.state.isLogged, this.state.userId, this.state.userName)}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Home {...this.commonProps()} />} />

            {/* <Route path="/latest-uploads" exact render={props => <Latest {...props} islogged={ this.state.isLogged } />} /> */}

            <Route path="/latest-uploads/" render={props => <Latest {...props} {...this.commonProps()} />} />

            <Route path="/song/:id/:title" exact render={props => <Song {...props} updateSid={this.updateSid} {...this.commonProps()} />} />

            <Route path="/s/:string" exact render={() => <ShortLinkRedirector />} />

            <Route path="/category/:id" exact render={props => <CategoryList {...props} {...this.commonProps()} />} />

            <Route path="/albums/:id" exact render={() => <Albums {...this.commonProps()} />} />

            <Route path="/singer/:title" exact render={() => <Singer {...this.commonProps()} />} />

            <Route path="/search/:title" render={props => <Search {...this.commonProps()} {...props} />} />

            <Route path="/show-album/:id/:title" exact render={() => <ShowAlbum {...this.commonProps()} />} />

            <Route path="/contact-us" exact render={() => <ContactUs {...this.commonProps()} />} />

            <Route path="/singer-list" exact render={() => <SingerList {...this.commonProps()} />} />

            <Route path="/create-account" exact render={() => <CreateAccount {...this.commonProps()} />} />

            <Route path="/about-us" exact render={() => <AboutUs {...this.commonProps()} />} />

            <Route path="/privacy-policy" exact render={() => <PrivacyPolicy {...this.commonProps()} />} />

            <Route path="/copyright-policy" exact render={() => <CopyrightPolicy {...this.commonProps()} />} />

            <Route path="*" render={() => <Err404 />} />
          </Switch>
        </BrowserRouter>

        {this.state.isPlaying ?
          <BrowserRouter>
            <FooterPlayer
              song_id={this.state.sid}
              toggleFullScreen={this.toggleFullScreenPlayer}
              {...this.commonProps()}
            />
          </BrowserRouter>
          : null
        }
        <BrowserRouter>
          {this.state.loginVisible ? <Login hide={() => this.setState({ loginVisible: false })} /> : null}

        </BrowserRouter>
        <Toaster />
      </React.Fragment>
    )
  }

  updateSid = (sid) => {
    this.setState({ sid: sid, isPlaying: true })
  }

}

export default App