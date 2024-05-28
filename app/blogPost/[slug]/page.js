import Markdown from 'markdown-to-jsx';
import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import Layout from '@/components/Layout';

const getPostContent = (slug) => {
  const folder = 'content/posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export async function generateStaticParams() {
  const folder = 'content/posts/';
  const files = fs.readdirSync(folder);
  const paths = files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
  return paths;
}

export default function PostPage({ params }) {
  const { slug } = params;
  const post = getPostContent(slug);

  return (
    <Layout>
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <p>{post.data.author}</p>
      <Markdown>{post.content}</Markdown>
    </Layout>
  );
}
