import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { strings } from '../public/const';
import { PostsRepository } from '../data/postsRepository'
import ImagePalette from '../components/imagePalette';

export default function Portfolio({ allPostsData }) {
  return (
    <Layout showHomeBottomNavigation>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{strings.blogTitle}</h2>
        <ImagePalette items = {allPostsData}/>
      </section>
    </Layout>
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
