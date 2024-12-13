import Head from 'next/head';
import styles from './layout.module.css';
import { Strings, resources } from '../public/Const';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Suspense } from "react";
import { Metrika } from "../components/metrica";
import SiteFooter from './SiteFooter.tsx';

export default function Layout({ children, showTitle, showFooter }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name={Strings.siteDescription}
          content={Strings.siteTitle}
        />
      </Head>
      <h1 className={utilStyles.textAlignCenter}>
        {showTitle && <Link href='/' className={`${utilStyles.siteTitle}`}>{Strings.siteTitle}</Link>}
        {showTitle && <p className={utilStyles.siteDescription}>{Strings.siteDescription}</p>
        }
      </h1>
      <main>
        {children}
        <Suspense>
          <Metrika id = {resources.metricaId} />
        </Suspense>
      </main>
      <footer>
        {showFooter && <SiteFooter aaa={"asd"}/>}
      </footer>
    </div>
  );
}
