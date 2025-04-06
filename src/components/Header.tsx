import Image from "next/image";
import styles from "./header.module.scss"
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Icon from "./ui/Icon";

export default async function Header() {

    const menuItems = [
        { name: "Showcase", href: "/showcase" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" }
    ];

    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.mobileNav}>
                    <MobileMenu menuItems={menuItems}/>
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
                    <a className={styles.tel} href="tel:089 888 777">
                        <Icon name="phone"/><span>089 888 777</span>
                    </a>
                </div>
            </div>
        </header>
    )
}