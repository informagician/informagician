import React, { useState } from 'react'
import axios from 'axios'

const Media = () => {

    const [ file, setFile ] = useState()

    const handleFile = e => {
        setFile(e.target.files[0])
    }

    const handleUpload = e => {
        const data = new FormData()
        data.append('file', file)
        console.log(file)
        axios.post(process.env.REACT_APP_API + 'media', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Media</h1>
            <input type="file" onChange={handleFile} />
            <input type="submit" value="Upload" onClick={handleUpload} />
        </>
    )
}

export default Media