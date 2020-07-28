import React, { useState } from 'react'
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

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
            short: html
        })
    }

    const handleLong = html => {
        setArticle({
            ...article,
            long: html
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // let url = article.title.toLowerCase().replace(' ','-')
        let url = article.title
        console.log('submitted',url)
    }

    console.log(article)

    return (
        <>
        <h2>New Article</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:
                <input type="text" name="title" onChange={handleChange} />
            </label>
            <label>Short Description:
                <Quill theme='snow' modules={modules} formats={formats} name="short" onChange={handleShort} />
            </label>
            <label>Long Description:
                <Quill theme='snow' modules={modules} formats={formats} name="long" onChange={handleLong} />
            </label>
            <input type="submit" value="submit"  />
            {/* <button onSubmit={() => handleSubmit()}>Submit</button> */}
        </form>
        </>
    )
}

export default New