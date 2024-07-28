import { useEffect, useState } from 'react';
import styles from "@/styles/blog.module.css"

interface BlogPost {
    title: string;
    category: string;
    url: string;
    imageUrl: string;
    date: string;
    description: string;
}

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        fetch('/data/blogPosts.json')
            .then((response) => response.json())
            .then((data) => setBlogPosts(data))
            .catch((error) => console.error('Error fetching blog posts:', error));
    }, []);

    return (
        <article className="blog active" data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className={styles.blogposts}>
                <ul className={styles.blogpostslist}>
                    {blogPosts.map((post) => (
                        <li key={post.url} className={styles.blogpostitem}>
                            <a className={styles.link} href={post.url}>
                                <figure className={styles.blogbannerbox}>
                                    <img className={styles.image} src={post.imageUrl} alt={post.title} loading="lazy" />
                                </figure>
                                <div className={styles.blogcontent}>
                                    <div className={styles.blogmeta}>
                                        <p className={styles.blogcategory}>{post.category}</p>
                                        <span className={styles.dot}></span>
                                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                                    </div>
                                    <h3 className={`h3 ${styles.blogitemtitle}`}>{post.title}</h3>
                                    <p className={styles.blogtext}>{post.description}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
