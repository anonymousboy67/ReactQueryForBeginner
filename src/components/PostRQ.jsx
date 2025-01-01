import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PostRQ = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    }
  });

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>Error has occurred...</div>;
  }

  return (
    <div className='post-list'>
      {data?.data.map((post) => (
        <div className='post-item' key={post.id}>
          <h3 className='post-title'>{post.title}</h3>
          <p className='post-body'>{post.body}</p>
        </div> // Closing div for each post item
      ))}
    </div>
  );
};

export default PostRQ;
