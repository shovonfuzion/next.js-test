import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const PostList = ({ posts }) => {
  const history = useRouter();
  const handleButton = () => {
    history.push("/");
  };
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <div>
        <h1>List of Post:</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>
              Post Id: {post.id} | Post title: {post.title}
            </h3>
            <Link href={`post/${post.id}`} passHref>
              <a>details</a>
            </Link>
            <hr></hr>
          </div>
        ))}
        <button onClick={handleButton}>Home</button>
      </div>
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();

  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
}
