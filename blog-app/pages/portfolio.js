import Head from 'next/head';
import Layout from '../components/layout';
import ShowcaseItem from '../components/showcaseItem';
import utilStyles from '../styles/utils.module.css';
import { strings } from '../public/const';
import { PostsRepository } from '../data/postsRepository'

export default function Portfolio({ allPostsData }) {
  return (
    <Layout showHomeBottomNavigation>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{strings.portfolioTitle}</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title, poster, tags }) => (
              <ShowcaseItem id = {id} date = {date} title = {title} poster = {poster} tags = {tags}/>
            ))
          }
        </ul>
      </section>
    </Layout>
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
