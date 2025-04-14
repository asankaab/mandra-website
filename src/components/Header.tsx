import styles from "./header.module.scss"
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Icon from "./ui/Icon";
import { getContactPage, getHomepageData } from "@/app/actions";
import ImageLoader from "./ui/ImageLoader";

export default async function Header() {

    const homepageData = await getHomepageData();
    const contact = await getContactPage();
    
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
                    <MobileMenu phone={contact.fields.phone} logoPath={homepageData.fields.brandLogo.fields} menuItems={menuItems}/>
                </div>
                <div className={styles.navWrapper}>
                    <div className={styles.desktopNav}>
                        <Link href="/" >
                            <ImageLoader src={homepageData.fields.brandLogo.fields.file.url} unoptimize
                            alt={homepageData.fields.brandLogo.fields.title} width={38} height={38} />
                        </Link>
                        <nav>
                            <ul className={styles.desktopMenuList}>
                                {menuItems.map((item, index) =>
                                    <li key={index}><Link href={item.href} className={styles.desktopMenuItem}>{item.name}</Link></li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <a className={styles.tel} href={"tel:" + contact.fields.phone}>
                        <Icon size={16} name="phone"/><span>{contact.fields.phone}</span>
                    </a>
                </div>
            </div>
        </header>
    )
}