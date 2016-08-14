import React, { Component } from 'react'

class Album extends Component {


  clickHandler = () => {
    this.props.onNavigate('album', this.props.title)
  }

  render() {
    return (
      <div className="album" onClick={this.clickHandler}>
        <img src={`/images/${this.props.image}`} alt=""/>
        <p className="title"> {this.props.title} </p>
      </div>

    )
  }
}

export default Album
