import styles from './page.module.scss';
import MiniTitle from '@/components/ui/MiniTitle';
import { getBlogData } from '../actions';
import BlogList from '@/components/BlogList';

export default async function Page() {

    const initialEntries = await getBlogData(4, 0);
    
    return (
        <div className="wrapper">
            <div className="page-padding-block">
                <div className={styles.heading}>
                    <MiniTitle>Blog</MiniTitle>
                </div>
                <BlogList initialEntries={initialEntries}/>
            </div>
        </div>
    )
}