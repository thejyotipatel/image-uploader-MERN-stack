import { useEffect, useState } from 'react'

const ImageAfterUpdoad = ({ setCopyAlert, copyAlert }) => {
  const [url, setUrl] = useState(
    'https://github.com/rohit-114/image-uploader/blob/main/client/src/components/Uploaded.jsx'
  )
  const handleButton = () => {
    navigator.clipboard.writeText(url)
    setCopyAlert(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setCopyAlert(false)
    }, 3000)
  }, [copyAlert])
  return (
    <div className='after-image-contaner'>
      <div className=''></div>
      <span className='material-icons'>check_circle</span>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
        alt='image'
        className='img'
      />
      <div className='url-contant'>
        <input
          type='url'
          name='copyImage'
          className='image-url'
          readOnly
          value={url}
        />
        <button className='copy-btn' onClick={() => handleButton()}>
          copy Link
        </button>
      </div>
    </div>
  )
}
export default ImageAfterUpdoad
