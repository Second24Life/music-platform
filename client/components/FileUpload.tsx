import React from 'react';

interface FileUploadProps {
  file: any;
  setFile: Function;
  accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, setFile, accept, children }) => {
  const ref = React.useRef<HTMLInputElement>();

  return (
    <div onClick={() => ref.current?.click()}>
      <input type='file' accept={accept} style={{ display: 'none' }}></input>
      {children}
    </div>
  );
};

export default FileUpload;
