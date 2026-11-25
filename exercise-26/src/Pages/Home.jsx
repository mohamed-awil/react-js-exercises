import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../BlogContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
  const { posts } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation().search;
  const prams = new URLSearchParams(location);
  const searchTerm = prams.get("course") || "";
  const [search, setShearch] = useState(searchTerm);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (search) {
      navigate(`?course=${search}`);
    } else {
      navigate("");
    }
  }, [search, navigate]);

  const handleSearch = () => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredPosts(filteredPosts);
  };

  return (
    <div className="max-w-4xl bg-white shadow-md p-6 flex flex-col gap-2 mt-4 rounded-md ">
      <h1>Blog Posts</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setShearch(e.target.value)}
        className="border-1 border-gray-400 rounded-sm  text-lg w-[80%] outline-none"
      />

      <button
        className="bg-sky-500 text-xl rounded-sm text-white  w-[80%] p-1"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="flex flex-col">
        {filteredPosts.length > 0
          ? filteredPosts.map((post) => (
              <div>
                <Link
                  to={`/posts${post.id}`}
                  className="text-sky-500 text-lg hover:underline"
                >
                  {post.title}
                </Link>
              </div>
            ))
          : posts.map((post) => (
              <div>
                <Link
                  to={`/${post.id}`}
                  className="text-sky-500 text-lg hover:underline"
                >
                  {post.title}
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};
