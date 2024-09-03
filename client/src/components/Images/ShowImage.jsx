import React from 'react'

const ShowImage = ({ imagePath,className,width,height,alt }) => {
    const baseURL = import.meta.env.VITE_BASE_URL_PUBLIC; // or your hardcoded base URL
    const imageURL = `${baseURL}${imagePath}`;
  return (
    <>
        <img src={imageURL} className={className} width={width || ''} height={height || ''} alt={alt || ''}/>
    </>
  )
}

export default ShowImage