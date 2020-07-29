import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Article = () => {

    const [ article, setArticle ] = useState({})

    let { id } = useParams()

    useEffect(() => {

        axios.get(process.env.REACT_APP_API + 'articles/' + id)
            .then(res => {
                setArticle(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <>
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{__html: article.short}} />
            <div dangerouslySetInnerHTML={{__html: article.long}} />
        </>
    )
}

export default Article