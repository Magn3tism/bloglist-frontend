const PostForm = (props) => {
  const {
    handleSubmit,
    title,
    author,
    url,
    likes,
    handleTitleChange,
    handleAuthorChange,
    handleUrlChange,
    handleLikeChange,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title:{" "}
        <input
          type="text"
          value={title}
          name="title"
          onChange={handleTitleChange}
        />
      </div>
      <div>
        Author:{" "}
        <input
          type="text"
          value={author}
          name="author"
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        Url:{" "}
        <input type="text" value={url} name="url" onChange={handleUrlChange} />
      </div>
      <div>
        Likes:{" "}
        <input
          type="number"
          value={likes}
          name="likes"
          onChange={handleLikeChange}
        />
      </div>

      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
