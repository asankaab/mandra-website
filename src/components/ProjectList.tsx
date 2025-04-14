'use client';

import styles from "./projectlist.module.scss"
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/ui/Button";
import { useState, useTransition } from "react";
import { getShowcaseData } from "@/app/actions";
import { ProjectEntryType } from "@/lib/types";

export default function ProjectList({initialEntries}: { initialEntries: { items: ProjectEntryType[], total: number, skip: number }}) {
    
    const initialLength = initialEntries.items.length;
    const total = initialEntries.total;

    const [showcaseData, setShocaseData] = useState<ProjectEntryType[]>(initialEntries.items);
    const [isPending, startTransition] = useTransition();
    const [skip, setSkip] = useState(initialLength);

    function loadMore() {
        if (total !== showcaseData.length) {
            startTransition(async () => {
                const data = await getShowcaseData(initialLength, skip);
                data.items.forEach((item: ProjectEntryType) => {
                    setShocaseData((prev) => [...prev, item]);
                })
                setSkip(skip + initialLength);
            });
        }
    }

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.flex}>
                    {showcaseData.map((projectEntry: ProjectEntryType) => {
                        return (
                            <ProjectCard entry={projectEntry} key={projectEntry.sys.id} />
                        )
                    })}
                    
                </div>
                <div className={styles.spinner}>
                    {isPending ?
                        <svg className={styles.container} viewBox="0 0 35 35" height="35" width="35" >
                            <rect className={styles.track} x="2.5" y="2.5" fill="none" strokeWidth="5px" width="32.5" height="32.5"/>
                            <rect className={styles.car} x="2.5" y="2.5" fill="none" strokeWidth="5px" width="32.5" height="32.5" pathLength="100"/>
                        </svg> : ''}
                </div>
                <div className={styles.stats}>{showcaseData.length === total ? `${showcaseData.length} of ${total}` : ''}</div>
                <div className={styles.buttonWrapper}><Button disabled={isPending} onClick={loadMore} varient="outline">See More Projects</Button></div>
            </div>
        </>
    )
}