import React, { Component } from 'react'

class AlbumOne extends Component {

  handleClick = (event) => {
    this.props.onNavigate('image', event.target.src)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="albumOne">
        <img src="images/galleryone/epcotOne.png" onClick={this.handleClick} alt="" />
        <img src="images/galleryone/epcotTwo.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryone/epcotThree.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryone/epcotFour.jpg" onClick={this.handleClick} alt="" />
        <img src="images/galleryone/epcotFive.png" onClick={this.handleClick} alt="" />
        <img src="images/galleryone/epcotSix.jpg" onClick={this.handleClick} alt="" />
        <p className="instructions"> Click a Photo to Enlarge</p>
      </div>
    )
  }
}

export default AlbumOne
