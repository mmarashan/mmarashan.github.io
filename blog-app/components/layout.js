import Head from 'next/head';
import styles from './layout.module.css';
import { strings, resources } from '../public/const';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Suspense } from "react";
import { Metrika } from "../components/metrica";

export default function Layout({ children, showTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content={strings.siteTitle}
        />
      </Head>
      <h1 className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        {showTitle && <Link href='/' className={utilStyles.siteTitle}>{strings.siteTitle}</Link>}
      </h1>
      <main>
        {children}
        <Suspense>
          <Metrika id = {resources.metricaId} />
        </Suspense>
      </main>
    </div>
  );
}
