import React, { useState } from 'react'
import axios from 'axios'
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

import { Editor } from '@tinymce/tinymce-react';

const New = () => {

    const [ article, setArticle ] = useState({})

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

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

        // Lorem ipsum is for long description and the story. I wonder how this wysiwig text editor will work!
    }

    console.log(article)

    return (
        <>
        <h2>New Article</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:
                <input type="text" name="title" onChange={handleChange} />
            </label>
            {/* <label>Short Description:
                <Quill theme='snow' modules={modules} formats={formats} name="short" onChange={handleShort} />
            </label> */}
            <input type="submit" value="submit"  />
            {/* <button onSubmit={() => handleSubmit()}>Submit</button> */}
        </form>
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
                  'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | image | help'
              }}
        />
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
                  'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | image | help'
              }}
        />
        </>
    )
}

export default New