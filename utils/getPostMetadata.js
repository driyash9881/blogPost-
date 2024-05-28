import fs from 'fs';
import matter from 'gray-matter';

export function getPostMetadata(basePath) {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith('.md'));

    // Get files data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
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
}
