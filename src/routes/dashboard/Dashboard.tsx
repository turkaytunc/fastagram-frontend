/* eslint-disable dot-notation */
import React, { useEffect, useState } from 'react';
import FileUpload from 'src/components/file-upload/FileUpload';

const Dashboard = () => {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <div className="w-6">
        <FileUpload multiple={false} onDone={setFiles} iconSize="30" fill="#333" />
      </div>
      <div className="text-center">
        {files?.map((file: any) => {
          return <img key={Math.random()} src={file.base64} alt="deneme" />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
