import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
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
        <meta name="keywords" content="Shafayats blog shafas blog" />
      </Head>
      {/* <Script strategy="lazyOnload"></Script> */}

      <nav className="mt-5">
        <ul className="flex justify-center space-x-5">
          <li>Home</li>
          <li>Blog</li>
          <li>About me</li>
        </ul>
      </nav>
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
                libraries. All major web browsers have a dedicated JavaScript
                engine to execute the code on users devices. JavaScript is a
                high-level, often just-in-time compiled language that conforms
                to the ECMAScript standard. It has dynamic typing,
                prototype-based object-orientation, and first-class functions.
                It is multi-paradigm, supporting event-driven, functional, and
                imperative programming styles. It has application programming
                interfaces (APIs) for working with text, dates, regular
                expressions, standard data structures, and the Document Object
                Model (DOM). The ECMAScript standard does not include any
                input/output (I/O), such as networking, storage, or graphics
                facilities. In practice, the web browser or other runtime system
                provides JavaScript APIs for I/O. JavaScript engines were
                originally used only in web browsers, but are now core
                components of some servers and a variety of applications. The
                most popular runtime system for this usage is Node.js. Although
                Java and JavaScript are similar in name, syntax, and respective
                standard libraries, the two languages are distinct and differ
                greatly in design.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
