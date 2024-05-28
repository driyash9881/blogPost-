import fs from 'fs'; // Importing the file system module to read files
import matter from 'gray-matter'; // Importing gray-matter to parse front matter from Markdown files

// Function to get metadata of all posts from a specified base path
export function getPostMetadata(basePath) {
    const folder = basePath + '/'; // Defining the folder path where the posts are stored
    const files = fs.readdirSync(folder); // Reading all the files in the directory
    const markdownPosts = files.filter(file => file.endsWith('.md')); // Filtering to get only Markdown files

    // Extracting metadata from each Markdown file
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8'); // Reading the file content synchronously
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
}
