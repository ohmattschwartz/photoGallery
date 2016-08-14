import React, { Component } from 'react'

class AlbumFive extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumFive">
        <img src="images/galleryfive/blizzardOne.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfive/blizzardTwo.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfive/blizzardThree.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfive/blizzardFour.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfive/blizzardFive.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfive/blizzardSix.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumFive
