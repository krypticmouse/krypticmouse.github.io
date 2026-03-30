import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import glob from 'fast-glob';

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');

export function getAllPosts() {
  const files = glob.sync('*.md', { cwd: POSTS_DIR });

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');
      const { data, content } = matter(raw);

      if (data.draft) return null;

      const wordCount = content.split(/\s+/).filter(Boolean).length;
      const readingTime = Math.max(1, Math.round(wordCount / 250));

      return {
        slug,
        title: data.title || slug,
        date: data.date ? new Date(data.date).toISOString() : null,
        desc: data.desc || '',
        tags: data.tags || [],
        image: data.image || null,
        readingTime,
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export function getPostBySlug(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 250));

  return {
    frontmatter: {
      title: data.title || slug,
      subtitle: data.subtitle || '',
      date: data.date ? new Date(data.date).toISOString() : null,
      desc: data.desc || '',
      tags: data.tags || [],
      image: data.image || null,
      readingTime,
      wordCount,
    },
    content,
  };
}
