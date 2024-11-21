import Head from 'next/head';
import Layout from '../components/layout';
import OpenGraphMeta from '../components/openGraphMeta'
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import { strings } from '../public/const';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Image from 'next/image';
import Spacer from '../components/spacer.js';
import ContactsStage from '../components/contactsStage.js'
import { MyContacts } from '../public/const';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{strings.siteTitle}</title>
        <OpenGraphMeta
          title={strings.siteTitle}
          description={strings.siteTitle}
          url={strings.siteHost}
          image="/images/profile.webp"
          siteName={strings.siteTitle}
        />
      </Head>
      <Spacer axis="vertical" size={32} />
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
      <section>
        <p className={`${utilStyles.myDescription} ${utilStyles.textAlignCenter}`}>
          {strings.myDescription}
        </p>
        <ContactsStage contacts={MyContacts}/> 
      </section>
      <Divider aria-hidden="true" />
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <p><Link href='/blog'>{strings.blogTitle}</Link></p>
        <p><Link href='/portfolio'>{strings.portfolioTitle}</Link></p>
      </section>
    </Layout>
  );
}
