import Layout from '../../components/layout';
import OpenGraphMeta from '../../components/openGraphMeta'
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { PostsRepository } from '../../data/postsRepository'
import { useRouter } from 'next/router'
import { strings } from '../../public/const';

export default function Post({ postData }) {
  const router = useRouter();
  const url = router.url;
  return (
    <Layout showTitle>
      <Head>
        <title>{postData.title}</title>
        <OpenGraphMeta
          title={postData.title}
          description={postData.title}
          url={url}
          image={postData.poster}
          siteName={strings.siteTitle}
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  let postsRepository = new PostsRepository('../blog.pages/portfolio')
  const paths = postsRepository.getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let postsRepository = new PostsRepository('../blog.pages/portfolio')
  const postData = await postsRepository.getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
