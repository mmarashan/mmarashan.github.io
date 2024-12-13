import Link from 'next/link';
import Date from './Date';
import styles from './layout.module.css';
import TagsChips from './chips';
import PostPreview from '../data/model/PostPreview'

export default function ShowcaseItem(post: PostPreview) {
    return <div className={styles.showcaseCard} key={post.id}>
        <img
            className={styles.showcaseCardImage}
            src={post.poster}
            alt={post.title}
            loading="lazy"
          />
        <div className={styles.showcaseCardData}>
            <Link href={post.link}>{post.title}</Link>
            <br/>
            <Date dateString={post.date} />
            <br/>
            <div className={styles.showcaseCardTags}>
                <TagsChips tags={post.tags}/>
            </div>
        </div>
  </div>
}