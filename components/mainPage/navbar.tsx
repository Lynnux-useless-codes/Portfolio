import styles from "@/styles/navbar.module.css";
import Link from "next/link";

interface NavbarProps {
    currentHash: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentHash }) => {
    // Determine which link should be active based on the currentHash
    const getActiveClass = (hash: string) => {
        return currentHash === hash ? styles.active : '';
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarlist}>
                <li className={styles.navbaritem}>
                    <Link href="/#about">
                        <button className={`${styles.navbarlink} ${getActiveClass('about')}`} data-nav-link>
                            About
                        </button>
                    </Link>
                </li>

                <li className={styles.navbaritem}>
                    <Link href="/#resume">
                        <button className={`${styles.navbarlink} ${getActiveClass('resume')}`} data-nav-link>
                            Resume
                        </button>
                    </Link>
                </li>

                <li className={styles.navbaritem}>
                    <Link href="/#portfolio">
                        <button className={`${styles.navbarlink} ${getActiveClass('portfolio')}`} data-nav-link>
                            Portfolio
                        </button>
                    </Link>
                </li>

                <li className={styles.navbaritem}>
                    <Link href="/#blog">
                        <button className={`${styles.navbarlink} ${getActiveClass('blog')}`} data-nav-link>
                            Blog
                        </button>
                    </Link>
                </li>

                <li className={styles.navbaritem}>
                    <Link href="/#contact">
                        <button className={`${styles.navbarlink} ${getActiveClass('contact')}`} data-nav-link>
                            Contact
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
