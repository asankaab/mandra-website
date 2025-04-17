import React from 'react';
import styles from './footer.module.scss'
import { client } from '@/lib/client';
import { DynamicPageEntrySkeleton } from '@/lib/types';
import Link from 'next/link';
import { getContactPage, getHomepageData } from '@/app/actions';
import Icon from './ui/Icon';
import Banner from './Banner';

export default async function Footer() {
    
    const dynamicPagesQuery = await client.getEntries<DynamicPageEntrySkeleton>({
        content_type: 'dynamicPage', order: ['sys.createdAt']
    })
    
    const contact = await getContactPage();

    const homepageData = await getHomepageData();
    
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Specialties", href: "/styles" },
        { name: "Showcase", href: "/showcase" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" }
    ];    

    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles.container}>
                    <div className={styles.navBox}>
                            {menuItems.map((item, index) =>
                                <Link key={index} href={item.href} className={styles.link}>{item.name}</Link>
                            )}
                    </div>
                    <div className={styles.box1}>
                        {dynamicPagesQuery.items.slice(0,6).map((page) => {
                            return (
                                <Link className={styles.link} key={page.sys.id}
                                href={page.fields.slug}>{page.fields.title}</Link>
                            )
                        })}
                    </div>
                    <div className={styles.box2}>
                        {dynamicPagesQuery.items.slice(6,12).map((page) => {
                            return (
                                <Link className={styles.link} key={page.sys.id}
                                href={page.fields.slug}>{page.fields.title}</Link>
                            )
                        })}
                    </div>
                    <div className={styles.contactBox}>
                        <p>{contact.fields.address}</p>
                        <p className={styles.link}><a href={'mailto:'+ contact.fields.email}>{contact.fields.email}</a></p>
                        <p className={styles.link}><a href={'tel:'+ contact.fields.phone}>{contact.fields.phone}</a></p>
                        <div className={styles.socialContainer}>
                            <p className={styles.socialText}>Connect with us</p>
                            <div className="icon-container">
                            {homepageData.fields.social.map((link: string) => {
                                const name = link.split("/")[2].split(".")[0]
                                return <a className='icon-link' target="blank" title={name} href={link} key={link}><Icon name={name}/></a>
                            })}
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
            <Banner/>
        </footer>
    );
};