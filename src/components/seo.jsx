import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>Capital Valley {pageTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="0 KM From Airport" />
      <meta name="robots" content="capital valley" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href={font} rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
