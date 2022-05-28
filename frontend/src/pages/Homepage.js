import React from 'react'
import useFetch from '../api/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/stories')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong :S </p>
  console.log(data)

  return (
    <div>
        {data.data.map(x => x.attributes).map(story => (
            <div key={story.id} className="story-board"> 
                <div className='like'> { story.like } </div>
                <h1>{ story.title }</h1>

                <small>console list</small>
                <p>{(story.body || '').substring(0,200)}...</p>
                <Link to={`/stories/${story.id}`}>Read more</Link>
            </div>
        ))}
    </div>
  )
}
