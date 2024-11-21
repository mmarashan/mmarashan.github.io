import PostsShowcase from '../components/showcase';
import { strings } from '../public/const';
import { PostsRepository } from '../data/postsRepository'

export default function BlogShowcase({ allPostsData }) {
  return (
    <PostsShowcase title={strings.blogTitle} posts={allPostsData} postLinkPrefix = "blog"/>
  );
}

export async function getStaticProps() {
  let postsRepository = new PostsRepository('../blog.pages/blog')
  let allPostsData = postsRepository.getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}
