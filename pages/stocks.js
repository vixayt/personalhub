import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';

function Stocks({ data }) {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>Home Stocks</title>
      </Head>
      <div>Stock Status</div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://z8mcjsdp5a.execute-api.us-west-2.amazonaws.com/Prod`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Stocks;
