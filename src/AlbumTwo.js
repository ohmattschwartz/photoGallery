import React, { Component } from 'react'

class AlbumTwo extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumTwo">
        <img src="images/gallerytwo/mkOne.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerytwo/mkTwo.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerytwo/mkThree.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerytwo/mkFour.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerytwo/mkFive.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerytwo/mkSix.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumTwo
