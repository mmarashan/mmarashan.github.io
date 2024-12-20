import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export class PostsRepository {

    private postsDirectory: string

    constructor(postsDirectory: string) {
        this.postsDirectory = postsDirectory
    }

    getSortedPostsData() {
        const postsDirectory = path.join(process.cwd(), this.postsDirectory);
        // Get file names under /posts
        const fileNames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md"));
        const allPostsData = fileNames.map((fileName) => {
          // Remove ".md" from file name to get id
          const id = fileName.replace(/\.md$/, '');
      
          // Read markdown file as string
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
      
          // Use gray-matter to parse the post metadata section
          const matterResult = matter(fileContents);
          const data: { [key: string]: any } = matterResult.data
          // Combine the data with the id
          return {
            id: id,
            date: data['date'],
            title: data['title'],
            poster: data['poster'],
            tags: data['tags'],
            link: ""
          };
        });
        // Sort posts by date
        return allPostsData.sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      
      getAllPostIds() {
        const fileNames = fs.readdirSync(this.postsDirectory).filter((name) => name.endsWith(".md"));
        return fileNames.map((fileName) => {
          return {
            params: {
              id: fileName.replace(/\.md$/, ''),
            },
          };
        });
      }
      
      async getPostData(id) {
        const fullPath = path.join(this.postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
      
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
      
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();
      
        // Combine the data with the id and contentHtml
        return {
          id,
          contentHtml,
          ...matterResult.data,
        };
      }      
}