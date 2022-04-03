import img from './image.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ImageContainer = () => {
  const [fileSrc, setFileSrc] = useState([])

  const buttonHandler = (img) => {
    // e.preventDefault()

    console.log(img)
    setFileSrc(img)
  }
  const addImage = async () => {
    console.log(fileSrc)
    try {
      const data = new FormData()
      data.append('myFile', fileSrc)

      let response = await axios.post('/api/v1/uploadeImages', data)
      if (response.status === 200) {
        console.log(response)
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    console.log(fileSrc.length)
    if (fileSrc.length !== 0) {
      addImage()
    }
  }, [fileSrc])

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
        id='file'
        onChange={(e) => buttonHandler(e.target.files[0])}
      />
      <label htmlFor='file'>browser files</label>
      {/* </span> */}
    </div>
  )
}

export default ImageContainer
