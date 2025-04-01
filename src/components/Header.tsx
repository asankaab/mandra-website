import Image from "next/image";
import styles from "./header.module.scss"
import { Collapsible } from "radix-ui";
import Link from "next/link";

export default function Header() {

    const menuItems = [
        { name: "Showcase", href: "showcase" },
        { name: "About", href: "about" },
        { name: "Contact", href: "contact" },
        { name: "Blog", href: "blog" }
    ];

    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.mobileNav}>
                    <Collapsible.Root className={styles.collapsibleRoot}>
                        <div className={styles.menuBar}>
                            <Link href="/" ><Image src={"/logo.svg"} alt="Logo" width={38} height={38} /></Link>
                            <Collapsible.Trigger className={styles.menuButton}>
                                <Image src={"/menu-icon.svg"} alt="Menu" width={30} height={30} className="open-icon" />
                                <Image src={"/close-icon.svg"} alt="Menu" width={30} height={30} className="close-icon" />
                            </Collapsible.Trigger>
                        </div>
                        <Collapsible.Content className={styles.menuContent}>
                            <ul className={styles.menuList}>
                                {menuItems.map((item, index) =>
                                    <li className={styles.li} key={index}><Link href={item.href} className={styles.menuItem}>{item.name}</Link></li>
                                )}
                            </ul>
                        </Collapsible.Content>
                    </Collapsible.Root>
                </div>
                <div className={styles.navWrapper}>
                    <div className={styles.desktopNav}>
                        <Link href="/" ><Image src={"/logo.svg"} alt="Logo" width={38} height={38} /></Link>
                        <nav>
                            <ul className={styles.desktopMenuList}>
                                {menuItems.map((item, index) =>
                                    <li key={index}><Link href={item.href} className={styles.desktopMenuItem}>{item.name}</Link></li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <span className={styles.tel}><a href="tel:089 888 777">089 888 777</a></span>
                </div>
            </div>
        </header>
    )
}