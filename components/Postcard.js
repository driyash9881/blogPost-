import Link from 'next/link';
import React from 'react';
import styles from './PostCard.module.css';

const Postcard = (props) => {
  const { post } = props;
  return (
    <div className={styles.postCard}>
      <Link href={`/blogPost/${post.slug}`} >
          <h3>{post.title}</h3>
          <p>{post.date}</p>
          <h3>{post.author}</h3>
          <p>{post.summary}</p>
      
      </Link>
    </div>
  );
};

export default Postcard;
