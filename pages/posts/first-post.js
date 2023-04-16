import Link from "next/link";
import Head from 'next/head';
import Layout from "../../componets/layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}