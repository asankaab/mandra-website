import styles from './page.module.scss';
import Heading1 from "@/components/ui/Heading1";
import { client } from "@/lib/client";
import { BlogEntrySkeleton } from "@/lib/types";
import ImageLoader from '@/components/ui/ImageLoader';
import React from 'react';
import RichText from '@/components/ui/RichText';
import Paragraph from '@/components/ui/Paragraph';
import BlogCard from '@/components/BlogCard';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const blogQuery = await client.getEntries<BlogEntrySkeleton>(
        { content_type: 'blogArticle', query: slug })

        const data = await JSON.parse(JSON.stringify(blogQuery));

    const article = await data.items[0];
    const authorId = await article.fields.author?.sys.id

    const relatedArticlesQuery = await client.getEntries<BlogEntrySkeleton>(
        { content_type: 'blogArticle', 'fields.author.sys.id': authorId, 'fields.slug[ne]': slug , limit: 4});

        const relatedArticles = await JSON.parse(JSON.stringify(relatedArticlesQuery));
    
    return (
            <>
                <div className={`wrapper ${styles.coverContainer}`}>
                    <div className={styles.cover}>
                        <ImageLoader src={article.fields.coverPhoto.fields.file.url} fill alt={article.fields.coverPhoto.fields.title}/>
                    </div>
                </div>
                <div className="wrapper">
                    <div className={`page-padding-block ${styles.page}`}>
                        <div className={styles.contentBox}>
                            <Heading1>{article.fields.title}</Heading1>
                            <RichText document={article.fields.content} />
                        </div>
                        <div className={styles.sideBar}>
                            {authorId && <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <ImageLoader radius='max' fit='thumb'
                                    src={article.fields.author.fields.avatar.fields.file.url}
                                    alt={article.fields.author.fields.avatar.fields.title}
                                    width={100} height={100} w={100}/>
                                </div>
                                <div className={styles.title}>
                                    <Paragraph bold>{article.fields.author.fields.name}</Paragraph>
                                    {article.fields.author.fields.role.map((item: string, index: number) => {
                                        return (
                                            <Paragraph key={index}>{item}</Paragraph>
                                        )
                                    })}
                                </div>
                                <Paragraph className={styles.bio}>{article.fields.author.fields.bio}</Paragraph>
                            </div>}
                            {relatedArticles && 
                            <div className={styles.relatedArticles}>
                                <Paragraph>Other posts by author</Paragraph>
                                {relatedArticles.items.map((post: BlogEntrySkeleton) => {
                                    return (
                                        <BlogCard entry={post} key={post.sys.id}/>
                                    )
                                })}
                            </div>}
                        </div>
                    </div>
                </div>
            </>
    )
}