import React, {Component} from 'react'

class ImageDisplay extends Component {
  render(){
    // console.log(this.props);
    const elements = this.props.images.map(item => {
      return(
        <div key={item.id}>
          <img src={item.img_src}/>
        </div>
      )
    })
    return(
      <div>
        {elements}
      </div>
    )
  }
}

export default ImageDisplay
