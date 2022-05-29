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
        {data.data.map(story => (
            <div key={story.id} className="story-board"> 
                <h1>{ story.attributes.title }</h1>
                
                <small className='like'> Likes:  { story.attributes.like } </small>

                {/* <small>console list</small> */}
                <p className="story">{(story.attributes.body || '').substring(0,200)}...</p>
                <Link to={`/stories/${story.id}`}>Read more</Link>
                <div className="story-img">{ story.picture }</div>
            </div>
        ))}
    </div>
  )
}
