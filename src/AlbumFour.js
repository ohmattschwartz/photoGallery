import React, { Component } from 'react'

class AlbumFour extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumFour">
        <img src="images/galleryfour/akOne.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfour/akTwo.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfour/akThree.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfour/akFour.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfour/akFive.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryfour/akSix.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumFour
