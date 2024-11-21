import PostsShowcase from '../components/showcase';
import { strings } from '../public/const';
import { PostsRepository } from '../data/postsRepository'

export default function PortfolioShowcase({ allPostsData }) {
  return (
    <PostsShowcase title={strings.portfolioTitle} posts={allPostsData} postLinkPrefix = "portfolio"/>
  );
}

export async function getStaticProps() {
  let postsRepository = new PostsRepository('../blog.pages/portfolio')
  let allPostsData = postsRepository.getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}
