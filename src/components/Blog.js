import React , { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {

    const [ articles, setArticles ] = useState() 

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + 'articles')
            .then(res => {
                setArticles(res.data)
            })
            .catch(err => console.log(err))

    },[])

    console.log(articles)

    return(
        <>
        <h1>Blog</h1>
        {articles !== undefined && articles.map(article => (
            <article key={article.id}>
                <a href={'blog/' + article.url}>
                <h2>{article.title}</h2>
                <p>{article.short}</p>
                </a>
            </article>
        ))}
        </>
    )
}

export default Blog