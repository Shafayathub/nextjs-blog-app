import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Shafayats Blog</title>
        <meta
          name="description"
          content="Shafayats Blog as a beginner coder for beginner coders."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Shafayats blog, shafas blog" />
      </Head>
      <div className="flex justify-center items-center flex-wrap mx-10 lg:mx-72">
        <div>
          <h2 className="text-2xl font-bold text-center mt-12">
            Popular Blogs
          </h2>
          <Link href={'/blogpost/learn-javascript'}>
            <div className="mt-5 border-2 rounded-xl p-5">
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
                to the ECMAScript standard.
              </p>
            </div>
          </Link>
          <Link href={'/blogpost/Shafayats-Blog'}>
            <div className="mt-5 border-2 rounded-xl p-5">
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
                to the ECMAScript standard.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
