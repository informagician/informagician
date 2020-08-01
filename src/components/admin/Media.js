import React, { useState } from 'react'
import axios from 'axios'

const Media = () => {

    const [ file, setFile ] = useState()

    const handleFile = e => {
        setFile(e.target.files[0])
    }

    const handleUpload = e => {
        console.log(file)
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