import Link from 'next/link'
import React from 'react'

export default function ArticleList({posts}) {
  const dateDisplay = (datum) => {
    var d = new Date(datum);
    return d.toLocaleDateString('hu-hu');
  }
	return (
    <>
      <h2></h2>
      <div className="article-list">
        { posts.map( post => {
          return(
            <article key={ post.id }>
              <Link href={ 'posts/' + post.slug }>
                <header>
                  <div className="left">
                    <span className="meta">{ dateDisplay(post.date) }</span>
                    <h1 className='title'>{ post.title.rendered }</h1>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </header>
              </Link>
            </article>
          )
        } ) }
      </div>
    </>
	)
}
