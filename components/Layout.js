import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="og:title" content="Home Budget" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/darkly/bootstrap.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"
          integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <br />
      <div>
        <main className="container">{children}</main>
      </div>
    </div>
  );
}
