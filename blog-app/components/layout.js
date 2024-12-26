import Head from 'next/head';
import styles from './layout.module.css';
import { Strings, Resources } from '../public/Const';
import { Suspense } from "react";
import { Metrika } from "../components/metrica";
import SiteFooter from './SiteFooter.tsx';
import SiteHeader from './SiteHeader.tsx'

export default function Layout({ children, showTitle, showFooter, showSubitleWithTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name={Strings.siteDescription}
          content={Strings.siteTitle}
        />
      </Head>
      <SiteHeader showTitle={showTitle} showSubitleWithTitle = {showSubitleWithTitle}/>
      <main>
        {children}
        <Suspense>
          <Metrika id = {Resources.metricaId} />
        </Suspense>
      </main>
      <footer>
        {showFooter && <SiteFooter/>}
      </footer>
    </div>
  );
}
