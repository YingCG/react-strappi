import React, { useState } from 'react'

const headers = {
  'Content-Type': 'application/json',
};

export default function PostStory() {
  const [subject, setSubject] = useState({
    title: '',
    like: '',
    body: '',
    picture: ''
  })



  const postStory = ({ target: { name, value } }) => {
    setSubject(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const uploadImg = ({ target: files }) => {
    setSubject(story => ({
      ...story,
      picture: files[0]
    }))
  }

  const submitStory = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('files', subject.picture);

    try {
      const data = 
      {
        ...subject,
        picture: formData
      };
      console.log(data)
      const response = await fetch(
        'http://localhost:1337/api/stories',
        {
          method: 'POST',
          headers,
          body: JSON.stringify({
            data: data
          }),
          files: 'http://localhose:1337/api/upload/'
        }
      )
      console.log("Fileupload.handleSubmit response", response)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <form onSubmit={submitStory}>
        <input type='text' name='title' value={subject.title} onChange={postStory} />
        <input type='number' name='like' value={subject.like} onChange={postStory} />
        <input type='text' name='body' value={subject.body} onChange={postStory} />
        <input type='file' name='picture' value={subject.picture} onChange={uploadImg} />
        <button>Post</button>
      </form>
    </div>
  )
}

//https://www.youtube.com/watch?v=A4VZyo6BrJA
