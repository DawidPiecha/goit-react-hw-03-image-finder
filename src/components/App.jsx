import React, { Component } from 'react';
import { fetchImageGallery } from './ImagesApi/ImagesApi';
import { Searchbar } from './Searchbar/Seachbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    images: [],
    searchInputTerm: '',
    page: 1,
  };

  handleSearch = async () => {
    const { searchInputTerm } = this.state;
    const { page } = this.state;
    try {
      const data = await fetchImageGallery(searchInputTerm, page);

      if (data.hits) {
        this.setState({ images: data.hits });
      }
    } catch (error) {
      console.log('Error fetching images:', error);
    }
  };

  handleInputChange = event => {
    this.setState({ searchInputTerm: event.target.value });
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        <Searchbar
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
        />
        <ImageGallery images={images} />
      </div>
    );
  }
}

export { App };
