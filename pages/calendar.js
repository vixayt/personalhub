import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';

function Calendar() {
  return (
    <Layout>
      <Head>
        <title>Home Calendar</title>
      </Head>
      <div>Upcoming events.</div>
    </Layout>
  );
}

export default Calendar;
