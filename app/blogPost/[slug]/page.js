import Markdown from 'markdown-to-jsx'; // Importing Markdown-to-JSX for rendering Markdown content as JSX
import fs from 'fs'; // Importing the file system module to read files
import matter from 'gray-matter'; // Importing gray-matter to parse front matter from Markdown files
import React from 'react'; // Importing React
import Layout from '@/components/Layout'; // Importing a custom Layout component

// Function to get the content of a post based on the slug
const getPostContent = (slug) => {
  const folder = 'content/posts/'; // Directory where the posts are stored
  const file = `${folder}${slug}.md`; // Constructing the file path using the slug
  const content = fs.readFileSync(file, 'utf8'); // Reading the file content synchronously
  const matterResult = matter(content); // Parsing the content to extract front matter and content
  return matterResult; // Returning the parsed content
};

// Function to generate static parameters for the dynamic routes
export async function generateStaticParams() {
  const folder = 'content/posts/'; // Directory where the posts are stored
  const files = fs.readdirSync(folder); // Reading all the files in the directory
  const paths = files.map((file) => ({
    slug: file.replace('.md', ''), // Removing the .md extension to get the slug
  }));
  return paths; // Returning an array of slugs
}

// React component to render the post page
export default function PostPage({ params }) {
  const { slug } = params; // Extracting the slug from the parameters
  const post = getPostContent(slug); // Getting the post content using the slug

  return (
    <Layout> {/* Using the custom Layout component */}
      <h1>{post.data.title}</h1> {/* Rendering the title from front matter */}
      <p>{post.data.date}</p> {/* Rendering the date from front matter */}
      <p>{post.data.author}</p> {/* Rendering the author from front matter */}
      <Markdown>{post.content}</Markdown> {/* Rendering the Markdown content */}
    </Layout>
  );
}
