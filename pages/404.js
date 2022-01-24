import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Opsss.....</h1>
      <h2>Page not found</h2>
      <p>
        Go to back{" "}
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default PageNotFound;
