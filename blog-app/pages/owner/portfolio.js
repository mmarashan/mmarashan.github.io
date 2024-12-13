import PostsShowcase from '../../components/PostsShowcase.tsx';
import { Strings } from '../../public/Const';
import { PostsRepository } from '../../data/PostsRepository.tsx'
import Head from 'next/head';
import Layout from '../../components/layout.js';
import OpenGraphMeta from '../../components/openGraphMeta.js'
import Spacer from '../../components/spacer.js';
import utilStyles from '../../styles/utils.module.css';

export default function PortfolioShowcase({ posts }) {
  return (
    <Layout showFooter>
      <Head>
        <title>{Strings.siteTitle}</title>
        <OpenGraphMeta
          title={Strings.siteTitle}
          description={Strings.siteTitle}
          url={Strings.siteHost}
          image="/images/profile.webp"
          siteName={Strings.siteTitle}
        />
      </Head>
      <Spacer axis="vertical" size={32} />
      <section>
        <h2 className={utilStyles.headingLg}>{Strings.portfolioTitle}</h2>
        <PostsShowcase posts={posts} postLinkPrefix = "portfolio"/>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let postsRepository = new PostsRepository('../blog.pages/portfolio')
  let posts = postsRepository.getSortedPostsData();
  return {
    props: {
      posts
    },
  };
}
