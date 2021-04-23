import React, { useState } from 'react';
import FileUpload from 'src/components/file-upload/FileUpload';

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  return (
    <div>
      <FileUpload multiple={false} onDone={setFiles} iconSize="30" fill="#333" />
      <div className="text-center">
        {files?.map((file: any) => {
          return <img key={Math.random()} src={file.base64} alt="deneme" />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
