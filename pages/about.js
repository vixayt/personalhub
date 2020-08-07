import Head from 'next/head';
import Layout from '../components/Layout';
import { useState } from 'react';

function Budget({ data }) {
  // console.log(data);
  const info = data.body.Item;
  return (
    <Layout>
      <Head>
        <title>About Ted</title>
      </Head>
      <h3>
        {info.firstName.S} {info.lastName.S}
      </h3>
      <div>
        {info.currentExperience.M.role.S},{' '}
        <span>{info.currentExperience.M.currentCompany.S}</span>
        <br />
        <br />
        Technologies:
        {info.frameworks.SS.map((framework) => {
          return <div key={framework}>{framework}</div>;
        })}
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://ihoe452iq5.execute-api.us-west-2.amazonaws.com/prod`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Budget;
