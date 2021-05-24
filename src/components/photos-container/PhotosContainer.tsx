import './photos-container.scss';
import usePhotos from 'src/hooks/usePhotos';
import { Redirect } from 'react-router-dom';

const PhotosContainer = ({ userId }: { userId: string }) => {
  const [photos, err] = usePhotos(userId);
  return (
    <>
      {err === '' ? (
        <div className="photos-container" data-testid="photos-container">
          {photos?.map((item) => {
            return (
              <div key={item.id || Math.random()} className="photo">
                <img src={item.data} alt="profile item" />
              </div>
            );
          })}
        </div>
      ) : (
        <Redirect to="/" />
      )}
      {err}
    </>
  );
};

export default PhotosContainer;
