import React, { Component } from 'react'
import Album from './Album'

class Albums extends Component {

  render() {
    return (
      <div className="albums">
        <Album onNavigate={this.props.onNavigate} image="galleryone/epcotLogo.jpg" title="Album One"/>
        <Album onNavigate={this.props.onNavigate} image="gallerytwo/mkLogo.png" title="Album Two"/>
        <Album onNavigate={this.props.onNavigate} image="gallerythree/mgmLogo.jpg" title="Album Three"/>
        <Album onNavigate={this.props.onNavigate} image="galleryfour/akLogo.png" title="Album Four"/>
        <Album onNavigate={this.props.onNavigate} image="galleryfive/blizzardLogo.jpg" title="Album Five"/>
        <Album onNavigate={this.props.onNavigate} image="gallerysix/dcaLogo.jpg" title="Album Six"/>
      </div>
    )
  }
}

export default Albums
