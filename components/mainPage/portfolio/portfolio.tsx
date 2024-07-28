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
    { title: "Akira", category: "applications", url: "https://discord.com/application-directory/738057910923296839", image: "https://cdn.lynnux.xyz/images/Akira-App-Directory.png", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "Akira Website", category: "web development", url: "https://akira.lynnux.xyz", image: "https://cdn.lynnux.xyz/images/AkiraSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "Emote's", category: "art designs", url: "https://lynnux.xyz/emotes", image: "https://cdn.lynnux.xyz/images/EmotesSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "OverwatchAimbot.com", category: "web development", url: "https://overwatchaimbot.com", image: "https://cdn.lynnux.xyz/images/OWAimbotSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "Discord ColoredText Generator", category: "web development", url: "./helper/discord/coloredtext/", image: "https://cdn.lynnux.xyz/images/ColorTextSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "Discord Timestamp Generator", category: "web development", url: "./helper/discord/timestamp/", image: "https://cdn.lynnux.xyz/images/timestampSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "Discord Webhook Sender", category: "web development", url: "./helper/discord/webhook/", image: "https://cdn.lynnux.xyz/images/webhookSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "frames.lynnux.xyz", category: "web development", url: "https://frames.lynnux.xyz", image: "https://cdn.lynnux.xyz/images/FramesSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "cloud.lynnux.xyz", category: "web development", url: "https://cloud.lynnux.xyz", image: "https://cdn.lynnux.xyz/images/cloudSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "liaallure.art", category: "web development", url: "https://liaallure.art/", image: "https://cdn.lynnux.xyz/images/liaallure-art.png", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "cdn.lynnux.xyz", category: "web development", url: "https://cdn.lynnux.xyz", image: "https://cdn.lynnux.xyz/images/cdnSitePreview.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "Crossworld Connections", category: "game development", url: "https://store.steampowered.com/developer/Lynnux", image: "https://cdn.lynnux.xyz/images/CrossworldConnections.webp", blurImage: "/assets/images/Placeholder.jpg" },
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
        // Log to ensure state consistency
        console.log(`Initial selectedCategory: ${selectedCategory}`);
    }, [selectedCategory]);

    const handleSelectItemClick = (category: string) => {
        console.log(`Selected category: ${category}`); // Debugging output
        setSelectedCategory(category.toLowerCase());
    };

    const filteredProjects = projects.filter(project =>
        selectedCategory === 'all' || project.category.toLowerCase() === selectedCategory
    );

    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className={styles.projects}>
                <ul className={styles.filterlist}>
                    {['All', 'Art designs', 'Applications', 'Web Development', 'Game Development'].map(category => (
                        <li key={category} className={styles.filteritem}>
                            <button
                                className={selectedCategory === category.toLowerCase() ? 'active' : ''}
                                onClick={() => handleSelectItemClick(category)}
                                data-filter-btn
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
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
