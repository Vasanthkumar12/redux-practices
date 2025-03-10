import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { postReducer } from '../redux/postReducer'
import { add_post } from '../redux/actions'

const initialState = []




export const PostReducer = () => {
    const [posts, dispatch] = useReducer(postReducer, initialState)
    // console.log(posts, 'posts')
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    
    const addPost = (e) => {
        e.preventDefault()
        // console.log('title =', title, 'comment =', comment)
        dispatch(add_post({ title: title, comment: comment }))

    }

    return (
    <div>
        <form onSubmit={addPost}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='enter title' />
            <input type="text" onChange={(e) => setComment(e.target.value)} placeholder='enter comment' />
            <input type="submit" value='Add Post' />
        </form>

        <div>
            {posts.map((data) => (
                <div key={data.id}>
                    {/* {console.log(data.post?.title)} */}
                    <p><strong>Title : { data.post?.title }</strong></p>
                    <p>Comment : { data.post?.comment }</p>
                </div>
            ))}
        </div>
    </div>
  )
}
