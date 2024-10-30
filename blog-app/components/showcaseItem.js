import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import TagsChips from '../components/chips';

export default function ShowcaseItem({ id, date, title, poster, tags }) {
    return <li className={utilStyles.listItem} key={id}>
        <Image
            className={styles.showcaseCardImage}
            priority
            height={108}
            width={108}
            src={poster}/>
        <Link href={`/posts/${id}`}>{title}</Link>
        <br/>
        <small className={utilStyles.lightText}>
            <Date dateString={date} />
        </small>
        <div className={styles.showcaseCardTags}>
            <TagsChips tags={tags}/>
        </div>
  </li>
}