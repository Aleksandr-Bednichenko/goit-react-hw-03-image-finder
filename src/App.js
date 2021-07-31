import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import imgApi from './Components/Api';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

class App extends React.Component {
  state = {
    imgName: '',
    // images: [],
    // error: null,
    // status: Status.IDLE,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevState.imgName;
  //   const nextName = this.state.imgName;

  //   if (prevName !== nextName) {
  //     this.setState({ status: Status.PENDING });

  //   imgApi
  //     .fetchImg(nextName)
  //     .then(images => this.setState({ images: images.hits, status: Status.RESOLVED }))
  //     .catch(error => this.setState({ error, status: Status.REJECTED }))

  //   }
  //   console.log(this.state.images)
  // }

  handleSearchbarSubmit = imgName => {
    this.setState({ imgName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery imgName={this.state.imgName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default App;
