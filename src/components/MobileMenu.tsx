'use client'
import Image from "next/image";
import Link from "next/link";
import { Collapsible } from "radix-ui";
import styles from "./header.module.scss"
import { useState } from "react";

export default function MobileMenu({ menuItems }: { menuItems: Array<{ name: string; href: string }> }) {

    const [state, setState] = useState(false);

    return (
        <Collapsible.Root onOpenChange={() => setState(!state)} className={styles.collapsibleRoot}>
            <div className={styles.menuBar}>
                <Link href="/" ><Image src={"/logo.svg"} alt="Logo" width={38} height={38} /></Link>
                <Collapsible.Trigger className={styles.menuButton}>
                    <Image src={"/menu-icon.svg"} alt="Menu" width={30} height={30} className={state ? styles.hide : ""} />
                    <Image src={"/close-icon.svg"} alt="Menu" width={30} height={30} className={!state ? styles.hide : ""} />
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content className={styles.menuContent}>
                <ul className={styles.menuList}>
                    {menuItems.map((item, index) =>
                        <li className={styles.li} key={index}><Link href={item.href} className={styles.menuItem}>{item.name}</Link></li>
                    )}
                    <li className={styles.li}>
                        <a href="tel:089 888 777" className={styles.telMob}>
                            <Image src="./icons/phone-icon.svg" style={{display: "inline-block"}} width={20} height={20} alt="telephone"/>
                            <span>089 888 777</span>
                        </a>
                    </li>
                </ul>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}