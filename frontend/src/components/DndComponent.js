import React, { useState } from "react";
import {Convert} from 'mongo-image-converter';

import {useDropzone} from "react-dropzone";

function DndComponent(props) {

  const [files, setFiles] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
    }
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} className="dragndrop-image" alt = "preview"/>
      </div>
      <div>{file.name}</div>
    </div>
  ))

  return (
    <div className="dragndrop">
      <div {...getRootProps()}>
        <input type='file' {...getInputProps()}/>
        <p>Drop files here</p>
      </div>
      <div>{images}</div>
    </div>
  );
}

export default DndComponent;