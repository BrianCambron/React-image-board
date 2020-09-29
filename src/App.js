import React, { Component } from 'react';
import './App.css';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      caption: '',
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addImage(this.state);
  }
  render() {
    return(
      <form className ="col" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="url">Image Url</label>
          <input type="url" className="form-control" id="url" name="url" value={this.state.url} onChange={this.handleInput}/>
          <label htmlFor="caption">Image Caption</label>
          <input type="text" className="form-control" id="caption" name="caption" value={this.state.caption} onChange={this.handleInput}/>
        </div>
        <button className="btn btn-primary" type="submit">Add</button>
    </form>
    )
  }
}
class ImageList extends Component {
  render() {
    const images = this.props.images.map((image, index) => <li className="list-style"key={index}><img className="img-style"src={image.url} alt=""/><p>{image.caption}</p></li>)
    return(
    <div className="container">
    <ul>
    {images}
    </ul>
    </div>
    )
  }
}

  class ImageBoard extends Component{
    constructor(props){
      super(props);
      this.state = {
        images: [{}],
      }
      this.addImage = this.addImage.bind(this);
    }
    addImage(image){
      console.log('image', image);
      const images = this.state.images
      images.push(image);
      this.setState({images});
    }
  render() {
    return(
      <div>
        <ImageForm addImage={this.addImage}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default ImageBoard;
