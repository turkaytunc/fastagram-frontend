/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { Navbar } from 'src/components';
import FileUpload from 'src/components/file-upload/FileUpload';
import useAuth from 'src/hooks/useAuth';

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [err] = useAuth();

  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      {/* <div className="w-6">
        <FileUpload multiple onDone={setFiles} iconSize="30" fill="#333" />
      </div>
      <div className="flex justify-center">
        {files?.map((file: any) => {
          return <img key={Math.random()} width="300px" src={file.base64} alt="deneme" />;
        })}
      </div> */}
    </div>
  );
};

export default Dashboard;
