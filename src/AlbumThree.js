import React, { Component } from 'react'

class AlbumThree extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumThree">
        <img src="images/gallerythree/mgmOne.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerythree/mgmTwo.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerythree/mgmThree.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerythree/mgmFour.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerythree/mgmFive.jpg" onClick={this.handleClick} alt="" />
        <img src="images/gallerythree/mgmSix.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumThree
