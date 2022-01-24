import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="Logo" width={50} height={50}></Image>
      </div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <Link href="/post">
        <a>Posts</a>
      </Link>
    </nav>
  );
};

export default Navbar;
