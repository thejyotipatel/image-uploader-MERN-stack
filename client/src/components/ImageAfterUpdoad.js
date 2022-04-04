import { useEffect, useState } from 'react'

const ImageAfterUpdoad = ({ setCopyAlert, copyAlert, url }) => {
  // const { fileName, filePath } = imageData[0]
  const handleButton = () => {
    navigator.clipboard.writeText(`\api\v1${url}`)
    setCopyAlert(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setCopyAlert(false)
    }, 3000)
  }, [copyAlert])

  return (
    <div className='after-image-contaner'>
      <span className='material-icons sucess-icon'>check_circle</span>
      <p className='sucess-text'>uploaded successfully!</p>
      <img src={`\\api/v1\\${url}`} alt='image' className='img' />
      <div className='url-contant'>
        <input
          type='url'
          name='copyImage'
          className='image-url'
          readOnly
          value={`\\api\\v1${url}`}
        />
        <button className='copy-btn' onClick={() => handleButton()}>
          copy Link
        </button>
      </div>
    </div>
  )
}
export default ImageAfterUpdoad
