import { useState } from 'react'
import ImageContainer from './components/ImageContainer'
import Uploading from './components/Uploading'
import { faWright } from 'react-'
import ImageAfterUpdoad from './components/ImageAfterUpdoad'
import Alert from './components/alert'
import axios from 'axios'

function App() {
  const [copyAlert, setCopyAlert] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const uploadeImages = async (currentImage) => {
    try {
      const response = await axios.post('/api/v1/uploade', currentImage)
      const data = response.data
    } catch (error) {
      console.log(error)
    }
  }
  const getImages = async () => {
    try {
      const { data } = await axios.get('/api/v1/images')
      const allImages = data
      console.log(allImages)
    } catch (error) {
      console.log(error, 'get images error!!!')
    }
  }

  return (
    <div className='app'>
      {isUploading ? (
        <Uploading />
      ) : (
        // <ImageContainer uploadeImages={uploadeImages} />
        <ImageAfterUpdoad setCopyAlert={setCopyAlert} copyAlert={copyAlert} />
      )}
      {copyAlert && <Alert />}
    </div>
  )
}

export default App
