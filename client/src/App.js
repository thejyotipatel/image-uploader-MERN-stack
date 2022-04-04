import { useState } from 'react'
import ImageContainer from './components/ImageContainer'
import Uploading from './components/Uploading'
import ImageAfterUpdoad from './components/ImageAfterUpdoad'
import Alert from './components/alert'

function App() {
  const [copyAlert, setCopyAlert] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [imageData, setImageData] = useState([])
  const [uploaded, setUploaded] = useState(false)
  const [url, setUrl] = useState('')

  return (
    <div className='app'>
      {isUploading ? (
        <Uploading />
      ) : (
        !uploaded && (
          <ImageContainer
            setImageData={setImageData}
            setIsUploading={setIsUploading}
            setUploaded={setUploaded}
            url={url}
            setUrl={setUrl}
          />
        )
      )}
      {uploaded && (
        <ImageAfterUpdoad
          url={url}
          setUrl={setUrl}
          setCopyAlert={setCopyAlert}
          copyAlert={copyAlert}
          imageData={imageData}
        />
      )}
      {copyAlert && <Alert />}
    </div>
  )
}

export default App
