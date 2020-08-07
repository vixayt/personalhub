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
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin
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
