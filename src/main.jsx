import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Amplify from "aws-amplify";
// import PubSub from "@aws-amplify/pubsub";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
// PubSub.configure(awsconfig);

import "./index.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import TestPage from "./pages/TestPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog">
        <Route index element={<Blog />} />
        <Route path=":id" element={<BlogPostDetail />} />
      </Route>
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
