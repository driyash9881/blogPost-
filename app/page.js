import React from 'react'; // Importing React
import fs from 'fs'; // Importing the file system module to read files
import matter from 'gray-matter'; // Importing gray-matter to parse front matter from Markdown files
import PostCard from '../components/Postcard'; // Importing the PostCard component to display individual posts
import Layout from '../components/Layout'; // Importing the Layout component for consistent page structure

// Function to get metadata of all posts
const getPostMetadata = () => {
  const folder = 'content/posts/'; // Directory where the posts are stored
  const files = fs.readdirSync(folder); // Reading all the files in the directory
  const markdownPosts = files.filter(file => file.endsWith('.md')); // Filtering to get only Markdown files

  // Extracting metadata from each Markdown file
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${folder}${filename}`, 'utf8'); // Reading the file content synchronously
    const matterResult = matter(fileContents); // Parsing the content to extract front matter and content
    return {
      title: matterResult.data.title, // Extracting title from front matter
      date: matterResult.data.date, // Extracting date from front matter
      author: matterResult.data.author, // Extracting author from front matter
      summary: matterResult.data.summary, // Extracting summary from front matter
      slug: filename.replace('.md', '') // Removing the .md extension to get the slug
    };
  });

  return posts; // Returning the array of posts with their metadata
};

// React component to render the home page
export default function Home() {
  const posts = getPostMetadata(); // Getting the metadata of all posts

  return (
    <Layout> {/* Using the custom Layout component */}
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} /> // Rendering a PostCard for each post
      ))}
    </Layout>
  );
}
