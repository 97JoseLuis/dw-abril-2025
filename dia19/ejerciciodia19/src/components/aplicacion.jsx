import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const User = () => {
  const { id } = useParams();
  return <h1>Usuario ID: {id}</h1>;
};

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ) : (
    <h1>Cargando...</h1>
  );
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/post/1">Ejemplo Post</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
