import Head from 'next/head';
import React from 'react';

const About = () => {
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
      <h2>This is about page</h2>
    </div>
  );
};

export default About;
