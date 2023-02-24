import { useState, useEffect } from "react";

import Blog from "./components/Blog";
import Notification from "./components/Notification";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState({
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  });

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      blogService.setToken(JSON.parse(loggedInUser).token);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      setUsername("");
      setPassword("");
      blogService.setToken(user.token);

      window.localStorage.setItem("loggedInUser", JSON.stringify(user));

      setStyle({ ...style, color: "green" });
      setMessage(`Logged in as ${user.name}`);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (exception) {
      console.log(exception);

      setStyle({ ...style, color: "red" });
      setMessage("Wrong username or password");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("loggedInUser");
    setUser(null);

    setStyle({ ...style, color: "green" });
    setMessage("Logout successful");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const postBlog = async (e) => {
    e.preventDefault();
    const response = await blogService.create({ title, author, url, likes });

    setBlogs(blogs.concat(response));

    setStyle({ ...style, color: "green" });
    setMessage(`${title} has been added`);
    setTimeout(() => {
      setMessage("");
    }, 3000);

    setTitle("");
    setAuthor("");
    setUrl("");
    setLikes("");
  };

  const loginForm = () => (
    <>
      <Notification message={message} style={style} />
      <h1>LogIn</h1>
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
    </>
  );

  const blogsElement = () => (
    <div>
      <Notification message={message} style={style} />
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      <button onClick={logout}>Log Out</button>
      <p> </p>
      <form onSubmit={postBlog}>
        <div>
          Title:{" "}
          <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author:{" "}
          <input
            type="text"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          Url:{" "}
          <input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <div>
          Likes:{" "}
          <input
            type="number"
            value={likes}
            name="likes"
            onChange={({ target }) => setLikes(target.value)}
          />
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );

  return <>{user === null ? loginForm() : blogsElement()}</>;
};

export default App;
