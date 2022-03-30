import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { micromark } from "micromark";
import { FiChevronLeft } from "react-icons/fi";
import "github-markdown-css/github-markdown-light.css";

import { DataStore } from "aws-amplify";
import { Post } from "../models";

// import NotFound from "./NotFound"
import Header from "../components/Header";
// import Footer from "../components/Footer"
import { prettyPost } from "../utils/pretty";

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    DataStore.query(Post, id)
      .then((_post) => {
        setPost(prettyPost(_post));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="hidden md:block md:fixed left-[2%] bottom-5 p-3 shadow shadow-gray-300 rounded-full">
        <FiChevronLeft
          className="text-xl cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="mt-32 mb-20">
        {!post ? (
          <h1>Loading</h1>
        ) : (
          <div className="flex flex-col items-center w-[80%] mx-auto">
            {/*Post Info*/}
            <div className="flex justify-center gap-20">
              <div className="flex flex-col items-center gap-5">
                <p className="text-gray-500">Author</p>
                <p className="font-bold">Ruta Tang</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <p className="text-gray-500">Pub Date</p>
                <p className="font-bold">{post.createdAt}</p>
              </div>
            </div>
            {/*Post Title*/}
            <h1 className="text-4xl font-black text-center mt-14">
              {post.title}
            </h1>
            {/*Post Description*/}
            <p className="text-center text-2xl leading-10 mt-8 text-gray-600 font-bold ">
              {post.description}
            </p>
            {/*Post Cover*/}
            <img className="mt-10" src={post.cover} alt="" />
            {/*Post Content*/}
            <div className="mt-10 w-full">
              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{
                  __html: micromark(post.content || ""),
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostDetail;
