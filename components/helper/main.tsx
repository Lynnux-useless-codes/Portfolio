import { useState, useEffect } from 'react';
import styles from "@/styles/portfolio.module.css";
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    title: string;
    category: string;
    url: string;
    image: string;
    blurImage: string;
}

const projects: Project[] = [
    { title: "No Hello", category: "Webpage", url: "./helper/nohello", image: "/assets/images/nohello.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "No Image Of Code", category: "Webpage", url: "./helper/imageofcode", image: "/assets/images/codeImage2.webp", blurImage: "/assets/images/Placeholder.jpg" },
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
        console.log(`Initial selectedCategory: ${selectedCategory}`);
    }, [selectedCategory]);


    const filteredProjects = projects.filter(project =>
        selectedCategory === 'all' || project.category.toLowerCase() === selectedCategory
    );

    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Helpers</h2>
            </header>
            <section className={styles.projects}>
                <ul className={`${styles.projectlist} project-list`}>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <li key={project.title} className={`project-item ${styles.projectitem}`} data-filter-item data-category={project.category.toLowerCase()}>
                                <Link href={project.url}>
                                    <figure className={`project-img ${styles.projectimg}`}>
                                        <div className={`project-item-icon-box ${styles.projectitemiconbox}`}>
                                            <Image src={"/assets/svg/eye.svg"} draggable="false" alt='' width={15} height={15}/>
                                        </div>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            layout="responsive"
                                            width={600} // Adjust based on your design
                                            height={400} // Adjust based on your design
                                            placeholder="blur"
                                            blurDataURL={project.blurImage}
                                            onLoadingComplete={(img) => {
                                                img.classList.remove('blur'); // Remove blur class once image has loaded
                                                img.classList.add('loaded'); // Add loaded class to handle transitions
                                            }}
                                        />
                                    </figure>
                                    <h3 className={`project-title ${styles.projecttitle}`}>{project.title}</h3>
                                    <p className={`project-category ${styles.projectcategory}`}>{project.category}</p>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className={`no-projects ${styles.noprojects}`}>No projects available for this category.</li>
                    )}
                </ul>
            </section>
        </article>
    );
}
