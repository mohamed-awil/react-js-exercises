import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../BlogContext";

export const Post = () => {
  const { courseId } = useParams();
  const { posts } = useContext(AuthContext);
  const selectedPost = posts.filter((post) => post.id == courseId);

  return (
    <div className="max-w-4xl bg-white shadow-md p-6 flex flex-col gap-2 mt-4 rounded-md">
      {selectedPost.map((post) => (
        <div>
          <h2 className="font-bold text-xl text-sky-500">{post.title}</h2>
          <p className="text-lg text-sky-500">{post.content}</p>
        </div>
      ))}
    </div>
  );
};
