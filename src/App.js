import { useState, useEffect } from "react";

import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log(exception);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        Username:{" "}
        <input
          type="text"
          value={username}
          name="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>

      <div>
        Password:{" "}
        <input
          type="password"
          value={password}
          name="passowrd"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );

  const blogsElement = () => (
    <div>
      <h2>Blogs</h2>
      <p>{user.name} logged in</p>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );

  return <>{user === null ? loginForm() : blogsElement()}</>;
};

export default App;
