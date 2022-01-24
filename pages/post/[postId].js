import Head from "next/head";

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post Details</title>
      </Head>
      <div>
        <h2>Post Id: {post.id}</h2>
        <h5>Post Title: {post.title}</h5>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();

  const paths = data.map((post) => {
    return {
      params: { postId: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await responce.json();

  return {
    props: {
      post: data,
    },
  };
}
