import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>titulo do post</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              inventore officia esse assumenda dolorum quia dignissimos, at
              voluptate quos repudiandae rerum consequuntur, sequi ipsa ex
              perspiciatis pariatur similique impedit. Provident.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>titulo do post</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              inventore officia esse assumenda dolorum quia dignissimos, at
              voluptate quos repudiandae rerum consequuntur, sequi ipsa ex
              perspiciatis pariatur similique impedit. Provident.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>titulo do post</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              inventore officia esse assumenda dolorum quia dignissimos, at
              voluptate quos repudiandae rerum consequuntur, sequi ipsa ex
              perspiciatis pariatur similique impedit. Provident.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
