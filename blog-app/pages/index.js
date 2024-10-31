import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { strings } from '../public/const';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Stack from '@mui/material/Stack';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <p>{strings.myDescription}</p>
        <Divider aria-hidden="true" />
        <p><Stack direction="row" spacing={4}>
          <Link href='/portfolio'>👨🏻‍💻 Портфолио</Link>
          <Link href='/blog'>📝 Блог</Link>
        </Stack>
        </p>
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
