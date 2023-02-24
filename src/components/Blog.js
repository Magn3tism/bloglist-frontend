import Togglable from "./Toggable";

const divStyle = { border: "1px solid black", margin: 10, padding: 10 };

const Blog = ({ blog }) => (
  <div style={divStyle}>
    <b style={{ fontSize: 20 }}>{blog.title}</b>

    <Togglable closedLabel="Show" openLabel="Close">
      <b>Auhtor:</b> {blog.author} <br />
      <b>Url:</b> {blog.url} <br />
      <b>Likes:</b> {blog.likes} <br />
    </Togglable>
  </div>
);

export default Blog;
