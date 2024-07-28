import styles from "@/styles/clients.module.css"
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className={styles.clients}>
            <h3 className={`h3 ${styles.clientstitle}`}>Known by</h3>
            <ul className={`${styles.clientslist} has-scrollbar`}>
                <li className={styles.clientsitem}>
                    <Link href="https://twitch.tv/its_toko/">
                        <Image className={styles.image} id="responsive-image" src="/assets/images/Toko.webp" alt="Its_Toko Twitch" width={212} height={100} />
                    </Link>
                </li>
                <li className={styles.clientsitem}>
                    <Link href="https://www.twitch.tv/myceliaisoffline">
                        <Image className={styles.image} id="responsive-image" src="/assets/images/MyceliaBanner.webp" alt="MyceliaIsOffline Twitch" width={212} height={100} />
                    </Link>
                </li>
                <li className={styles.clientsitem}>
                    <Link href="https://discord.gg/jtky4tvV6F">
                        <Image className={styles.image} id="responsive-image" src="/assets/images/MercyMains.webp" alt="Mercy-Mains Discord Server" width={212} height={100} />
                    </Link>
                </li>
                <li className={styles.clientsitem}>
                    <Link href="https://discord.gg/kiriko">
                        <Image className={styles.image} id="responsive-image" src="/assets/images/KirikoMains.webp" alt="Kiriko-Mains Discord Server" width={212} height={100} />
                    </Link>
                </li>
                <li className={styles.clientsitem}>
                    <Link href="https://discord.gg/xXmB7fF">
                        <Image className={styles.image} id="responsive-image" src="/assets/images/BrigitteMains.webp" alt="Brigitte-Mains Discord Server" width={212} height={100}/>
                    </Link>
                </li>
            </ul>
        </section>
    );
}
