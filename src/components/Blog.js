import Togglable from "./Toggable";

const divStyle = { border: "1px solid black", margin: 10, padding: 10 };

const Blog = ({ blog, handleDelete, handleLike }) => (
  <div style={divStyle}>
    <b style={{ fontSize: 20 }}>{blog.title}</b>

    <Togglable closedLabel="Show" openLabel="Close">
      <b>Auhtor:</b> {blog.author} <br />
      <b>Url:</b>{" "}
      <a href={blog.url} target="_blank">
        {blog.url}
      </a>{" "}
      <br />
      <b>Likes:</b> {blog.likes}{" "}
      <button
        onClick={() => {
          handleLike(blog.id);
        }}
      >
        Like
      </button>
      <br />
      <button
        onClick={() => {
          handleDelete(blog.id);
        }}
      >
        Delete
      </button>
    </Togglable>
  </div>
);

export default Blog;
