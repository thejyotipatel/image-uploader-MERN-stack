import img from './image.svg'
import { useDropzone } from 'react-dropzone'
import { useState, useEffect } from 'react'
// import axios from 'axios'

const ImageContainer = ({ uploadeImages }) => {
  const [fileSrc, setFileSrc] = useState([])

  useEffect(() => {
    const data = new FormData()
  })

  return (
    <div className='img-contant'>
      <header>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
      </header>
      <div
        className='img-uploader'
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onDrop={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setFileSrc(e.dataTransfer.files[0])
        }}
      >
        <img src={img} alt='data.svg...' />
        <p className=''>Drag & Drop your image here</p>
      </div>

      <p className='or'>or</p>
      {/* <span className='btn-file'> */}
      {/* <input type='file' id='file' /> */}

      <input
        type='file'
        accept='image/*'
        multiple
        id='file'
        onChange={(e) => setFileSrc(e.target.files)}
      />
      <label htmlFor='file'>browser files</label>
      {/* </span> */}
    </div>
  )
}

export default ImageContainer
