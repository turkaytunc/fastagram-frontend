import { useState } from 'react';
import ReactDOM from 'react-dom';
import './upload-modal.scss';
import FileUpload from 'src/components/file-upload/FileUpload';
import { addPhotoByUserId } from 'src/api';
import { useParams } from 'react-router';

const UploadModal = ({ setIsOpen, isOpen }: { setIsOpen: any; isOpen: boolean }) => {
  const [files, setFiles] = useState([{}] as [{ base64: string }]);
  const params: { userId: string } = useParams();
  const handleUpload = async () => {
    try {
      if (files.length < 1) return;

      await addPhotoByUserId(files[0].base64, params.userId);
    } catch (error) {
      console.log(error);
    }
  };
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="upload-modal-container">
      <button
        type="button"
        onClick={() => setIsOpen((prev: any) => !prev)}
        className="text-3xl font-light right-5 absolute"
      >
        &times;
      </button>
      <div className="w-6 top-2 absolute left-5">
        <FileUpload multiple onDone={setFiles} iconSize="30" fill="#333" />
      </div>
      <div className="flex justify-center absolute top-14 lg:top-32 file-preview">
        {files?.map((file) => {
          return <img key={Math.random()} src={file.base64} alt="uploaded file" />;
        })}
      </div>
      <button onClick={handleUpload} type="button" className="top-36 absolute">
        Upload
      </button>
    </div>,
    document.getElementById('upload-modal')!
  );
};

export default UploadModal;
