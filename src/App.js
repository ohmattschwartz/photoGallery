import React, { Component } from 'react';
import './App.css';
import Albums from './Albums'
import AlbumOne from './AlbumOne'
import AlbumTwo from './AlbumTwo'
import AlbumThree from './AlbumThree'
import AlbumFour from './AlbumFour'
import AlbumFive from './AlbumFive'
import AlbumSix from './AlbumSix'
import Image from './Image'

class App extends Component {

  constructor () {
    super()
    this.state = {
      currentAlbum: null,
      currentImage: null
    }
  }

  onNavigate = (type, where) => {
    if (type === 'album') {
      this.setState({
        currentAlbum: where,
        currentImage: null
      })
    } else {
      this.setState({
        currentImage: where
      })
    }
  }

  render() {
    let screen

    if (this.state.currentImage === null) {
      switch (this.state.currentAlbum) {
        case 'Album One':
          screen = <AlbumOne onNavigate={this.onNavigate} />
          break;
        case 'Album Two':
          screen = <AlbumTwo
          onNavigate={this.onNavigate} />
          break;
        case 'Album Three':
          screen = <AlbumThree
          onNavigate={this.onNavigate} />
          break;
        case 'Album Four':
          screen = <AlbumFour
          onNavigate={this.onNavigate} />
          break;
        case 'Album Five':
          screen = <AlbumFive
          onNavigate={this.onNavigate} />
          break;
        case 'Album Six':
          screen = <AlbumSix
          onNavigate={this.onNavigate} />
          break;
        default:
          screen = <Albums onNavigate={this.onNavigate} />
      }
    } else {
      screen = <Image url={this.state.currentImage}
      title={this.state.currentAlbum}
      onNavigate={this.onNavigate} />
    }



    return (
      <div className="App">
        <div className="App-header">
          <h1>Disney Parks Photo Gallery</h1>
        </div>

        {/* put on the current screen here... */}
        {/* Albums Component goes here */}
        <div className="gallery">
          {screen}
        </div>

        <div className="App-footer">
        <h2>Copyright 2016 Matt Schwartz</h2>
        </div>
      </div>
    );
  }
}

export default App;
