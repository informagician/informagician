import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const Media = () => {

    const [ file, setFile ] = useState()
    const [ gallery, setGallery] = useState()

    useEffect(() => {
        
    })

    const handleFile = e => {
        setFile(e.target.files[0])
    }

    const handleUpload = e => {
        const data = new FormData()
        data.append('file', file)
        console.log(file)
        axiosWithAuth().post(process.env.REACT_APP_API + 'media', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Media</h1>
            <input type="file" onChange={handleFile} />
            <input type="submit" value="Upload" onClick={handleUpload} />
            <div className="gallery">
                <div className="img"></div>
            </div>
        </>
    )
}

export default Media