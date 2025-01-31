"use client";
import React, { useEffect, useState } from "react";
import Button from "../../../../components/button/Button";
import { capitalize, fetchPostByTopic, Post } from "../../../../lib/utils";

export default function Page({ params }: { params: { topicId: string } }) {
  const topicId = params.topicId;
  const [topicPosts, setTopicPosts] = useState<Post[]>([]);
    const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPostByTopic(topicId);
        setTopicPosts(fetchedPosts);

        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          // Update the state with the fetched data
          setAlbums(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{capitalize(topicId)}</h1>
      <p>{albums}</p>
      <ul>
        {topicPosts.map((post) => (
          <li key={post.id}>
            <Button href={`/questions/${post.id}`} label={post.title}></Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
