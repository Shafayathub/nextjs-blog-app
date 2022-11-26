import React from 'react';
import { useRouter } from 'next/router';
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="mx-10 lg:mx-72 mt-12">
      <h1 className="text-center text-xl font-semibold">
        Tilte of the blog - {slug}
      </h1>
      <hr className="my-5" />
      <p>
        JavaScript, often abbreviated JS, is a programming language that is one
        of the core technologies of the World Wide Web, alongside HTML and CSS.
        Over 97% of websites use JavaScript on the client side for web page
        behavior, often incorporating third-party libraries. All major web
        browsers have a dedicated JavaScript engine to execute the code on users
        devices. JavaScript is a high-level, often just-in-time compiled
        language that conforms to the ECMAScript standard.
      </p>
    </div>
  );
};

export default Slug;
