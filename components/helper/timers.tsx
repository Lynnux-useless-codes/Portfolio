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
  { title: "Overwatch Next Season Timer", category: "Webpage", url: "./timers/overwatch", image: "/assets/images/overwatch_timer.png", blurImage: "/assets/images/Placeholder.jpg" },
  { title: "Timetraveler Timer", category: "Webpage", url: "./timers/timetraveler", image: "/assets/images/clock.png", blurImage: "/assets/images/Placeholder.jpg" },
  { title: "TwitchCon Timer", category: "Webpage", url: "./timers/twitchcon", image: "/assets/images/twitchcon.png", blurImage: "/assets/images/Placeholder.jpg" },
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
        <h2 className="h2 article-title">Timers</h2>
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
                        width={600}
                        height={400}
                        placeholder="blur"
                        blurDataURL={project.blurImage}
                        onLoad={(event) => {
                          const img = event.currentTarget;
                          img.classList.remove('blur');
                          img.classList.add('loaded');
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