import Head from 'next/head';
import Layout from '../components/layout';
import OpenGraphMeta from '../components/openGraphMeta'
import { Strings, OwnerInfo } from '../public/Const';
import Spacer from '../components/spacer.js';
import PostsShowcase from '../components/PostsShowcase';
import { PostsRepository } from '../data/PostsRepository'

export default function Home({posts}) {
  return (
    <Layout showTitle={true} showFooter={true}>
      <Head>
        <title>{Strings.siteTitle}</title>
        <OpenGraphMeta
          title={Strings.siteTitle}
          description={Strings.siteDescription}
          url={Strings.siteHost}
          image={OwnerInfo.photoPath}
          siteName={Strings.siteTitle}
        />
      </Head>
      <Spacer axis="vertical" size={32} />
      <section>
        <PostsShowcase posts={posts} postLinkPrefix = "blog"/>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsRepository = new PostsRepository('../blog.pages/blog')
  const posts = postsRepository.getSortedPostsData();
  return {
    props: {
      posts
    },
  };
}
