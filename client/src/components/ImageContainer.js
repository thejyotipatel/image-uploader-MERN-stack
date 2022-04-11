import img from './image.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ImageContainer = ({ setIsUploading, setUploaded, setUrl }) => {
  const [fileSrc, setFileSrc] = useState()

  const buttonHandler = (img) => {
    setFileSrc(img)
  }
  const addImage = async () => {
    // console.log(fileSrc)

    try {
      setIsUploading(true)
      const data = new FormData()
      data.append('myfile', fileSrc)
      let response = await axios.post('/api/v1/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        setUrl(response.data.images.filePath)
        getImage()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsUploading(false)
        setUploaded(true)
      }, 1000)
    }
  }
  const getImage = async () => {
    try {
      let response = await axios.get('/api/v1/images')

      if (response.status === 200) {
        console.log(response.data)
        // setUrl(response.data.images.filePath)
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(window)
  useEffect(() => {
    if (!fileSrc) return
    addImage()
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
