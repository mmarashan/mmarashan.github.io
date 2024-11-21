import Head from 'next/head';
import Layout from '../components/layout';
import ShowcaseItem from '../components/showcaseItem';
import utilStyles from '../styles/utils.module.css';
import { strings } from '../public/const';

export default function PostsShowcase({ title, posts, postLinkPrefix }) {
  return (
    <Layout showTitle>
      <Head>
        <title>{strings.siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{title}</h2>
        <ul className={utilStyles.list}>
          {
            posts.map(({ id, date, title, poster, tags }) => (
              <li className={utilStyles.listItem}>
              <ShowcaseItem key = {id} id = {id} date = {date} title = {title} poster = {poster} tags = {tags} link={`/${postLinkPrefix}/${id}`}/>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  );
}