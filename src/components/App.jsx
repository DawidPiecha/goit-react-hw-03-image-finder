import React, { Component } from 'react';
import { fetchImageGallery } from './ImagesApi/ImagesApi';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    images: [],
    page: 1,
  };

  handleSearch = async searchTerm => {
    const { page } = this.state;

    //jeśli zawartość inputa jest pusta następuje blokada wyszukiwania i komunikat dla użytkownika

    if (searchTerm.trim() === '') {
      Notify.info('Please enter a term to search something');
      return;
    }
    try {
      const data = await fetchImageGallery(searchTerm, page);

      if (data.hits) {
        this.setState({ images: data.hits }, () => {
          Notify.success(
            `We have found ${this.state.images.length} images for "${searchTerm}" `
          );
        });
      }
    } catch (error) {
      console.log('Error fetching images:', error);
    }
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
      </div>
    );
  }
}

export { App };
