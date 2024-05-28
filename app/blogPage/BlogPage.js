import React from 'react';
import PostList from '../../components/PostList'; // Import the PostList component
import Layout from '../layout'; // Import a layout component if you have one

const BlogPage = () => {
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <PostList />
      </div>
    </Layout>
  );
};

export default BlogPage;
