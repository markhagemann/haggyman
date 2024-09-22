import matter from 'gray-matter';
import { parseISO, format } from 'date-fns';
import fs from 'fs';
import { join } from 'path';
import { readingTime } from './utils';
import { remark } from 'remark';
import { DateTime } from 'luxon';

const postsDirectory = join(process.cwd(), 'src', 'content', 'portfolio');

export interface PortfolioPost {
  content: string;
  excerpt: string;
  fields: {
    readingTime: string;
  };
  frontmatter: {
    company: 'Freelance' | 'LT Network' | 'Trevipay';
    date: string;
    description: string;
    externalLink: string;
    postImage: string;
    tags: string[];
    title: string;
  };
  slug: string;
}

export function getPortfolioPostBySlug(slug: string): PortfolioPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const date = format(parseISO(data.date), 'MMMM dd, yyyy');

  const excerpt = remark()
    .processSync(content.slice(0, 180) + '...' || '')
    .toString();

  return {
    content,
    excerpt,
    fields: { readingTime: `${readingTime(content)} min read` },
    frontmatter: {
      company: data.company,
      date,
      description: data.description,
      externalLink: data.externalLink,
      postImage: data.postImage,
      tags: data.tags,
      title: data.title,
    },
    slug: realSlug,
  };
}

export function getAllPortfolioPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map(slug => getPortfolioPostBySlug(slug));

  return posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'MMMM dd, yyyy');
    const afterDate = DateTime.fromFormat(b.frontmatter.date, 'MMMM dd, yyyy');
    return afterDate - beforeDate;
  });
}
