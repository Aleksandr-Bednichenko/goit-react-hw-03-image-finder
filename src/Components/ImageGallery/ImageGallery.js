import { Component } from 'react';
import imgApi from '../Api';
import ImageGalleryItem from '../ImageGalleryItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      imgApi
        .fetchImg(nextName)
        .then(images =>
          this.setState({ images: images, status: Status.RESOLVED }),
        )
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
    console.log(this.state.images);
  }

  render() {
    const { images, error, status } = this.state;
    // const { imgName } = this.props;

    if (status === 'idle') {
      return <div>Введите имя изображения.</div>;
    }

    // if (status === 'pending') {
    //   return <PokemonPendingView pokemonName={pokemonName} />;
    // }

    // if (status === 'rejected') {
    //   return <PokemonErrorView message={error.message} />;
    // }

    if (status === 'resolved') {
      <p>good</p>;
      //       console.log(this.state.images)
      //       return (<ul className="ImageGallery">
      //         <div>{this.state.imgName}</div>
      //       {images.map(({ id, webformatURL, largeImageURL }) => (
      //   <ImageGalleryItem key={id} src={webformatURL} largeImg={largeImageURL} />
      // ))}
      //     </ul>);
    }
  }
}
