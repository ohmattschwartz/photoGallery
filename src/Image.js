import React, { Component } from 'react'

class Image extends Component {

  clickHandler = () => {
    this.props.onNavigate('album', this.props.title)
  }

  render() {
    return (
      <div className="image" onClick={this.clickHandler}>
        <img src={this.props.url} alt={this.props.title} />
        <p className="return"> Click Here to Return to Album</p>
      </div>
    )
  }
}

export default Image
