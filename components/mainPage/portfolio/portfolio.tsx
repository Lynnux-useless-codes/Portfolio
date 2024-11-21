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
    { title: "[Bash] Rule34 Scrapper", category: "Open-Source Project", url: "https://github.com/Lynnux-useless-codes/rule34-Scraper", image: "https://opengraph.githubassets.com/17ad6f1da98adf27ee03a7f43246b0b8fe66bbec3bc7e5cdb40c84bb708c9cff/Lynnux-useless-codes/rule34-Scraper", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "[Chibi] Emote's", category: "Art", url: "https://lynnux.xyz/emotes", image: "/assets/images/Mercy.webp", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "[ForgeScript] Akira", category: "Applications", url: "https://discord.com/application-directory/738057910923296839", image: "/assets/images/akira.png", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "[HTML] OverwatchAimbot.com", category: "Websites", url: "https://overwatchaimbot.com", image: "/assets/images/overwatchaimbot.png", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "[HTML] Random Sites", category: 'Open-Source Project', url: "https://github.com/Dark-LYNN/Sites", image: "https://opengraph.githubassets.com/8b08c62f295664920d2a071113c3af99adedbffbb3a316307b0d5712b9ef411a/Dark-LYNN/Sites", blurImage: '/assets/images/Placeholder.jpg'},
    { title: "[Javascript] Twitch-Bot", category: 'Open-Source Project', url: "https://github.com/LynnuxDev/LynnuxBot", image: "https://opengraph.githubassets.com/9ab12ea404eed3dd3a710dd9bb29bc8c8f12168410225d30cc416f20ea4829cd/LynnuxDev/LynnuxBot", blurImage: '/assets/images/Placeholder.jpg'},
    { title: "[Next.js] Akira Website", category: "Websites", url: "https://akira.lynnux.xyz", image: "/assets/images/akirasite.png", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "[Next.js] PornCity.monster", category: 'Open-Source Project', url: "https://github.com/Dark-LYNN/Porncity.monster", image: "https://opengraph.githubassets.com/2ca92e0575eecc98c797f3e309124b92c8d1d9aa5e5c694cb2d9dab58ae3a54a/Dark-LYNN/Porncity.monster", blurImage: '/assets/images/Placeholder.jpg'},
    { title: "[Next.js] Tracker", category: 'Websites', url: "#", image: "/assets/images/Project.png", blurImage: '/assets/images/Placeholder.jpg'},
    { title: "[Next.js] OnceHuman Map", category: 'Open-Source Project', url: "https://gitgud.io/Lynnux/oncehuman-helper", image: "/assets/images/OnceHuman.png", blurImage: '/assets/images/Placeholder.jpg'},
    { title: "[Python] Watermark Tool", category: "Open-Source Project", url: "https://github.com/Lynnux-useless-codes/watermark_tool", image: "https://opengraph.githubassets.com/52dfd3e30c55c08a648f1162be336512873ccfc3cfced380337c400c0f35d579/Lynnux-useless-codes/watermark_tool", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "[Ren'py] Crossworld Connections", category: "Games", url: "https://store.steampowered.com/developer/Lynnux", image: "/assets/images/crossworld connections.png", blurImage: "/assets/images/Placeholder.jpg" },
    { title: "[TypeScript] ForgeApi", category: 'Open-Source Project', url: "https://github.com/tryforge/ForgeAPI", image: "https://opengraph.githubassets.com/e196e5eac7d70088ac0f8148e3d7b7b827e4c2318487876c455fb524f766ce14/tryforge/ForgeAPI", blurImage: '/assets/images/Placeholder.jpg'},
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
                    {['All', 'Art', 'Applications', 'Websites', 'Games', 'Open-Source Project'].map(category => (
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
