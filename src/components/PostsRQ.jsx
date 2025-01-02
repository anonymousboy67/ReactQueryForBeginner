import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";





//Post method

const addPost=(post)=>{
    return axios.post("http://localhost:4000/posts", post);

}

const PostsRQ = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["post"],
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    },
  });

  const {mutate}=useMutation({
    mutationFn:addPost
  })





  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, body });
    mutate({})
    setTitle("");
    setBody("");
  };

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="post-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          value={title}
        />
        <input
          type="text"
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter post body"
          value={body}
        />
        <button type="submit">Post</button>
      </form>

      {data?.data.map((post) => (
        <Link key={post.id} to={`/rq-post/${post.id}`}>
          <div className="post-item">
            <h3 className="post-title">{post.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsRQ;
