import Head from 'next/head';
import Layout from '../components/layout.js';
import OpenGraphMeta from '../components/openGraphMeta.js'
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import { Strings, MyContacts, OwnerInfo } from '../public/Const';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Image from 'next/image';
import Spacer from '../components/spacer.js';
import ContactsStage from '../components/contactsStage.js'

export default function MyPage() {
  return (
    <Layout showTitle={false} showFooter={false}>
      <Head>
        <title>{OwnerInfo.nameWithSurname}</title>
        <OpenGraphMeta
          title={Strings.siteTitle}
          description={Strings.siteDescription}
          url={Strings.siteHost}
          image={OwnerInfo.photoPath}
          siteName={Strings.siteTitle}
        />
      </Head>
      <Spacer axis="vertical" size={32} />
      <header className={styles.header}>
        <Image
          priority
          src={OwnerInfo.photoPath}
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={OwnerInfo.nameWithSurname}
        />
        <h1 className={utilStyles.heading2Xl}>{OwnerInfo.nameWithSurname}</h1>
      </header>
      <section>
        <p className={`${utilStyles.myDescription} ${utilStyles.textAlignCenter}`}>
          {OwnerInfo.about}
        </p>
        <ContactsStage contacts={MyContacts}/> 
      </section>
      <Spacer axis="vertical" size={16} />
      <Divider aria-hidden="true" />
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <p><Link href='/'>{Strings.blogTitle}</Link></p>
        <p><Link href='/owner/portfolio'>{Strings.portfolioTitle}</Link></p>
      </section>
    </Layout>
  );
}
