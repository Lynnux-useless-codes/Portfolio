import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/sidebar.module.css";

export default function Sidebar() {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <aside className={`sidebar ${styles.sidebar} ${isActive ? styles.active : ''}`} data-sidebar>
            <div draggable="false" className={styles.sidebarinfo}>
                <figure className={styles.avatarbox}>
                    <img className={styles.image} src="/assets/images/Me.webp" alt="Lynnux" width="120" />
                </figure>
                <div className={styles.infocontent}>
                    <h1 className={styles.name} title="Lynnux">Lynnux</h1>
                    <p className={styles.title}>Developer / Artist</p>
                </div>
                <button className={styles.infomorebtn} data-sidebar-btn onClick={toggleSidebar}>
                    <span>Show Contacts</span>
                    <Image draggable="false" src="/assets/svg/Chevron-Down.svg" alt="Chevron Down Icon" width={24} height={24} />
                </button>
            </div>
            <div className={styles.sidebarinfomore}>
                <div className={`separator ${styles.separator}`}></div>
                <ul className={styles.contactslist}>
                    <li className={styles.contactitem}>
                        <div className={styles.iconbox}>
                            <Image draggable="false" src="/assets/svg/mail.svg" alt="Mail Icon" width={24} height={24} />
                        </div>
                        <div className={styles.contactinfo}>
                            <p className={styles.contacttitle}>Email</p>
                            <Link href="mailto:contact.lynnux@gmail.com" className={styles.contactlink}>contact.lynnux@gmail.com</Link>
                        </div>
                    </li>
                    <li className={styles.contactitem}>
                        <div className={styles.iconbox}>
                            <Image draggable="false" src="/assets/svg/Calendar.svg" alt="Calendar Icon" width={24} height={24} />
                        </div>
                        <div className={styles.contactinfo}>
                            <p className={styles.contacttitle}>Birthday</p>
                            <time dateTime="2004-05-17">May 17, 2004</time>
                        </div>
                    </li>
                    <li className={styles.contactitem}>
                        <div className={styles.iconbox}>
                            <Image draggable="false" src="/assets/svg/Location.svg" alt="Location Icon" width={24} height={24} />
                        </div>
                        <div className={styles.contactinfo}>
                            <p className={styles.contacttitle}>Location</p>
                            <address>Spain</address>
                        </div>
                    </li>
                </ul>
                <div className={`separator ${styles.separator}`}></div>
            </div>
        </aside>
    );
}
