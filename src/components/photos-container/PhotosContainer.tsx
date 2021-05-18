import './photos-container.scss';

const PhotosContainer = ({ photos }: { photos: Array<any> }) => {
  return (
    <div className="photos-container">
      {photos.map((item) => {
        return (
          <div className="photo">
            <img key={item.id || Math.random()} src={item.data} alt="profile item" />
          </div>
        );
      })}
    </div>
  );
};

export default PhotosContainer;
