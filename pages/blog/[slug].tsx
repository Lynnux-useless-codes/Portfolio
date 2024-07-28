import fs from 'fs';
import path from 'path';
import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styles from '@/styles/blogposts.module.css';

interface BlogPostProps {
    source: MDXRemoteSerializeResult;
    frontMatter: {
        title: string;
        date: string;
    };
}

const BlogPost = ({ source, frontMatter }: BlogPostProps) => {
    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar currentHash={"blog"}/>
                <article className={`blogpost blog active ${styles.blogPost}`}>
                    <header>
                        <h1>{frontMatter.title}</h1>
                        <time dateTime={frontMatter.date}>{new Date(frontMatter.date).toLocaleDateString()}</time>
                    </header>
                    <section>
                        <MDXRemote {...source} />
                    </section>
                </article>
            </div>
        </main>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), 'components/blog'));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params!;
    const filePath = path.join(process.cwd(), 'components/blog', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content);

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export default BlogPost;
