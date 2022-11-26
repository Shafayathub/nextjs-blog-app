import Head from 'next/head';
import Image from 'next/image';

// import Script from 'next/script';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shafayats Blog</title>
        <meta
          name="description"
          content="Shafayats Blog as a beginner coder for beginner coders."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Shafayats blog, shafas blog" />
      </Head>
      {/* <Script strategy="lazyOnload"></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Shafayats Blog</h1>

        <p className={styles.description}>
          A blog by a beginner coder for beginner coders.
        </p>

        <div className={styles.grid}>
          <div>
            <h2 className="text-2xl font-bold">Popular Blogs</h2>
            <div className="mt-5">
              <h3 className="mb-3 text-lg font-medium">
                How to learn JavaScript - Shafayats Blog
              </h3>
              <p>
                JavaScript, often abbreviated JS, is a programming language that
                is one of the core technologies of the World Wide Web, alongside
                HTML and CSS. Over 97% of websites use JavaScript on the client
                side for web page behavior, often incorporating third-party
                libraries.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="mb-3 text-lg font-medium">
                How to learn JavaScript - Shafayats Blog
              </h3>
              <p>
                JavaScript, often abbreviated JS, is a programming language that
                is one of the core technologies of the World Wide Web, alongside
                HTML and CSS. Over 97% of websites use JavaScript on the client
                side for web page behavior, often incorporating third-party
                libraries.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="mb-3 text-lg font-medium">
                How to learn JavaScript - Shafayats Blog
              </h3>
              <p>
                JavaScript, often abbreviated JS, is a programming language that
                is one of the core technologies of the World Wide Web, alongside
                HTML and CSS. Over 97% of websites use JavaScript on the client
                side for web page behavior, often incorporating third-party
                libraries.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
