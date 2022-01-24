import Head from "next/head";
import { useRouter } from "next/router";
import Shared from "../components/Shared/Shared";
import styles from "../styles/Home.module.css";

function Home() {
  const router = useRouter();
  const handleButton = () => {
    console.log("Your Order is placing");
    router.push("/product");
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>This is Home page</h1>
          <p className={styles.text1}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            vitae placeat iure inventore ea tenetur, fugit eum provident non
            nulla quis sed amet possimus nemo. In, suscipit. Doloremque, eius
            cumque.
          </p>
          <p className={styles.text2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            vitae placeat iure inventore ea tenetur, fugit eum provident non
            nulla quis sed amet possimus nemo. In, suscipit. Doloremque, eius
            cumque.
          </p>
          <br></br>
          <br></br>
          <button className={styles.btn} onClick={handleButton}>
            Place Order
          </button>
        </div>
        <Shared></Shared>
      </div>
    </>
  );
}

export default Home;
