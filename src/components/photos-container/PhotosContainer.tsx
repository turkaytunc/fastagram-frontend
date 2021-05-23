import './photos-container.scss';
import usePhotos from 'src/hooks/usePhotos';

const PhotosContainer = ({ userId }: { userId: string }) => {
  const [photos, err] = usePhotos(userId);
  return (
    <div className="photos-container">
      {photos.map((item) => {
        return (
          <div key={item.id || Math.random()} className="photo">
            <img src={item.data} alt="profile item" />
          </div>
        );
      })}
      {err}
    </div>
  );
};

export default PhotosContainer;
