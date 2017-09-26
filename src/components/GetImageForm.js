import React, {Component} from 'react'
import ImageDisplay from './ImageDisplay'

const API_KEY = "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo"

class GetImageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1000"
    }
  }

  fetchRoverImage = () => {
    this.setState({
      camera: this.state.camera,
      rover: this.state.rover,
      sol: this.state.sol
    });

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl).then(results => {
      return results.json();
    }).then(data => {
      console.log("data", data);
      this.setState({images: data.photos})
    })
  }

  handleRover = (event) => {
    this.setState({
      rover: event.target.value
    })
  }

  handleCamera = (event) => {
    this.setState({
      camera: event.target.value
    })
  }

  handleSol = (event) => {
    this.setState({
      sol: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      camera: event.target.camera.value,
      rover: event.target.rover.value,
      sol: event.target.sol.value
    })
    console.log(this.state);
  }

  componentDidMount() {
    this.fetchRoverImage();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="camera" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" id="sol" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>
        <ImageDisplay images={this.state.images} />
      </div>
    )
  }
}

export default GetImageForm
