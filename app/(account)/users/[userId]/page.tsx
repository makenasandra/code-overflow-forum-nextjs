'use client'
import React, { useEffect, useState } from 'react'
// import { fetchUserData, fetchUserPosts, User, Post } from '../../../../lib/utils'
import { USERS } from '../../../../data/userData'
import { POSTS } from '../../../../data/postData'
import Button from '../../../../components/button/Button'
import { useRouter } from 'next/navigation'

export default function UserPage({ params }: { params: { userId: string } }) {
  const { userId } = params
  const router = useRouter()
  // const [user, setUser] = useState<User | null>(null)
  // const [userPosts, setUserPosts] = useState<Post[]>([])
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const userIdNumber = parseInt(userId, 10)

  //   const fetchData = async () => {
  //     try {
  //       const fetchedUser = await fetchUserData(userIdNumber)
  //       if (!fetchedUser) {
  //         throw new Error('Invalid user ID')
  //       }
  //       const fetchedUserPosts = await fetchUserPosts(userIdNumber)
  //       setUser(fetchedUser)
  //       setUserPosts(fetchedUserPosts)
  //     } catch (error) {
  //       console.error(error)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   fetchData()
  // }, [userId])
  let  user,userPosts, isLoading = true;
    const userIdNumber = parseInt(userId, 10)

    
      try {
        const fetchedUser = USERS.find((user) => user.id === userIdNumber);
        if (!fetchedUser) {
          throw new Error('Invalid user ID')
        }
        const fetchedUserPosts = POSTS.filter((post) => post.userId === userIdNumber);
        user = fetchedUser;
        userPosts =  fetchedUserPosts
      } catch (error) {
        console.error(error)
      } finally {
        isLoading = false;
      }

  if (isLoading) {
    return <div>Loading user data...</div>
  }

  if(!user) {
    return (
      <div>
        <h2>This User Does Not Exist!</h2>
        <Button href="/users" label="All Users" />
      </div>
    )
  }

  return (
    <>
      <h1>Username: {user.username}</h1>
      <h2>Company: {user.company.name}</h2>
      <div>
        <h3>User&apos;s Posts:</h3>
        <ul>
          {userPosts?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
