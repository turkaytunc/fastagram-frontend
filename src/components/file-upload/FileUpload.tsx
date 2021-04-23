import React from 'react';
import './file-upload.scss';
import { FaPlusCircle } from 'react-icons/fa';

const FileUpload = ({
  multiple,
  onDone,
  iconSize,
  fill,
}: {
  multiple: boolean;
  onDone: any;
  iconSize: string;
  fill: string;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const allFiles: any[] = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          const fileInfo = {
            name: file.name,
            type: file.type,
            size: `${Math.round(file.size / 1000)}kB`,
            base64: reader.result,
            file,
          };

          allFiles.push(fileInfo);

          if (allFiles.length === files.length) {
            if (multiple) onDone(allFiles);
            else onDone([allFiles[0]]);
          }
        };
      }
    }
  };
  return (
    <label htmlFor="fileInput">
      <input
        className="file-input"
        id="fileInput"
        type="file"
        multiple={multiple}
        onChange={(e) => handleChange(e)}
      />
      <FaPlusCircle size={iconSize} fill={fill} className="svg-fill" />
    </label>
  );
};

export default FileUpload;
