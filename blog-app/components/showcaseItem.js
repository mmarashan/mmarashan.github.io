import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import TagsChips from '../components/chips';

export default function ShowcaseItem({ id, date, title, poster, tags, link }) {
    return <div className={styles.showcaseCard} key={id}>
        <img
            className={styles.showcaseCardImage}
            src={poster}
            alt={title}
            loading="lazy"
          />
        <div className={styles.showcaseCardData}>
            <Link href={link}>{title}</Link>
            <br/>
            <Date className={utilStyles.lightText} dateString={date} />
            <br/>
            <div className={styles.showcaseCardTags}>
                <TagsChips className={styles.showcaseCardTags} tags={tags}/>
            </div>
        </div>
  </div>
}