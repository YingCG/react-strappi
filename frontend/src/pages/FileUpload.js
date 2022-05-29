import React from 'react'
//https://www.youtube.com/watch?v=A4VZyo6BrJA

export default function FileUpload() {

    const updatePage = (event) => {
        console.log("FileUpload.updatePage event.target.files", event.target.files) 
    }

    const postStory = (event) => {
        event.preventDefault()
        console.log("FileUpload.PostStory")
    }  

  return (
    <div>
      <form onSubmit={postStory}>
        <input onChange={updatePage} type='file'/>
        <button>Post</button>
      </form>
    </div>
  )
}
