import Head from "next/head";
import Link from "next/link";

function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <h1>This is Blog page</h1>
      </div>
    </>
  );
}

export default Blog;
