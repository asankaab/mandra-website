import Heading1 from '@/components/ui/Heading1';
import styles from './page.module.scss';
import MiniTitle from '@/components/ui/MiniTitle';
import { getShowcaseData } from '../actions';
import ProjectList from '@/components/ProjectList';

export default async function Page() {

    const initialEntries = await getShowcaseData(4, 0);
    
    return (
        <div className="wrapper">
            <div className="page-padding-block">
                <div className={styles.heading}>
                    <MiniTitle>Showcase</MiniTitle>
                    <Heading1>Beautifully Capturing Human Memories.</Heading1>
                </div>
                <ProjectList initialEntries={initialEntries}/>
            </div>
        </div>
    )
}