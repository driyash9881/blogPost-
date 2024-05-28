import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../components/Postcard';
import Layout from '../components/Layout';

const getPostMetadata = () => {
  const folder = 'content/posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => file.endsWith('.md'));

  // Get files data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${folder}${filename}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      summary: matterResult.data.summary,
      slug: filename.replace('.md', '')
    };
  });

  return posts;
};

export default function Home() {
  const posts = getPostMetadata();

  return (
    <Layout>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </Layout>
  );
}
