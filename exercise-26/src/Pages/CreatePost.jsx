import { useState, useContext } from "react";
import { AuthContext } from "../BlogContext";

export const CreatePost = () => {
  const { posts, setPosts } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {
    const post = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([...posts, post]);
    setTitle("");
    setContent("");
  };
  return (
    <div className="max-w-4xl bg-white shadow-md p-6 flex flex-col gap-2 mt-4 rounded-md">
      <h1 className="font-bold text-2xl">Create a New Post </h1>
      <div className="flex flex-col gap-2">
        <div>
          <label className="font-medium text-lg mr-2">Title:</label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-sm  text-lg focus:outline-2 focus:outline-sky-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
        </div>
        <div className="flex items-end">
          <label className="font-medium text-lg mr-2">Content:</label>
          <textarea
            className="border-1 rounded-sm focus:outline-2 focus:outline-sky-400 h-22 border-gray-500 text-lg"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button
          className="bg-sky-500 text-xl rounded-sm text-white w-[80%] p-1"
          onClick={handleCreate}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};
