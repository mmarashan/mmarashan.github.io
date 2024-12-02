import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import TagsChips from '../components/chips';

export default function ShowcaseItem({ id, date, title, poster, tags, link }) {
    return <div className={utilStyles.horizontalContainer} key={id}>
        <img
            className={styles.showcaseCardImage}
            width={256} 
            src={poster}
            alt={title}
            loading="lazy"
          />
        <Link href={link}>{title}</Link>
        <br/>
        <small className={utilStyles.lightText}>
            <Date dateString={date} />
        </small>
        <div className={styles.showcaseCardTags}>
            <TagsChips tags={tags}/>
        </div>
  </div>
}