import React from "react";
import axios from "axios";
import Photo from "./Photo";

class App extends React.Component {
  state = {
    isLoading: true,
    photos: []
  };
  getPhotos = async () => {
    const photos = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_KEY}`
    );
    // 이제 isLoading을 false로 바꾸어서 Loading이 종료됐음을 알려주기
    this.setState({ photos: photos.data, isLoading: false });
  };
  componentDidMount() {
    this.getPhotos();
  }
  render() {
    // state로부터 isLoading, photos 값을 받아서 저장
    const { isLoading, photos } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="photos">
            {photos.map(photo => (
              <Photo
                key={photo.id}
                id={photo.id}
                updated={photo.updated_at}
                image={photo.urls.small}
                name={photo.user.username}
                bio={photo.user.bio}
                portfolio={photo.user.portfolio_url}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
