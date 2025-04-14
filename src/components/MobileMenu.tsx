'use client'
import Image from "next/image";
import Link from "next/link";
import { Collapsible } from "radix-ui";
import styles from "./header.module.scss";
import animation from "./mobilemenu.module.css";
import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import ImageLoader from "./ui/ImageLoader";

export default function MobileMenu({ menuItems, logoPath, phone }
    : { menuItems: Array<{ name: string; href: string }>, logoPath: { file: {url: string}, title: string}, phone: string }) {

    const [state, setState] = useState("none");

    function onStateChange(open: boolean) {
        if (open) {
            setState("open");
        } else {
            setState("close")
        }
    }

    useEffect(() => {

        function setScrollAction() {
            const header = document.querySelector('header');
            if (window.scrollY > 40) {
                header?.setAttribute('data-scroll','true')
            } else if (window.scrollY < 4) {
                header?.removeAttribute('data-scroll')
            }
        }
        
        window.addEventListener('scroll', setScrollAction);
        return() => window.removeEventListener('scroll', setScrollAction);
        
    },[])

    return (
        <Collapsible.Root open={state === 'open' ? true : false} onOpenChange={(open) => onStateChange(open)} className={styles.collapsibleRoot}>
            <div className={styles.menuBar}>
                <Link href="/" ><ImageLoader src={logoPath.file.url} unoptimize alt={logoPath.title} width={38} height={38} /></Link>
                <Collapsible.Trigger className={styles.menuButton}>
                    <svg className={animation[state]} xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24">
                        <rect className={animation.bar1} y="11" width="30" height="2" rx=".3" ry=".3"/>
                        <rect className={animation.bar2} y="11" width="30" height="2" rx=".3" ry=".3"/>
                        <rect className={animation.bar3} y="11" width="30" height="2" rx=".3" ry=".3"/>
                        <rect className={animation.bar4} y="11" width="30" height="2" rx=".3" ry=".3"/>
                    </svg>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content className={styles.menuContent}>
                <ul className={styles.menuList}>
                    {menuItems.map((item, index) =>
                        <li onClick={()=> setState('close')} className={styles.li} key={index}><Link href={item.href} className={styles.menuItem}>{item.name}</Link></li>
                    )}
                    <li className={styles.li}>
                        <a href={"tel:" + phone} className={styles.telMob}>
                            <Icon size={16} name="phone"/><span>{phone}</span>
                        </a>
                    </li>
                </ul>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}