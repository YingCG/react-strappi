import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../api/useFetch'

export default function Stories() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/stories/' + id )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>


  const {attributes: story} = data.data;

  return (
    <div className="story-board">
       {/* <h1>{ data.data.attributes.title }</h1> */}
       <h1>{ story.title }</h1>
      <small className='like'></small>

      <p>{ story.body }</p>
    </div>
  )
}
