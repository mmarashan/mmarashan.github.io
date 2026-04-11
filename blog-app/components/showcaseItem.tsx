import Link from 'next/link';
import Date from './Date';
import styles from './layout.module.css';
import TagsChips from './chips';
import PostPreview from '../data/model/PostPreview'

export default function ShowcaseItem(post: PostPreview) {
    return (
        <div className={styles.showcaseCard} key={post.id}>
            <img
                className={styles.showcaseCardImage}
                src={post.poster}
                alt={post.title}
                loading="lazy"
            />
            <h3 className={styles.showcaseCardTitle}>
                <Link href={post.link}>{post.title}</Link>
            </h3>
            <div className={styles.showcaseCardMeta}>
                <Date dateString={post.date} />
                <TagsChips tags={post.tags} />
            </div>
        </div>
    );
}