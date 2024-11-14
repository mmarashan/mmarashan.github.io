import Head from 'next/head';
import Layout from '../components/layout';
import OpenGraphMeta from '../components/openGraphMeta'
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import { strings } from '../public/const';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{strings.siteTitle}</title>
        <OpenGraphMeta
          title={strings.siteTitle}
          description={strings.siteTitle}
          url={strings.siteUrl}
          image="/images/profile.webp"
          siteName={strings.siteTitle}
        />
      </Head>
      <header className={styles.header}>
            <Image
              priority
              src="/images/profile.webp"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={strings.myName}
            />
            <h1 className={utilStyles.heading2Xl}>{strings.myName}</h1>
      </header>
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <p>{strings.myDescription}</p>
        <Divider aria-hidden="true" />
        <p><Link href='/blog'>{strings.blogTitle}</Link></p>
        <p><Link href='/portfolio'>{strings.portfolioTitle}</Link></p>
      </section>
    </Layout>
  );
}
