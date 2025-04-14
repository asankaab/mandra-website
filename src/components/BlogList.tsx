'use client';

import styles from "./bloglist.module.scss"
import Button from "@/components/ui/Button";
import { useState, useTransition } from "react";
import { getBlogData } from "@/app/actions";
import { BlogEntryType } from "@/lib/types";
import BlogCard from "./BlogCard";

export default function BlogList({initialEntries}: { initialEntries: { items: BlogEntryType[], total: number, skip: number}}) {
    
    const initialLength = initialEntries.items.length;
    const total = initialEntries.total;

    const [blogData, setBlogData] = useState<BlogEntryType[]>(initialEntries.items);
    const [isPending, startTransition] = useTransition();
    const [skip, setSkip] = useState(initialLength);

    function loadMore() {
        if (total !== blogData.length) {
            startTransition(async () => {
                const data = await getBlogData(initialLength, skip);
                data.items.forEach((item: BlogEntryType) => {
                    setBlogData((prev) => [...prev, item]);
                })
                setSkip(skip + initialLength);
            });
        }
    }

    return (
        <>
            <div className={styles.cardContainer}>
                {blogData.map((blogEntry: BlogEntryType) => {
                    return (
                        <BlogCard entry={blogEntry} key={blogEntry.sys.id} />
                    )
                })}
                
            </div>
            {isPending ? 
            <svg className={styles.container} viewBox="0 0 35 35" height="35" width="35" >
                <rect className={styles.track} x="2.5" y="2.5" fill="none" strokeWidth="5px" width="32.5" height="32.5"/>
                <rect className={styles.car} x="2.5" y="2.5" fill="none" strokeWidth="5px" width="32.5" height="32.5" pathLength="100"/>
            </svg> : ''}
            <div className={styles.stats}>{blogData.length === total ? `${blogData.length} of ${total}` : ''}</div>
            <div className={styles.buttonWrapper}><Button disabled={isPending} onClick={loadMore} varient="outline">See More Projects</Button></div>
        </>
    )
}