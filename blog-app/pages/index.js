import Head from 'next/head';
import Layout from '../components/layout';
import ShowcaseItem from '../components/showcaseItem';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { strings } from '../public/const';
import Divider from '@mui/material/Divider';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <p>{strings.myDescription}</p>
      </section>
      <Divider aria-hidden="true" />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{strings.blogTitle}</h2>
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
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
