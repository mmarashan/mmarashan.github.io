import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { strings } from '../public/const';
import Spacer from './spacer.js';


export default function Layout({ children, showHomeBottomNavigation }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={strings.siteTitle}
        />
      </Head>
      <Spacer axis="vertical" size={32} />
      <main>{children}</main>
      { showHomeBottomNavigation && (
        <div className={styles.backToHome}>
          <Link href="/">{strings.backToHome}</Link>
        </div>
      )}
    </div>
  );
}
