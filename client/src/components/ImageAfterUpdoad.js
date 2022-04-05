import { useEffect } from 'react'

const ImageAfterUpdoad = ({ setCopyAlert, copyAlert, url }) => {
  const imgUrl = `http://localhost:5000/${url}`
  const handleButton = () => {
    navigator.clipboard.writeText(imgUrl)
    setCopyAlert(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setCopyAlert(false)
    }, 2500)
  }, [copyAlert])

  return (
    <div className='after-image-contaner'>
      {url !== undefined ? (
        <>
          <span className='material-icons sucess-icon'>check_circle</span>
          <p className='sucess-text'>uploaded successfully!</p>

          <img src={imgUrl} width='100%' alt='image' className='img' />
          <div className='url-contant'>
            <input
              type='url'
              name='copyImage'
              className='image-url'
              readOnly
              value={imgUrl}
            />
            <button className='copy-btn' onClick={() => handleButton()}>
              copy Link
            </button>
          </div>
        </>
      ) : (
        <>
          <span class='material-icons error-icon'>error</span>
          <p className='error-text'>something went wrong please try again!!!</p>
          <a className='try-btn' href='/'>
            Try Agen
          </a>
        </>
      )}
    </div>
  )
}
export default ImageAfterUpdoad
