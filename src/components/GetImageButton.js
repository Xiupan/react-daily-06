import React, {Component} from 'react'

class GetImageButton extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.fetchImages}>
          Display Images
        </button>
      </div>
    )
  }
}

export default GetImageButton
