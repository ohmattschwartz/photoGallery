import React, { Component } from 'react'

class AlbumSix extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumSix">
        <img src="images/gallerysix/dcaOne.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerysix/dcaTwo.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerysix/dcaThree.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerysix/dcaFour.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerysix/dcaFive.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerysix/dcaSix.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumSix
