import { useState } from 'react'
import ImageContainer from './components/ImageContainer'
import Uploading from './components/Uploading'
import ImageAfterUpdoad from './components/ImageAfterUpdoad'
import Alert from './components/alert'

function App() {
  const [copyAlert, setCopyAlert] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  return (
    <div className='app'>
      {isUploading ? (
        <Uploading />
      ) : (
        <ImageContainer />
        // <ImageAfterUpdoad setCopyAlert={setCopyAlert} copyAlert={copyAlert} />
      )}
      {copyAlert && <Alert />}
    </div>
  )
}

export default App
