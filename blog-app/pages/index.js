import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { strings } from '../public/const';
import Divider from '@mui/material/Divider';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <p>{strings.myDescription}</p>
        <Divider aria-hidden="true" />
        <p><Link href='/blog'>{strings.blogTitle}</Link></p>
        <p><Link href='/portfolio'>{strings.portfolioTitle}</Link></p>
      </section>
    </Layout>
  );
}
