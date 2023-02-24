import { useState } from "react";

const PostForm = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [likes, setLikes] = useState("");

  const addBlog = (e) => {
    e.preventDefault();
    createBlog({ title, author, url, likes });

    setTitle("");
    setAuthor("");
    setUrl("");
    setLikes("");
  };

  return (
    <form onSubmit={addBlog}>
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
  );
};

export default PostForm;
