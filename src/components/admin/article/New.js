import React, { useState } from 'react'
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';

import { Editor } from '@tinymce/tinymce-react';

const New = () => {

    const [ article, setArticle ] = useState({})

    const handleChange = e => {

        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }

    const handleShort = html => {
        setArticle({
            ...article,
            short: html.level.content
        })
    }

    const handleLong = html => {
        setArticle({
            ...article,
            long: html.level.content
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submitted',article)
        axios.post(process.env.REACT_APP_API + 'articles/new',article)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    console.log(article)

    return (
        <>
        <h2>New Article</h2>
            <label>Title:
                <input type="text" name="title" onChange={handleChange} />
            </label>
            <label>Short Description
            <Editor 
                onChange={handleShort}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image | help'
                }}
            />
            </label>
            <label>Long Description
            <Editor 
                onChange={handleLong}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image | help'
                }}
            />
            </label>
            <input type="submit" onClick={handleSubmit} value="Publish" />
        </>
    )
}

export default New