import Link from "next/link";
import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <Link href="/product">
        <a>products</a>
      </Link>
      <h1>Details About Product {productId}</h1>;
    </div>
  );
}

export default ProductDetails;
