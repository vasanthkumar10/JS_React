import axios from "axios";
import React, { useState, useEffect } from "react";

export function APIDemo() {
  const [posts, setPosts] = useState([]);
  //   const [id, setId] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((data) => {
      setPosts([...data.data]);
      setFilteredPosts([...data.data]);
    });
  }, []);

  useEffect(() => {
    let filteredData = posts.filter((post) => post.title.includes(search));
    setFilteredPosts([...filteredData]);
  }, [search]);

  const handleSort = () => {
    let sortedData = posts.sort((a, b) => a.body.localeCompare(b.body));
    console.log(sortedData);
    setFilteredPosts([...sortedData]);
  };

  return (
    <div>
      {/* <button onClick={() => setId((prev) => prev + 1)}>increment</button> */}
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSort}>sort</button>
      {filteredPosts.map((post) => (
        <div>
          <h1>title - {post.title}</h1>
          <p>body- {post.body}</p>
        </div>
      ))}

      {/* <h1>{posts.title}</h1>
      <p>{posts.body}</p> */}
    </div>
  );
}
