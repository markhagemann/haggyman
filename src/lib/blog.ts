import matter from 'gray-matter';
import { parseISO, format } from 'date-fns';
import fs from 'fs';
import { join } from 'path';
import { readingTime } from './utils';
import { remark } from 'remark';
import { DateTime } from 'luxon';

const postsDirectory = join(process.cwd(), 'src', 'content', 'blog');

export interface BlogPost {
  content: string;
  excerpt: string;
  fields: {
    readingTime: string;
  };
  frontmatter: {
    date: string;
    description: string;
    tags: string[];
    title: string;
  };
  slug: string;
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const date = format(parseISO(data.date), 'MMMM dd, yyyy');

  const excerpt = remark()
    .processSync(content.slice(0, 120) + '...' || '')
    .toString();

  return {
    content,
    excerpt,
    fields: { readingTime: `${readingTime(content)} min read` },
    frontmatter: {
      date,
      description: data.description,
      tags: data.tags,
      title: data.title,
    },
    slug: realSlug,
  };
}

export function getAllBlogPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map(slug => getBlogPostBySlug(slug));

  return posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'MMMM dd, yyyy');
    const afterDate = DateTime.fromFormat(b.frontmatter.date, 'MMMM dd, yyyy');
    return afterDate - beforeDate;
  });
}
