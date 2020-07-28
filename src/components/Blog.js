import React , { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {

    const [ articles, setArticles ] = useState()

    document.title = 'Milo Rastgoo - Blog'

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + 'articles')
            .then(res => {
                setArticles(res.data)
            })
            .catch(err => console.log(err))

    },[])

    return(
        <>
        <h2>Blog</h2>
        {articles !== undefined && articles.map(article => (
            <article key={article.id}>
                <a href={'blog/' + article.url}>
                <h3>{article.title}</h3>
                <p>{article.short}</p>
                </a>
            </article>
        ))}
        </>
    )
}

export default Blog