import React, {Component} from 'react'

const API_KEY = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo"

class GetImageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: ""
    }
  }

  fetchRoverImage = () =>{
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`).then(results => {
      return results.json();
    }).then(data => {
      console.log("data", data);
      this.setState({
        data: data
      })
    })
  }

  componentDidMount(){
    // this.fetchRoverImage();
  }

  render(){
    return(
      <div>
        GetImageForm
      </div>
    )
  }
}

export default GetImageForm
