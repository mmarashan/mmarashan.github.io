import ShowcaseItem from './ShowcaseItem';
import utilStyles from '../styles/utils.module.css';
import PostPreview from '../data/model/PostPreview'

type Props = {
  posts: PostPreview[];
  postLinkPrefix: string;
};

export default function PostsShowcase({ posts, postLinkPrefix }: Props) {
  return (
    <ul className={utilStyles.list}>
      {
        posts.map((post: PostPreview) => (
          <li className={utilStyles.listItem} key = {post.id}>
            <ShowcaseItem id = {post.id} date = {post.date} title = {post.title} poster = {post.poster} tags = {post.tags} link={`/${postLinkPrefix}/${post.id}`}/>
          </li>
        ))
      }
    </ul>
  );
}