import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';

function Budget({ data }) {
  console.log(data);

  return (
    <Layout>
      <Head>
        <title>Home Budget</title>
      </Head>
      <div>Here's how your budget is doing.</div>
    </Layout>
  );
}

// // This gets called on every request
// export async function getStaticProps() {
//   // Fetch data from external API
//   // const res = await fetch(`https://swapi.dev/api/people/1`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default Budget;
