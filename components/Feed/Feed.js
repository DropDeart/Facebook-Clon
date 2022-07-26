import React, { useEffect } from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import { useState } from 'react'
import MessageSeender from './MessageSeender'
import Post from './Post'




import db from '../auth/firebase'


const Feed = () => {
 
  const [posts,setPosts] = useState([])
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    })
}, [])
  return (
    <div className="feed">
      <StoryReel />
      <MessageSeender />
      {posts.map(post =>(
        <Post
        key={post.id}
        profilePic={post.profilePic}
        message={post.message}
        timestamp={post.timestamp}
        username={post.username}
        image={post.image}
        ></Post>
        
      ))}
      
    </div>
  )
}

export default Feed
