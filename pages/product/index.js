import Head from "next/head";
import Link from "next/link";

function Product({ productId = 100 }) {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <h2>
          <Link href="/product/1">
            <a>Product-1</a>
          </Link>
        </h2>
        <h2>
          <Link href="/product/2">
            <a>Product-2</a>
          </Link>
        </h2>
        <h2>
          <Link href="/product/3">
            <a>Product-3</a>
          </Link>
        </h2>
        <h2>
          <Link href={`/product/${productId}`} replace>
            <a>Product-{productId}</a>
          </Link>
        </h2>
      </div>
    </>
  );
}

export default Product;
