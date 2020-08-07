import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';

function Budget({ data }) {
  return (
    <Layout>
      <Head>
        <title>Home Budget</title>
      </Head>
      <div>Here's how your budget is doing.</div>
    </Layout>
  );
}

export default Budget;
