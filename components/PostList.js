import React from 'react';
import PostCard from './Postcard';
import styles from './PostCard.module.css';

const PostList = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;
